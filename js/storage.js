/**
 * Shobar Sheba - Data Management Layer
 * Handles Firebase Firestore sync with resilient LocalStorage fallback
 */

const PortalStorage = {
  // Current in-memory active data
  activeData: null,
  isFirestoreActive: false,

  /**
   * Initialize data store
   */
  async init() {
    try {
      // 1. Check if Firebase is available and initialized
      if (typeof window !== "undefined" && window.firebaseApp && window.firebaseFirestore) {
        try {
          const remoteData = await this.loadFromFirestore();
          if (remoteData && Object.keys(remoteData).length > 0) {
            this.activeData = remoteData;
            this.isFirestoreActive = true;
            this.saveToLocal(this.activeData);
            return this.activeData;
          }
        } catch (fbErr) {
          console.warn("Firestore fetch error, falling back to local:", fbErr);
        }
      }

      // 2. Load from localStorage if previously stored
      if (typeof localStorage !== "undefined") {
        const local = localStorage.getItem(window.APP_CONFIG.storageKeys.data);
        if (local) {
          try {
            this.activeData = JSON.parse(local);
            return this.activeData;
          } catch (e) {
            console.error("Corrupted local data, resetting to seed data:", e);
          }
        }
      }

      // 3. Fallback to Official Seed Data
      this.resetToSeedData();
      return this.activeData;
    } catch (err) {
      console.error("Init storage error:", err);
      this.activeData = JSON.parse(JSON.stringify(window.SHOBAR_SHEBA_SEED_DATA));
      return this.activeData;
    }
  },

  /**
   * Reset data to official seed data
   */
  resetToSeedData() {
    this.activeData = JSON.parse(JSON.stringify(window.SHOBAR_SHEBA_SEED_DATA));
    this.saveToLocal(this.activeData);
    return this.activeData;
  },

  /**
   * Save to localStorage
   */
  saveToLocal(data) {
    if (typeof localStorage !== "undefined") {
      try {
        localStorage.setItem(window.APP_CONFIG.storageKeys.data, JSON.stringify(data));
      } catch (e) {
        console.error("Failed to save to localStorage:", e);
      }
    }
  },

  /**
   * Load data from Firestore if configured
   */
  async loadFromFirestore() {
    if (typeof window === "undefined" || !window.firebaseFirestore) return null;
    const db = window.firebaseFirestore;
    const docRef = db.collection("portal_content").doc("ctg_main_v1");
    const docSnap = await docRef.get();
    if (docSnap.exists) {
      return docSnap.data();
    }
    return null;
  },

  /**
   * Sync active data to Firestore
   */
  async syncToFirestore() {
    if (typeof window !== "undefined" && window.firebaseFirestore) {
      try {
        const db = window.firebaseFirestore;
        await db.collection("portal_content").doc("ctg_main_v1").set(this.activeData);
        return true;
      } catch (e) {
        console.warn("Firestore sync error:", e);
        return false;
      }
    }
    return false;
  },

  /**
   * Get all active data
   */
  getData() {
    if (!this.activeData) {
      this.resetToSeedData();
    }
    return this.activeData;
  },

  /**
   * Add a new item to a category
   */
  async addItem(category, item) {
    if (!this.activeData) this.getData();

    if (!item.id) {
      item.id = `${category}_${Date.now()}`;
    }

    if (category === "localRoutes" || category === "brtcServices") {
      this.activeData.busRoutes[category].unshift(item);
    } else if (category === "bazarDam") {
      this.activeData.bazarDam.items.unshift(item);
    } else if (this.activeData[category]) {
      this.activeData[category].unshift(item);
    } else {
      throw new Error(`Category ${category} not found`);
    }

    this.saveToLocal(this.activeData);
    await this.syncToFirestore();
    return item;
  },

  /**
   * Update an existing item
   */
  async updateItem(category, id, fields) {
    if (!this.activeData) this.getData();

    let found = false;

    if (category === "localRoutes" || category === "brtcServices") {
      const list = this.activeData.busRoutes[category];
      const idx = list.findIndex(x => (x.id === id || x.number === id || x.service === id));
      if (idx !== -1) {
        list[idx] = { ...list[idx], ...fields };
        found = true;
      }
    } else if (category === "bazarDam") {
      const list = this.activeData.bazarDam.items;
      const idx = list.findIndex(x => x.id === id);
      if (idx !== -1) {
        list[idx] = { ...list[idx], ...fields };
        found = true;
      }
    } else if (this.activeData[category]) {
      const list = this.activeData[category];
      const idx = list.findIndex(x => x.id === id);
      if (idx !== -1) {
        list[idx] = { ...list[idx], ...fields };
        found = true;
      }
    }

    if (!found) throw new Error(`Item ${id} not found in ${category}`);

    this.saveToLocal(this.activeData);
    await this.syncToFirestore();
    return true;
  },

  /**
   * Delete an item from a category
   */
  async deleteItem(category, id) {
    if (!this.activeData) this.getData();

    if (category === "localRoutes" || category === "brtcServices") {
      this.activeData.busRoutes[category] = this.activeData.busRoutes[category].filter(
        x => x.id !== id && x.number !== id && x.service !== id
      );
    } else if (category === "bazarDam") {
      this.activeData.bazarDam.items = this.activeData.bazarDam.items.filter(x => x.id !== id);
    } else if (this.activeData[category]) {
      this.activeData[category] = this.activeData[category].filter(x => x.id !== id);
    }

    this.saveToLocal(this.activeData);
    await this.syncToFirestore();
    return true;
  },

  /**
   * Update Bazar Dam Date / Notice
   */
  async updateBazarMeta(newDateLabel, customNotice) {
    if (!this.activeData) this.getData();
    if (newDateLabel) {
      this.activeData.bazarDam.meta.currentDateLabel = newDateLabel;
    }
    if (customNotice) {
      this.activeData.bazarDam.meta.sourceNoticeBn = customNotice;
    }
    this.saveToLocal(this.activeData);
    await this.syncToFirestore();
    return true;
  },

  /**
   * Universal search across portal data
   * Uses smart multi-token relevance scoring with title priority boost
   */
  searchAll(query) {
    if (!query || !query.trim()) return [];
    const qRaw = query.trim().toLowerCase();
    const tokens = qRaw.split(/[\s,।/-]+/).filter(t => t.length > 0);
    const data = this.getData();
    const scoredResults = [];

    const calculateScore = (primaryTitles, secondaryDetails) => {
      const titleStr = primaryTitles.filter(Boolean).join(" ").toLowerCase();
      const detailStr = secondaryDetails.filter(Boolean).join(" ").toLowerCase();
      let score = 0;

      // Exact phrase matches
      if (titleStr.includes(qRaw)) score += 200;
      else if (detailStr.includes(qRaw)) score += 80;

      const titleWords = titleStr.split(/[\s,।/-]+/);
      const detailWords = detailStr.split(/[\s,।/-]+/);

      tokens.forEach(tok => {
        if (tok.length <= 1) return;
        if (titleWords.includes(tok)) {
          score += 60;
        } else if (titleWords.some(w => w.startsWith(tok) || w.endsWith(tok))) {
          score += 35;
        } else if (detailWords.includes(tok)) {
          score += 25;
        } else if (detailWords.some(w => w.startsWith(tok) || w.endsWith(tok))) {
          score += 15;
        }
      });
      return score;
    };

    const consider = (itemObj, primaryTitles, secondaryDetails) => {
      const score = calculateScore(primaryTitles, secondaryDetails);
      if (score >= 25) {
        scoredResults.push({ item: itemObj, score });
      }
    };

    // 1. Hospitals
    data.hospitals.forEach(h => {
      consider({
        category: "hospital",
        categoryName: "হাসপাতাল",
        title: h.nameBn || h.name,
        subTitle: h.name,
        address: h.address,
        area: h.area,
        phone: h.phone,
        phones: h.phones,
        verified: true
      }, [h.name, h.nameBn], [h.address, h.area, h.phone, h.type, h.notes]);
    });

    // 2. Ambulances
    data.ambulances.forEach(a => {
      consider({
        category: "ambulance",
        categoryName: "অ্যাম্বুলেন্স",
        title: a.nameBn || a.name,
        subTitle: a.name,
        address: a.address,
        area: a.area,
        phone: a.phone,
        phones: a.phones,
        extra: `ভাড়া: ${a.charge}`,
        verified: true
      }, [a.name, a.nameBn], [a.address, a.area, a.phone, a.category, a.notes]);
    });

    // 3. Police Thanas
    data.police.forEach(p => {
      consider({
        category: "police",
        categoryName: "পুলিশ",
        title: p.nameBn || p.name,
        subTitle: p.name,
        address: p.address,
        area: p.area,
        phone: p.phone,
        phones: p.phones,
        verified: p.verified !== false,
        verifyText: p.verifyText
      }, [p.name, p.nameBn], [p.area, p.phone, p.address, p.notes]);
    });

    // 4. Fire Service
    data.fireService.forEach(f => {
      consider({
        category: "fire-service",
        categoryName: "ফায়ার সার্ভিস",
        title: f.nameBn || f.name,
        subTitle: f.name,
        address: f.address,
        area: f.area,
        phone: f.phone,
        phones: f.phones,
        verified: f.verified !== false,
        verifyText: f.verifyText
      }, [f.name, f.nameBn], [f.address, f.area, f.coverage, f.phone, f.notes]);
    });

    // 5. Govt Offices
    data.govtOffices.forEach(g => {
      consider({
        category: "govt-office",
        categoryName: "সরকারি অফিস",
        title: g.nameBn || g.name,
        subTitle: g.name,
        address: g.address,
        area: g.area,
        phone: g.phone,
        phones: g.phones,
        extra: `সময়: ${g.timing}`,
        verified: g.verified !== false,
        verifyText: g.verifyText
      }, [g.name, g.nameBn], [g.address, g.area, g.phone, g.timing, g.notes]);
    });

    // 6. Blood Banks & Donors
    data.bloodBanks.forEach(b => {
      consider({
        category: "blood",
        categoryName: "ব্লাড ব্যাংক",
        title: b.nameBn || b.name,
        subTitle: b.name,
        address: b.address,
        area: b.area,
        phone: b.phone,
        phones: b.phones,
        verified: true
      }, [b.name, b.nameBn], [b.address, b.area, b.phone, b.notes]);
    });

    data.sampleDonors.forEach(s => {
      consider({
        category: "blood",
        categoryName: "রক্তদাতা (নমুনা)",
        title: `${s.name} (${s.bloodGroup})`,
        subTitle: `রক্তের গ্রুপ: ${s.bloodGroup} | এলাকা: ${s.area}`,
        address: s.area,
        area: s.area,
        phone: s.phone,
        phones: [],
        extra: `সর্বশেষ রক্তদান: ${s.lastDonation} | ${s.availableBn}`,
        verified: false,
        verifyText: "নমুনা ডোনার"
      }, [s.name, s.bloodGroup], [s.area, s.availableBn]);
    });

    // 7. Bus Routes
    data.busRoutes.localRoutes.forEach(br => {
      consider({
        category: "bus-route",
        categoryName: "বাস রুট",
        title: `${br.numberBn} (${br.distance})`,
        subTitle: br.routeTitleBn,
        address: br.stopsBn,
        area: br.routeTitle,
        phone: "",
        phones: [],
        verified: true
      }, [br.number, br.numberBn, br.routeTitle, br.routeTitleBn], [br.stops, br.stopsBn]);
    });

    data.busRoutes.brtcServices.forEach(bs => {
      consider({
        category: "bus-route",
        categoryName: "বিআরটিসি বাস",
        title: bs.serviceBn,
        subTitle: bs.routeBn,
        address: bs.details,
        area: "BRTC",
        phone: "",
        phones: [],
        verified: true
      }, [bs.service, bs.serviceBn], [bs.route, bs.routeBn, bs.details]);
    });

    // 8. Bazar Dam
    data.bazarDam.items.forEach(bd => {
      consider({
        category: "bazar-dam",
        categoryName: "বাজার দর",
        title: bd.itemBn,
        subTitle: bd.item,
        address: `দাম: ৳ ${bd.price.toFixed(2)} (${bd.unitBn})`,
        area: "বাজার দর",
        phone: "",
        phones: [],
        verified: true
      }, [bd.item, bd.itemBn], []);
    });

    // Sort descending by relevance score
    scoredResults.sort((a, b) => b.score - a.score);

    return scoredResults.map(x => x.item);
  }
};

window.PortalStorage = PortalStorage;
