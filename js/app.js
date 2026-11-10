/**
 * Professional Minimal SVG Line Icons (Stroke style, 2px stroke, currentColor)
 * Replaces all emojis with clean, single-color professional healthcare/civic icons.
 */
const Icons = {
  hospital: `<svg class="svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v12m-6-6h12"/><rect x="3" y="3" width="18" height="18" rx="4"/></svg>`,
  ambulance: `<svg class="svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2a1 1 0 0 0 1-1v-3.3a1 1 0 0 0-.7-.95L19 11.9A2 2 0 0 0 17.5 10H14V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M8 10h3m-1.5-1.5v3"/></svg>`,
  blood: `<svg class="svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  police: `<svg class="svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  fire: `<svg class="svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c.5 3.5 3.5 5 3.5 9a5.5 5.5 0 1 1-11 0c0-3.5 3-5.5 3.5-9 2 2.5 3.5 4.5 4 0z"/></svg>`,
  govt: `<svg class="svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 3l9 7H3z"/></svg>`,
  bus: `<svg class="svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="16" rx="3"/><path d="M4 11h16M8 3v4M16 3v4M4 15h16"/><circle cx="7.5" cy="15.5" r="1"/><circle cx="16.5" cy="15.5" r="1"/><path d="M6 19v2M18 19v2"/></svg>`,
  bazar: `<svg class="svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  search: `<svg class="svg-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  searchLarge: `<svg class="svg-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  phone: `<svg class="svg-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  phoneLarge: `<svg class="svg-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  location: `<svg class="svg-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  ai: `<svg class="svg-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 15h.01M16 15h.01"/></svg>`,
  user: `<svg class="svg-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  time: `<svg class="svg-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  calendar: `<svg class="svg-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  info: `<svg class="svg-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  shield: `<svg class="svg-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  money: `<svg class="svg-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/></svg>`,
  arrowRight: `<svg class="svg-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  alert: `<svg class="svg-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
};

if (typeof window !== 'undefined') {
  window.Icons = Icons;
}

/**
 * Shobar Sheba - Main Application Script
 * Single Page Architecture, Hash Routing, Bangla Interface, Admin Management
 */

const PortalApp = {
  // Current active view
  currentRoute: "home",
  activeCategoryFilter: {
    area: "all",
    bloodGroup: "all",
    search: ""
  },

  /**
   * Application Initialization
   */
  async init() {
    // 1. Initialize data storage
    await window.PortalStorage.init();

    // 2. Initialize Authentication listener
    window.PortalAuth.init((user) => {
      this.updateAuthUI(user);
      if (this.currentRoute === "admin") {
        this.renderAdminView();
      }
    });

    // 3. Setup Hash Router
    window.addEventListener("hashchange", () => this.handleRouting());
    this.handleRouting();

    // 4. Setup Global Events
    this.setupGlobalEvents();

    // 5. Initialize Full Screen Interactive SVG Background Grid
    this.initFullBgInteractiveGrid();
  },

  /**
   * Setup Global UI Events (mobile menu, search, shortcuts)
   */
  setupGlobalEvents() {
    // Mobile menu toggle
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const navMenu = document.getElementById("nav-links-menu");
    if (mobileBtn && navMenu) {
      mobileBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = navMenu.classList.toggle("open");
        mobileBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
      // Close menu when clicking link
      navMenu.addEventListener("click", (e) => {
        if (e.target.tagName === "A" || e.target.closest("a")) {
          navMenu.classList.remove("open");
          mobileBtn.setAttribute("aria-expanded", "false");
        }
      });
      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (navMenu.classList.contains("open") && !navMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
          navMenu.classList.remove("open");
          mobileBtn.setAttribute("aria-expanded", "false");
        }
      });
    }

    // Escape closes modals
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeModal("crud-modal");
        this.closeModal("settings-modal");
      }
    });
  },

  /**
   * Update UI based on user authentication state
   */
  updateAuthUI(user) {
    const adminItem = document.getElementById("nav-admin-item");
    const adminLink = document.getElementById("nav-admin-link");
    if (adminItem && adminLink) {
      if (user) {
        adminItem.style.display = "inline-block";
        adminLink.innerHTML = "ড্যাশবোর্ড";
        adminLink.classList.add("active");
      } else {
        adminItem.style.display = "none";
        adminLink.classList.remove("active");
      }
    }
  },

  /**
   * Hash Router Handler
   */
  handleRouting() {
    const hash = window.location.hash.slice(1) || "/";
    const [path, queryString] = hash.split("?");
    const params = new URLSearchParams(queryString || "");

    // Reset filters on route switch
    this.activeCategoryFilter = {
      area: "all",
      bloodGroup: "all",
      search: params.get("q") || ""
    };

    // Update active navbar link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
      const route = link.getAttribute("data-route");
      if (path === "/" && route === "home") link.classList.add("active");
      else if (path.startsWith("/" + route)) link.classList.add("active");
    });

    window.scrollTo({ top: 0, behavior: "smooth" });

    // Route dispatch
    if (path === "/" || path === "") {
      this.currentRoute = "home";
      this.renderHomeView();
    } else if (path === "/emergency") {
      this.currentRoute = "emergency";
      this.renderEmergencyView();
    } else if (path === "/hospital") {
      this.currentRoute = "hospital";
      this.renderCategoryView("hospitals", "হাসপাতাল ও ক্লিনিক", "Hospitals in Chattogram", "hospital");
    } else if (path === "/ambulance") {
      this.currentRoute = "ambulance";
      this.renderCategoryView("ambulances", "জরুরি অ্যাম্বুলেন্স সার্ভিস", "Ambulance Services in Chattogram", "ambulance");
    } else if (path === "/blood") {
      this.currentRoute = "blood";
      this.renderBloodView();
    } else if (path === "/police") {
      this.currentRoute = "police";
      this.renderCategoryView("police", "চট্টগ্রাম মেট্রোপলিটন পুলিশ (সিএমপি)", "CMP Police Thanas", "police");
    } else if (path === "/fire-service") {
      this.currentRoute = "fire-service";
      this.renderCategoryView("fireService", "ফায়ার সার্ভিস ও সিভিল ডিফেন্স", "Fire Service Stations", "fire-service");
    } else if (path === "/govt-office") {
      this.currentRoute = "govt-office";
      this.renderCategoryView("govtOffices", "সরকারি সেবা ও প্রশাসনিক দপ্তর", "Government Offices in Chattogram", "govt-office");
    } else if (path === "/bus-route") {
      this.currentRoute = "bus-route";
      this.renderBusRouteView();
    } else if (path === "/bazar-dam") {
      this.currentRoute = "bazar-dam";
      this.renderBazarDamView();
    } else if (path === "/ai-help") {
      this.currentRoute = "ai-help";
      this.renderAiHelpView();
    } else if (path === "/admin") {
      if (!window.PortalAuth.isAuthenticated()) {
        window.location.hash = "#/";
        return;
      }
      this.currentRoute = "admin";
      this.renderAdminView();
    } else if (path === "/search") {
      this.currentRoute = "search";
      this.renderSearchView(params.get("q") || "");
    } else {
      this.renderHomeView();
    }
  },

  /**
   * Helper: Show Toast Notification
   */
  showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  },

  /**
   * Helper: Open/Close Modals
   */
  openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add("active");
  },
  closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove("active");
  },

  /**
   * Open Settings Modal
   */
  openSettingsModal() {
    const keyInput = document.getElementById("setting-gemini-key");
    if (keyInput) keyInput.value = window.GeminiAssistant.getApiKey();
    this.openModal("settings-modal");
  },

  /**
   * Save Settings
   */
  saveSettings() {
    const keyInput = document.getElementById("setting-gemini-key");
    if (keyInput) {
      window.GeminiAssistant.setApiKey(keyInput.value);
      this.showToast("জেমিনি এপিআই কি সফলভাবে সংরক্ষিত হয়েছে!", "success");
    }
    this.closeModal("settings-modal");
  },

  /**
   * Reset to official seed data
   */
  async resetToOfficialSeed() {
    if (confirm("আপনি কি নিশ্চিত যে সকল পরিবর্তন মুছে ফেলে ১১ নভেম্বর ২০২৬ ডেমো উপস্থাপনার মূল অফিশিয়াল ডেটায় ফিরে যেতে চান?")) {
      window.PortalStorage.resetToSeedData();
      await window.PortalStorage.syncToFirestore();
      this.showToast("অফিসিয়াল সিড ডেটায় সফলভাবে রিসেট সম্পন্ন হয়েছে!", "success");
      this.closeModal("settings-modal");
      this.handleRouting();
    }
  },

  // =========================================================================
  // VIEW: HOME PAGE
  // =========================================================================
  renderHomeView() {
    const app = document.getElementById("app-view");
    const data = window.PortalStorage.getData();

    const hospitalCount = data.hospitals.length;
    const ambulanceCount = data.ambulances.length;
    const bloodBankCount = data.bloodBanks.length;
    const donorCount = data.sampleDonors.length;
    const policeCount = data.police.length;
    const fireCount = data.fireService.length;
    const govtCount = data.govtOffices.length;
    const busCount = data.busRoutes.localRoutes.length + data.busRoutes.brtcServices.length;
    const bazarCount = data.bazarDam.items.length;

    app.innerHTML = `
      <!-- Top Search Hero -->
      <section class="search-hero" id="hero-section">
        <div class="hero-custom-logo-wrap">
          <img src="images/logo.png" alt="সবার সেবা লোগো" class="hero-custom-logo" onerror="this.parentElement.style.display='none';">
        </div>
        <div class="search-hero-title">
          <h2>চট্টগ্রাম নাগরিক হেল্প পোর্টালে স্বাগতম</h2>
          <p>হাসপাতাল, অ্যাম্বুলেন্স, রক্তদাতা, থানা, ফায়ার সার্ভিস, বাস রুট ও নিত্যপণ্যের বাজারদর খুঁজুন এক ক্লিকে</p>
        </div>

        <div class="main-search-wrapper">
          <form onsubmit="PortalApp.handleMainSearch(event)">
            <div class="search-input-group">
              <span class="search-icon">${Icons.search}</span>
              <input type="text" id="home-main-search" class="main-search-input" placeholder="যেকোনো সেবা বা স্থান লিখে খুঁজুন (যেমন: চমেক, কোতোয়ালী থানা, এভারকেয়ার, এয়ার অ্যাম্বুলেন্স, চাল)..." autocomplete="off">
              <button type="submit" class="search-submit-btn">অনুসন্ধান</button>
            </div>
          </form>

          <div class="search-tags">
            <span class="search-tag-label">জনপ্রিয় অনুসন্ধান:</span>
            <button class="tag-btn" onclick="PortalApp.quickSearch('চমেক')">চমেক (CMCH)</button>
            <button class="tag-btn" onclick="PortalApp.quickSearch('এভারকেয়ার')">এভারকেয়ার</button>
            <button class="tag-btn" onclick="PortalApp.quickSearch('কোতোয়ালী')">কোতোয়ালী থানা</button>
            <button class="tag-btn" onclick="PortalApp.quickSearch('আগ্রাবাদ ফায়ার')">আগ্রাবাদ ফায়ার</button>
            <button class="tag-btn" onclick="PortalApp.quickSearch('O+')">O+ রক্ত</button>
            <button class="tag-btn" onclick="PortalApp.quickSearch('পতেঙ্গা')">পতেঙ্গা সী বিচ বাস</button>
            <button class="tag-btn" onclick="PortalApp.quickSearch('চাল')">চালের দাম</button>
          </div>
        </div>
      </section>

      <!-- 8 Big Cards Section -->
      <section>
        <div class="section-header">
          <h2 class="section-title">নাগরিক সেবা ক্যাটাগরি</h2>
          <p class="section-subtitle">প্রয়োজনীয় তথ্য পেতে নিচের যেকোনো ক্যাটাগরিতে ক্লিক করুন</p>
        </div>

        <div class="category-grid">
          <!-- 1. Hospital -->
          <a href="#/hospital" class="category-card cat-hospital">
            <div class="category-icon-box">${Icons.hospital}</div>
            <div class="category-card-content">
              <h3>হাসপাতাল</h3>
              <span class="cat-en-name">HOSPITAL</span>
              <p>বিশেষায়িত হাসপাতাল ও জরুরি হটলাইন</p>
            </div>
            <div class="category-card-footer">
              <span class="cat-count-badge">${hospitalCount} টি হাসপাতাল</span>
              <span class="cat-arrow">${Icons.arrowRight}</span>
            </div>
          </a>

          <!-- 2. Ambulance -->
          <a href="#/ambulance" class="category-card cat-ambulance">
            <div class="category-icon-box">${Icons.ambulance}</div>
            <div class="category-card-content">
              <h3>অ্যাম্বুলেন্স</h3>
              <span class="cat-en-name">AMBULANCE</span>
              <p>সরকারি, প্রাইভেট ও এয়ার অ্যাম্বুলেন্স</p>
            </div>
            <div class="category-card-footer">
              <span class="cat-count-badge">${ambulanceCount} টি সার্ভিস</span>
              <span class="cat-arrow">${Icons.arrowRight}</span>
            </div>
          </a>

          <!-- 3. Blood Donor -->
          <a href="#/blood" class="category-card cat-blood">
            <div class="category-icon-box">${Icons.blood}</div>
            <div class="category-card-content">
              <h3>রক্তদাতা ও ব্লাড ব্যাংক</h3>
              <span class="cat-en-name">BLOOD DONOR</span>
              <p>ব্লাড ব্যাংক ও এলাকাভিত্তিক রক্তদাতা</p>
            </div>
            <div class="category-card-footer">
              <span class="cat-count-badge">${bloodBankCount} ব্যাংক • ${donorCount} ডোনার</span>
              <span class="cat-arrow">${Icons.arrowRight}</span>
            </div>
          </a>

          <!-- 4. Police -->
          <a href="#/police" class="category-card cat-police">
            <div class="category-icon-box">${Icons.police}</div>
            <div class="category-card-content">
              <h3>পুলিশ (সিএমপি)</h3>
              <span class="cat-en-name">POLICE (CMP)</span>
              <p>১৬টি থানা ও ওসির প্রত্যক্ষ নম্বর</p>
            </div>
            <div class="category-card-footer">
              <span class="cat-count-badge">${policeCount} টি থানা</span>
              <span class="cat-arrow">${Icons.arrowRight}</span>
            </div>
          </a>

          <!-- 5. Fire Service -->
          <a href="#/fire-service" class="category-card cat-fire">
            <div class="category-icon-box">${Icons.fire}</div>
            <div class="category-card-content">
              <h3>ফায়ার সার্ভিস</h3>
              <span class="cat-en-name">FIRE SERVICE</span>
              <p>৯টি ফায়ার স্টেশন ও কন্ট্রোল রুম</p>
            </div>
            <div class="category-card-footer">
              <span class="cat-count-badge">${fireCount} টি স্টেশন</span>
              <span class="cat-arrow">${Icons.arrowRight}</span>
            </div>
          </a>

          <!-- 6. Govt Office -->
          <a href="#/govt-office" class="category-card cat-govt">
            <div class="category-icon-box">${Icons.govt}</div>
            <div class="category-card-content">
              <h3>সরকারি অফিস</h3>
              <span class="cat-en-name">GOVT OFFICE</span>
              <p>ডিসি অফিস, চসিক, সিডিএ ও পাসপোর্ট</p>
            </div>
            <div class="category-card-footer">
              <span class="cat-count-badge">${govtCount} টি দপ্তর</span>
              <span class="cat-arrow">${Icons.arrowRight}</span>
            </div>
          </a>

          <!-- 7. Bus Route -->
          <a href="#/bus-route" class="category-card cat-bus">
            <div class="category-icon-box">${Icons.bus}</div>
            <div class="category-card-content">
              <h3>বাস রুট</h3>
              <span class="cat-en-name">BUS ROUTE</span>
              <p>সিটি লোকাল বাস ও বিআরটিসি পরিবহন</p>
            </div>
            <div class="category-card-footer">
              <span class="cat-count-badge">${busCount} টি রুট</span>
              <span class="cat-arrow">${Icons.arrowRight}</span>
            </div>
          </a>

          <!-- 8. Bazar Dam -->
          <a href="#/bazar-dam" class="category-card cat-bazar">
            <div class="category-icon-box">${Icons.bazar}</div>
            <div class="category-card-content">
              <h3>দৈনিক বাজার দর</h3>
              <span class="cat-en-name">BAZAR DAM</span>
              <p>নিত্যপ্রয়োজনীয় পণ্যের বাজার মূল্য</p>
            </div>
            <div class="category-card-footer">
              <span class="cat-count-badge">${bazarCount} টি নিত্যপণ্য</span>
              <span class="cat-arrow">${Icons.arrowRight}</span>
            </div>
          </a>
        </div>
      </section>

      <!-- AI Citizen Assistant Teaser -->
      <section class="ai-teaser-card">
        <div style="display: flex; align-items: center; gap: 1.25rem;">
          <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.75rem;">${Icons.ai}</div>
          <div>
            <h3 style="font-size: 1.2rem; color: #0f172a; margin-bottom: 0.2rem;">এআই নাগরিক সহায়ক (Gemini Powered)</h3>
            <p style="font-size: 0.9rem; color: #64748b;">বাংলায় যেকোনো প্রশ্ন করুন। সাইটের তথ্য থেকে সরাসরি জেমিনি এআই উত্তর প্রদান করবে।</p>
          </div>
        </div>
        <a href="#/ai-help" class="btn btn-primary" style="padding: 0.75rem 1.5rem; font-size: 1rem;">
          প্রশ্ন করুন
        </a>
      </section>
    `;
  },

  /**
   * Full Page Interactive SVG Grid Background
   * - 40px x 40px cells spanning full viewport
   * - pointermove / touchmove instant highlight (#16a34a at fill-opacity 0.15)
   * - 1000ms smooth fade-out on leave
   * - pointer-events: none, z-index 0
   */
  initFullBgInteractiveGrid() {
    const svg = document.getElementById("interactive-bg-grid");
    if (!svg) return;

    const CELL_SIZE = 40;
    let cells = [];
    let cols = 0;
    let rows = 0;
    let activeCell = null;

    const buildGrid = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (width === 0 || height === 0) return;

      cols = Math.ceil(width / CELL_SIZE);
      rows = Math.ceil(height / CELL_SIZE);

      svg.setAttribute("width", width);
      svg.setAttribute("height", height);
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

      const fragment = document.createDocumentFragment();
      cells = [];

      for (let r = 0; r < rows; r++) {
        cells[r] = [];
        for (let c = 0; c < cols; c++) {
          const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          rect.setAttribute("x", c * CELL_SIZE);
          rect.setAttribute("y", r * CELL_SIZE);
          rect.setAttribute("width", CELL_SIZE);
          rect.setAttribute("height", CELL_SIZE);
          rect.setAttribute("class", "grid-cell");
          fragment.appendChild(rect);
          cells[r][c] = rect;
        }
      }

      svg.innerHTML = "";
      svg.appendChild(fragment);
      activeCell = null;
    };

    buildGrid();

    const handleMove = (clientX, clientY) => {
      if (clientX < 0 || clientX >= window.innerWidth || clientY < 0 || clientY >= window.innerHeight) {
        if (activeCell) {
          activeCell.classList.remove("active");
          activeCell = null;
        }
        return;
      }

      const col = Math.floor(clientX / CELL_SIZE);
      const row = Math.floor(clientY / CELL_SIZE);

      if (row >= 0 && row < rows && col >= 0 && col < cols) {
        const target = cells[row] ? cells[row][col] : null;
        if (target && target !== activeCell) {
          if (activeCell) {
            activeCell.classList.remove("active");
          }
          target.classList.add("active");
          activeCell = target;
        }
      }
    };

    const clearActive = () => {
      if (activeCell) {
        activeCell.classList.remove("active");
        activeCell = null;
      }
    };

    window.addEventListener("pointermove", (e) => {
      handleMove(e.clientX, e.clientY);
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (e.touches && e.touches[0]) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener("pointerleave", clearActive);
    window.addEventListener("touchend", clearActive);
    window.addEventListener("touchcancel", clearActive);

    // Debounced resize handler
    let resizeTimer = null;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        buildGrid();
      }, 150);
    });
  },

  /**
   * Handle Main Search Form
   */
  handleMainSearch(e) {
    e.preventDefault();
    const input = document.getElementById("home-main-search");
    if (input && input.value.trim()) {
      window.location.hash = `#/search?q=${encodeURIComponent(input.value.trim())}`;
    }
  },

  /**
   * Quick tag search
   */
  quickSearch(keyword) {
    window.location.hash = `#/search?q=${encodeURIComponent(keyword)}`;
  },

  // =========================================================================
  // VIEW: EMERGENCY PAGE (Strict Guidelines Followed)
  // =========================================================================
  renderEmergencyView() {
    const app = document.getElementById("app-view");
    const data = window.PortalStorage.getData();

    // Emergency hospitals
    const emergencyHospitals = data.hospitals.filter(h => h.emergencyAvailable);

    app.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <h2 style="font-size: 1.6rem; color: #be123c; display: flex; align-items: center; gap: 0.5rem;">
          চট্টগ্রাম জরুরি যোগাযোগ নম্বর
        </h2>
        <p style="color: var(--text-muted); font-size: 0.95rem;">
          জীবন রক্ষাকারী তাৎক্ষণিক জরুরি সেবা। সরাসরি কল করতে নম্বরে ক্লিক করুন।
        </p>
      </div>

      <!-- Super Button First: 999 -->
      <div class="emergency-hero-banner">
        <a href="tel:999" class="emergency-super-button">
          <div class="super-number-box">
            <div class="super-icon">${Icons.phoneLarge}</div>
            <div>
              <div class="super-number">৯৯৯ (999)</div>
              <div class="super-details">
                <h3>জাতীয় জরুরি সেবা (National Emergency Service)</h3>
                <p>পুলিশ + ফায়ার সার্ভিস + জরুরি অ্যাম্বুলেন্স ডিসপ্যাচ • সম্পূর্ণ টোল-ফ্রি ২৪/৭</p>
              </div>
            </div>
          </div>
          <div class="super-action">
            <span>সরাসরি ডায়াল করুন</span>
            
          </div>
        </a>

        <!-- Fire Service Direct Numbers -->
        <div class="emergency-sub-grid">
          <div class="emergency-sub-card">
            <div>
              <div class="sub-card-num">১৬১৬৩ (16163)</div>
              <div class="sub-card-title">ফায়ার সার্ভিস সরাসরি জরুরি হটলাইন</div>
              <div style="font-size: 0.8rem; opacity: 0.85;">অগ্নিকাণ্ড ও উদ্ধার তৎপরতায় তাৎক্ষণিক কল</div>
            </div>
            <a href="tel:16163" class="sub-card-call-btn">কল করুন</a>
          </div>

          <div class="emergency-sub-card">
            <div>
              <div class="sub-card-num">01730336666</div>
              <div class="sub-card-title">চট্টগ্রাম ফায়ার কন্ট্রোল রুম (আগ্রাবাদ সদর)</div>
              <div style="font-size: 0.8rem; opacity: 0.85;">কেন্দ্রীয় নিয়ন্ত্রণ কক্ষ • সার্বক্ষণিক সচল</div>
            </div>
            <a href="tel:01730336666" class="sub-card-call-btn">কল করুন</a>
          </div>
        </div>
      </div>

      <!-- CRITICAL WARNING: Clarification on 16263 -->
      <div class="clarification-alert">
        <div class="clarification-icon">${Icons.alert}</div>
        <div class="clarification-content">
          <h4>বিশেষ সতর্কবার্তা: ১৬২৬৩ কোনো অ্যাম্বুলেন্স নম্বর নয়!</h4>
          <p>
            <strong>১৬২৬৩ (16263)</strong> হলো বাংলাদেশ সরকারের স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়ের <strong>"স্বাস্থ্য বাতায়ন"</strong> - সাধারণ স্বাস্থ্য পরামর্শ, ডাক্তারের পরামর্শ ও স্বাস্থ্য তথ্য হেল্পলাইন। 
            জরুরি অ্যাম্বুলেন্স ডাকার জন্য সরাসরি <strong>৯৯৯</strong> কল করুন অথবা নিচে প্রদত্ত হাসপাতাল ও প্রাতিষ্ঠানিক অ্যাম্বুলেন্স নম্বরে যোগাযোগ করুন।
          </p>
        </div>
      </div>

      <!-- Hospital Emergency Numbers -->
      <section style="margin-top: 2rem;">
        <div class="section-header">
          <h3 class="section-title">হাসপাতাল জরুরি বিভাগ হটলাইন (চট্টগ্রাম)</h3>
          <p class="section-subtitle">২৪ ঘণ্টা জরুরি চিকিৎসাসেবা ও ক্যাজুয়ালটি বিভাগের যোগাযোগের নম্বর</p>
        </div>

        <div class="data-cards-grid">
          ${emergencyHospitals.map(h => `
            <div class="data-card">
              <div class="card-header-badge">
                <span class="area-badge">${h.area}</span>
                <span class="type-badge">${h.type}</span>
              </div>
              <h4 class="card-title">${h.nameBn || h.name}</h4>
              <p class="card-subtitle">${h.name}</p>
              
              <div class="card-info-row">
                <span class="card-info-icon">${Icons.location}</span>
                <span class="card-address-text">${h.address}</span>
              </div>

              <div class="card-info-row">
                <span class="card-info-icon">${Icons.phone}</span>
                <strong class="card-phone-number">${h.phone}</strong>
              </div>

              <div class="card-action-bar">
                ${h.phones && h.phones.length > 0 ? `
                  <a href="tel:${h.phones[0]}" class="btn-call">
                    ${Icons.phone} <span>কল করুন (${h.phones[0]})</span>
                  </a>
                ` : `
                  <span class="btn-verify">verify korte hobe</span>
                `}
                <span style="font-size: 0.8rem; color: #16a34a; font-weight: 600;">২৪/৭ সচল</span>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  },

  // =========================================================================
  // VIEW: GENERIC CATEGORY PAGE (Hospital, Ambulance, Police, Fire, Govt)
  // =========================================================================
  renderCategoryView(categoryKey, titleBn, titleEn, routeName) {
    const app = document.getElementById("app-view");
    const data = window.PortalStorage.getData();
    const items = data[categoryKey] || [];

    // Extract unique areas for filter dropdown
    const areas = ["all"];
    items.forEach(it => {
      if (it.area) {
        const parts = it.area.split("/").map(s => s.trim());
        parts.forEach(p => {
          if (!areas.includes(p)) areas.push(p);
        });
      }
    });

    // Apply active filter & search
    const filtered = items.filter(it => {
      const matchSearch = !this.activeCategoryFilter.search || (
        (it.name && it.name.toLowerCase().includes(this.activeCategoryFilter.search.toLowerCase())) ||
        (it.nameBn && it.nameBn.toLowerCase().includes(this.activeCategoryFilter.search.toLowerCase())) ||
        (it.address && it.address.toLowerCase().includes(this.activeCategoryFilter.search.toLowerCase())) ||
        (it.area && it.area.toLowerCase().includes(this.activeCategoryFilter.search.toLowerCase())) ||
        (it.phone && it.phone.toLowerCase().includes(this.activeCategoryFilter.search.toLowerCase()))
      );

      const matchArea = this.activeCategoryFilter.area === "all" || (
        it.area && it.area.toLowerCase().includes(this.activeCategoryFilter.area.toLowerCase())
      );

      return matchSearch && matchArea;
    });

    app.innerHTML = `
      <div style="margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
        <div>
          <h2 style="font-size: 1.5rem; color: var(--primary-dark);">${titleBn}</h2>
          <p style="color: var(--text-muted); font-size: 0.875rem;">${titleEn} • মোট পাওয়া গেছে: ${filtered.length} টি</p>
        </div>
        <div>
          <a href="#/" class="btn btn-secondary btn-sm">মূল পাতায় ফিরুন</a>
        </div>
      </div>

      <!-- Specific Banner for Ambulance or Police -->
      ${routeName === "ambulance" ? `
        <div style="background: #fff7ed; border-left: 4px solid #f97316; padding: 0.85rem 1.25rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem; font-size: 0.9rem; color: #9a3412;">
          <strong>জরুরি অ্যাম্বুলেন্স নির্দেশনা:</strong> সরকারি অ্যাম্বুলেন্স ডিসপ্যাচের জন্য প্রথমে <strong>৯৯৯</strong> ডায়াল করুন। বেসরকারি সার্ভিসের ক্ষেত্রে সরাসরি কল করে নিশ্চিত ভাড়ার হার জেনে নিন (Call kore janun)।
        </div>
      ` : ""}

      ${routeName === "police" ? `
        <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 0.85rem 1.25rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem; font-size: 0.9rem; color: #1e40af;">
          <strong>জরুরি পুলিশি সেবা:</strong> তাত্ক্ষণিক উদ্ধার বা জরুরি মুহূর্তে <strong>৯৯৯</strong> কল করুন। প্রদত্ত ওসির মোবাইল নম্বর প্রশাসনিক ও সরাসরি যোগাযোগের জন্য।
        </div>
      ` : ""}

      <!-- Toolbar: Search & Area Filter -->
      <div class="category-toolbar">
        <div class="toolbar-search">
          <span class="toolbar-search-icon">${Icons.search}</span>
          <input type="text" placeholder="নাম, ঠিকানা বা ফোন লিখে ফিল্টার করুন..." value="${this.activeCategoryFilter.search}" oninput="PortalApp.handleCategorySearch('${categoryKey}', '${titleBn}', '${titleEn}', '${routeName}', this.value)">
        </div>

        <div class="toolbar-filters">
          <label style="font-size: 0.875rem; color: var(--text-muted); font-weight: 600;">এলাকা ফিল্টার:</label>
          <select class="filter-select" onchange="PortalApp.handleCategoryAreaFilter('${categoryKey}', '${titleBn}', '${titleEn}', '${routeName}', this.value)">
            <option value="all" ${this.activeCategoryFilter.area === "all" ? "selected" : ""}>সকল এলাকা (All Areas)</option>
            ${areas.filter(a => a !== "all").map(a => `
              <option value="${a}" ${this.activeCategoryFilter.area === a ? "selected" : ""}>${a}</option>
            `).join("")}
          </select>
        </div>
      </div>

      <!-- Cards Grid -->
      ${filtered.length === 0 ? `
        <div style="text-align: center; padding: 3rem 1rem; background: #ffffff; border-radius: var(--radius-md); border: 1px dashed var(--border);">
          <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 0.5rem;">কোনো ফলাফল পাওয়া যায়নি</p>
          <p style="font-size: 0.875rem; color: var(--text-light);">ভিন্ন কিওয়ার্ড বা অন্য এলাকা নির্বাচন করে দেখুন।</p>
        </div>
      ` : `
        <div class="data-cards-grid">
          ${filtered.map(item => this.renderSingleCategoryCard(item, routeName)).join("")}
        </div>
      `}
    `;
  },

  /**
   * Render individual card according to category rules
   */
  renderSingleCategoryCard(item, routeName) {
    const isVerified = item.verified !== false && item.phone && item.phone !== "verify" && !item.phone.toLowerCase().includes("verify");
    const primaryPhone = item.phones && item.phones.length > 0 ? item.phones[0] : "";

    return `
      <div class="data-card">
        <div class="card-header-badge">
          <span class="area-badge">${item.area || "Chattogram"}</span>
          <span class="type-badge">${item.type || item.category || "সেবা"}</span>
        </div>

        <h3 class="card-title">${item.nameBn || item.name}</h3>
        <p class="card-subtitle">${item.name}</p>

        <div class="card-info-row">
          <span class="card-info-icon">${Icons.location}</span>
          <span class="card-address-text">${item.address || item.area}</span>
        </div>

        <!-- Phone Row -->
        <div class="card-info-row">
          <span class="card-info-icon">${Icons.phone}</span>
          <div>
            ${isVerified ? `
              <strong class="card-phone-number">${item.phone}</strong>
            ` : `
              <span class="btn-verify">${item.verifyText || "verify korte hobe"}</span>
            `}
          </div>
        </div>

        <!-- Extra rows for ambulance charge, govt timing, fire coverage -->
        ${item.charge ? `
          <div class="card-info-row">
            <span class="card-info-icon">${Icons.money}</span>
            <span>ভাড়া / চার্জ: <strong>${item.charge}</strong></span>
          </div>
        ` : ""}

        ${item.timing ? `
          <div class="card-info-row">
            <span class="card-info-icon">${Icons.time}</span>
            <span>অফিস সময়: <strong>${item.timing}</strong></span>
          </div>
        ` : ""}

        ${item.coverage ? `
          <div class="card-info-row">
            <span class="card-info-icon">${Icons.shield}</span>
            <span style="font-size: 0.8rem;">কভারেজ: ${item.coverage}</span>
          </div>
        ` : ""}

        ${item.notes ? `
          <p style="font-size: 0.8rem; color: #64748b; margin-top: 0.4rem; line-height: 1.4;">
            ${item.notes}
          </p>
        ` : ""}

        <!-- Action Bar -->
        <div class="card-action-bar">
          ${isVerified && primaryPhone ? `
            <a href="tel:${primaryPhone}" class="btn-call" title="কল করতে ক্লিক করুন">
              ${Icons.phone} <span>কল করুন (${primaryPhone})</span>
            </a>
          ` : `
            <span class="btn-verify">যাচাইাধীন (verify korte hobe)</span>
          `}
        </div>
      </div>
    `;
  },

  handleCategorySearch(categoryKey, titleBn, titleEn, routeName, val) {
    this.activeCategoryFilter.search = val;
    this.renderCategoryView(categoryKey, titleBn, titleEn, routeName);
  },

  handleCategoryAreaFilter(categoryKey, titleBn, titleEn, routeName, areaVal) {
    this.activeCategoryFilter.area = areaVal;
    this.renderCategoryView(categoryKey, titleBn, titleEn, routeName);
  },

  // =========================================================================
  // VIEW: BLOOD DONOR & BLOOD BANK PAGE
  // =========================================================================
  renderBloodView() {
    const app = document.getElementById("app-view");
    const data = window.PortalStorage.getData();
    const bloodBanks = data.bloodBanks || [];
    const sampleDonors = data.sampleDonors || [];

    const bloodGroups = ["all", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

    // Filter Donors
    const filteredDonors = sampleDonors.filter(donor => {
      const matchGroup = this.activeCategoryFilter.bloodGroup === "all" || donor.bloodGroup === this.activeCategoryFilter.bloodGroup;
      const matchSearch = !this.activeCategoryFilter.search || (
        donor.name.toLowerCase().includes(this.activeCategoryFilter.search.toLowerCase()) ||
        donor.area.toLowerCase().includes(this.activeCategoryFilter.search.toLowerCase()) ||
        donor.bloodGroup.toLowerCase().includes(this.activeCategoryFilter.search.toLowerCase())
      );
      return matchGroup && matchSearch;
    });

    app.innerHTML = `
      <div style="margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
        <div>
          <h2 style="font-size: 1.5rem; color: #be123c;">রক্তদাতা ও ব্লাড ব্যাংক (চট্টগ্রাম)</h2>
          <p style="color: var(--text-muted); font-size: 0.875rem;">জরুরি রক্তের প্রয়োজনে সরাসরি ব্লাড ব্যাংক ও স্বেচ্ছাসেবকদের সাথে যোগাযোগ করুন</p>
        </div>
        <div>
          <a href="#/" class="btn btn-secondary btn-sm">মূল পাতায় ফিরুন</a>
        </div>
      </div>

      <!-- Section 1: Blood Banks -->
      <section style="margin-bottom: 2.5rem;">
        <div class="section-header">
          <h3 class="section-title">রেজিস্টার্ড ব্লাড ব্যাংক ও প্রতিষ্ঠান (${bloodBanks.length})</h3>
          <p class="section-subtitle">নিরাপদ রক্ত সংগ্রহ, স্ক্রিনিং ও ক্রসম্যাচিং ল্যাব</p>
        </div>

        <div class="data-cards-grid">
          ${bloodBanks.map(b => `
            <div class="data-card">
              <div class="card-header-badge">
                <span class="area-badge">${b.area}</span>
                <span class="type-badge">${b.type}</span>
              </div>
              <h4 class="card-title">${b.nameBn || b.name}</h4>
              <p class="card-subtitle">${b.name}</p>

              <div class="card-info-row">
                <span class="card-info-icon">${Icons.location}</span>
                <span class="card-address-text">${b.address}</span>
              </div>

              <div class="card-info-row">
                <span class="card-info-icon">${Icons.phone}</span>
                <strong class="card-phone-number">${b.phone}</strong>
              </div>

              ${b.notes ? `
                <p style="font-size: 0.8rem; color: #64748b; margin-top: 0.35rem;">${b.notes}</p>
              ` : ""}

              <div class="card-action-bar">
                ${b.phones && b.phones.length > 0 ? `
                  <a href="tel:${b.phones[0]}" class="btn-call">
                    ${Icons.phone} <span>কল করুন (${b.phones[0]})</span>
                  </a>
                ` : `
                  <span class="btn-verify">যাচাইাধীন</span>
                `}
              </div>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- Section 2: Individual Donors (Strict Sample Data Tagging) -->
      <section>
        <div class="section-header">
          <h3 class="section-title">রক্তদাতা তালিকা (নমুনা ডেমো ডেটা)</h3>
          <p class="section-subtitle">
            * দ্রষ্টব্য: ডেমো উপস্থাপনার জন্য রক্তদাতাদের নমুনা তথ্য প্রদর্শিত হয়েছে। ফোন নম্বর প্লেসহোল্ডার হিসেবে রাখা হয়েছে।
          </p>
        </div>

        <!-- Blood Group Filter Chips -->
        <div style="margin-bottom: 0.75rem;">
          <label style="font-size: 0.875rem; font-weight: 700; color: #334155; display: block; margin-bottom: 0.4rem;">
            রক্তের গ্রুপ নির্বাচন করুন:
          </label>
          <div class="blood-filter-chips">
            ${bloodGroups.map(bg => `
              <button class="blood-chip ${this.activeCategoryFilter.bloodGroup === bg ? "active" : ""}" onclick="PortalApp.handleBloodFilter('${bg}')">
                ${bg === "all" ? "সকল গ্রুপ" : bg}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Search Bar for Donors -->
        <div class="category-toolbar" style="margin-bottom: 1.25rem;">
          <div class="toolbar-search">
            <span class="toolbar-search-icon">${Icons.search}</span>
            <input type="text" placeholder="এলাকা বা ডোনারের নাম লিখে খুঁজুন..." value="${this.activeCategoryFilter.search}" oninput="PortalApp.handleDonorSearch(this.value)">
          </div>
          <span style="font-size: 0.875rem; color: var(--text-muted); font-weight: 600;">
            খুঁজে পাওয়া গেছে: ${filteredDonors.length} জন
          </span>
        </div>

        <!-- Donors Grid -->
        <div class="data-cards-grid">
          ${filteredDonors.map(donor => `
            <div class="data-card">
              <div class="card-header-badge">
                <span class="sample-donor-tag">SAMPLE DONOR</span>
                <span class="blood-group-badge ${donor.bloodGroup.startsWith('O') ? 'blood-badge-red' : 'blood-badge-blue'}">
                  ${donor.bloodGroup}
                </span>
              </div>

              <h4 class="card-title">${donor.name}</h4>
              <p class="card-subtitle">এলাকা: <strong>${donor.area}</strong></p>

              <div class="card-info-row">
                <span class="card-info-icon">${Icons.phone}</span>
                <span class="card-phone-number" style="font-size: 0.95rem; color: #64748b;">${donor.phone}</span>
              </div>

              <div class="card-info-row">
                <span class="card-info-icon">${Icons.calendar}</span>
                <span>সর্বশেষ রক্তদান: <strong>${donor.lastDonation}</strong></span>
              </div>

              <div class="card-info-row">
                <span class="card-info-icon">${Icons.blood}</span>
                <span>উপলব্ধতা: 
                  <span class="${donor.available === 'Yes' ? 'avail-badge-yes' : 'avail-badge-no'}">
                    ${donor.availableBn || (donor.available === 'Yes' ? 'হ্যাঁ' : 'না')}
                  </span>
                </span>
              </div>

              <div class="card-action-bar">
                <span style="font-size: 0.75rem; color: #64748b; font-style: italic;">
                  ${donor.notes || "ডেমো উপস্থাপনা"}
                </span>
                <span class="btn-verify" style="font-size: 0.75rem;">ডেমো রেকর্ড</span>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  },

  handleBloodFilter(group) {
    this.activeCategoryFilter.bloodGroup = group;
    this.renderBloodView();
  },

  handleDonorSearch(val) {
    this.activeCategoryFilter.search = val;
    this.renderBloodView();
  },

  // =========================================================================
  // VIEW: BUS ROUTE (Chattogram Local + BRTC Section)
  // =========================================================================
  renderBusRouteView() {
    const app = document.getElementById("app-view");
    const data = window.PortalStorage.getData();
    const busData = data.busRoutes;
    const localRoutes = busData.localRoutes || [];
    const brtcServices = busData.brtcServices || [];

    app.innerHTML = `
      <div style="margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
        <div>
          <h2 style="font-size: 1.5rem; color: var(--primary-dark);">চট্টগ্রাম নগর বাস রুট ডিরেক্টরি</h2>
          <p style="color: var(--text-muted); font-size: 0.875rem;">চট্টগ্রাম মহানগরীর নিয়মিত লোকাল ও বিআরটিসি পরিবহন সার্ভিস</p>
        </div>
        <div>
          <a href="#/" class="btn btn-secondary btn-sm">মূল পাতায় ফিরুন</a>
        </div>
      </div>

      <!-- Critical Note Banner -->
      <div class="bus-notice-banner">
        <strong>গুরুত্বপূর্ণ তথ্য:</strong> ${busData.meta.noteBn}
        <div style="font-size: 0.825rem; color: #1e3a8a; margin-top: 0.25rem;">
          (${busData.meta.note})
        </div>
      </div>

      <!-- Section A: Local Buses -->
      <section style="margin-bottom: 2rem;">
        <div class="section-header">
          <h3 class="section-title">সিটি লোকাল বাস রুট (১০টি রুট + মেট্রো প্রভাতী)</h3>
          <p class="section-subtitle">নিউ মার্কেট, লালদীঘি, বহদ্দারহাট, অক্সিজেন ও পতেঙ্গা সংযোগকারী বাসসমূহ</p>
        </div>

        <div>
          ${localRoutes.map(bus => `
            <div class="bus-card">
              <div class="bus-header">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <span class="bus-num-badge">${bus.numberBn || bus.number}</span>
                  <h4 class="bus-title" style="margin-bottom: 0;">${bus.routeTitleBn || bus.routeTitle}</h4>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <span class="bus-distance">দূরত্ব: ${bus.distance}</span>
                  <span class="type-badge">${bus.type}</span>
                </div>
              </div>

              <div class="bus-route-path">
                <strong style="color: var(--primary-dark); display: block; margin-bottom: 0.25rem;">স্টপেজ ও যাত্রাপথ:</strong>
                ${bus.stopsBn || bus.stops}
              </div>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- Section B: BRTC Section (Separate as required) -->
      <section>
        <div class="brtc-section-header">
          <h3>বিআরটিসি স্পেশাল ও সিটি সার্ভিস (BRTC Services)</h3>
          <span class="type-badge" style="background: #e0f2fe; color: #0369a1; font-weight: 700;">সরকারি পরিবহন</span>
        </div>
        <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1.25rem;">
          * বিআরটিসি সার্ভিসসমূহ সাধারণ লোকাল বাস থেকে সম্পূর্ণ আলাদা কাউন্টার ও নির্ধারিত নিয়মে পরিচালিত হয়।
        </p>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${brtcServices.map(brtc => `
            <div class="bus-card" style="border-left: 4px solid #0284c7;">
              <div class="bus-header">
                <h4 style="font-size: 1.15rem; color: #0369a1; font-weight: 700;">${brtc.serviceBn || brtc.service}</h4>
                <span class="type-badge" style="background: #e0f2fe; color: #0369a1;">BRTC Depot</span>
              </div>

              <div style="margin-bottom: 0.5rem;">
                <strong style="color: #334155; font-size: 0.9rem;">রুট / গন্তব্য:</strong>
                <p style="font-size: 0.925rem; color: #0f172a; margin-top: 0.15rem; line-height: 1.5; white-space: pre-line;">${brtc.routeBn || brtc.route}</p>
              </div>

              <div style="background: #f8fafc; padding: 0.6rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; font-size: 0.875rem; color: #475569;">
                <strong>বিস্তারিত:</strong> ${brtc.details}
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  },

  // =========================================================================
  // VIEW: BAZAR DAM (Daily Price Table)
  // =========================================================================
  renderBazarDamView() {
    const app = document.getElementById("app-view");
    const data = window.PortalStorage.getData();
    const bazar = data.bazarDam;
    const items = bazar.items || [];
    const meta = bazar.meta || {};
    const isAdmin = window.PortalAuth.isAuthenticated();

    const cleanDate = (meta.currentDateLabel || "14 July 2026").replace(/\s*\(Demo\)/i, "").trim();

    app.innerHTML = `
      <div style="margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
        <div>
          <h2 style="font-size: 1.5rem; color: #7e22ce;">নিত্যপ্রয়োজনীয় পণ্যের বাজারদর তালিকা</h2>
          <p style="color: var(--text-muted); font-size: 0.875rem;">দৈনিক খুচরা বাজারদর (৩২টি প্রধান খাদ্য ও কৃষিপণ্য)</p>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          ${isAdmin ? `
            <a href="#/admin" class="btn btn-primary btn-sm">এডমিন প্যানেল</a>
          ` : ""}
          <a href="#/" class="btn btn-secondary btn-sm">মূল পাতায় ফিরুন</a>
        </div>
      </div>

      <!-- Date Display -->
      <div style="background: #ffffff; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 0.85rem 1.25rem; margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; box-shadow: var(--shadow-sm);">
        <div class="bazar-date-pill">
          তারিখ: <strong>${cleanDate}</strong>
        </div>
        <div style="font-size: 0.875rem; color: var(--text-muted); font-weight: 600;">
          মোট পণ্য: ${items.length} টি
        </div>
      </div>

      <!-- Table Filter Toolbar -->
      <div class="category-toolbar">
        <div class="toolbar-search">
          <span class="toolbar-search-icon">${Icons.search}</span>
          <input type="text" id="bazar-search-input" placeholder="পণ্যের নাম লিখে সার্চ করুন (যেমন: চাল, তেল, মুরগি, আলু)..." oninput="PortalApp.filterBazarTable(this.value)">
        </div>
      </div>

      <!-- Responsive Price Table -->
      <div class="bazar-table-container">
        <table class="bazar-table" id="bazar-table">
          <thead>
            <tr>
              <th style="width: 60px;">ক্রমিক</th>
              <th>পণ্যের নাম (Item Name)</th>
              <th style="width: 140px;">পরিমাপ / একক</th>
              <th style="width: 160px; text-align: right;">নির্ধারিত দাম (৳)</th>
              ${isAdmin ? `<th style="width: 100px; text-align: center;">অ্যাকশন</th>` : ""}
            </tr>
          </thead>
          <tbody>
            ${items.map((item, idx) => `
              <tr data-item-id="${item.id}" data-item-name="${item.itemBn} ${item.item}">
                <td style="color: var(--text-muted); font-weight: 600;">${idx + 1}</td>
                <td>
                  <strong style="color: #0f172a; font-size: 1rem;">${item.itemBn}</strong>
                  <span style="display: block; font-size: 0.8rem; color: #64748b;">${item.item}</span>
                </td>
                <td style="color: #475569;">
                  ${item.unitBn || item.unit}
                </td>
                <td style="text-align: right;" class="bazar-price-col">
                  ৳ ${Number(item.price).toFixed(2)}
                </td>
                ${isAdmin ? `
                  <td style="text-align: center;">
                    <button class="btn btn-secondary btn-sm" onclick="PortalApp.quickEditBazarItem('${item.id}', '${item.itemBn}', ${item.price})">
                      এডিট
                    </button>
                  </td>
                ` : ""}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  },

  filterBazarTable(query) {
    const q = (query || "").toLowerCase();
    const rows = document.querySelectorAll("#bazar-table tbody tr");
    rows.forEach(r => {
      const text = r.getAttribute("data-item-name") || "";
      r.style.display = text.toLowerCase().includes(q) ? "" : "none";
    });
  },

  // =========================================================================
  // VIEW: AI HELP BOX (Gemini API with model gemini-3.8-flash)
  // =========================================================================
  renderAiHelpView() {
    const app = document.getElementById("app-view");
    const activeKey = window.GeminiAssistant.getApiKey();

    app.innerHTML = `
      <div style="margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
        <div>
          <h2 style="font-size: 1.5rem; color: #0284c7;">এআই নাগরিক সহায়ক (Gemini Powered)</h2>
          <p style="color: var(--text-muted); font-size: 0.875rem;">মডেল: <strong>gemini-3.8-flash</strong> • চট্টগ্রামের সেবা নিয়ে বাংলায় যেকোনো প্রশ্ন করুন</p>
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn btn-secondary btn-sm" onclick="PortalApp.openSettingsModal()">এপিআই কি সেটিংস</button>
          <a href="#/" class="btn btn-secondary btn-sm">মূল পাতা</a>
        </div>
      </div>

      <div class="ai-help-container">
        <!-- AI Box Header -->
        <div class="ai-header">
          <div class="ai-header-info">
            <div class="ai-avatar">${Icons.ai}</div>
            <div class="ai-header-title">
              <h3>চট্টগ্রাম স্মার্ট নাগরিক চ্যাটবট</h3>
              <p>ওয়েবসাইটের তথ্য থেকে বাংলায় উত্তর প্রদান করে</p>
            </div>
          </div>
          <div>
            <span class="ai-model-pill">gemini-3.8-flash</span>
          </div>
        </div>

        <!-- Chat messages container -->
        <div class="ai-chat-body" id="ai-chat-body">
          <div class="ai-msg bot">
            <div class="ai-msg-avatar">${Icons.ai}</div>
            <div class="ai-msg-bubble">
              আসসালামু আলাইকুম! আমি <strong>সবার সেবা</strong> নাগরিক পোর্টালের এআই সহকারী। 
              চট্টগ্রামের হাসপাতাল, অ্যাম্বুলেন্স, রক্তদাতা, পুলিশ থানা, ফায়ার স্টেশন, বাস রুট বা বাজারদর সম্পর্কে বাংলায় যেকোনো প্রশ্ন করুন।
            </div>
          </div>
        </div>

        <!-- Prompt suggestion chips -->
        <div class="ai-prompt-chips">
          <span style="font-size: 0.8rem; color: #64748b; font-weight: 600;">পরামর্শ:</span>
          <button class="ai-chip" onclick="PortalApp.askAiPreset('আগ্রাবাদে কোন হাসপাতাল ও অ্যাম্বুলেন্স আছে?')">আগ্রাবাদে কোন হাসপাতাল ও অ্যাম্বুলেন্স আছে?</button>
          <button class="ai-chip" onclick="PortalApp.askAiPreset('কোতোয়ালী থানার ওসির নম্বর কত?')">কোতোয়ালী থানার ওসির নম্বর কত?</button>
          <button class="ai-chip" onclick="PortalApp.askAiPreset('পতেঙ্গা সমুদ্র সৈকতে কোন কোন বাস যায়?')">পতেঙ্গা সমুদ্র সৈকতে কোন বাস যায়?</button>
          <button class="ai-chip" onclick="PortalApp.askAiPreset('আজকের চাল ও তেলের ডেমো বাজারদর কত?')">আজকের চাল ও তেলের ডেমো বাজারদর কত?</button>
          <button class="ai-chip" onclick="PortalApp.askAiPreset('ফায়ার সার্ভিসের সরাসরি হটলাইন ও কন্ট্রোল নম্বর কত?')">ফায়ার সার্ভিসের হটলাইন কত?</button>
          <button class="ai-chip" onclick="PortalApp.askAiPreset('রাজশাহী ট্রেনের সময়সূচি কি?')">রাজশাহী ট্রেনের সময়সূচি (সাইটের বাইরের প্রশ্ন)</button>
        </div>

        <!-- Input Bar -->
        <form class="ai-input-bar" onsubmit="PortalApp.handleAiSubmit(event)">
          <input type="text" id="ai-user-input" placeholder="আপনার প্রশ্নটি বাংলায় লিখুন..." autocomplete="off">
          <button type="submit" class="ai-send-btn" id="ai-send-button">
            <span>পাঠান</span>
            
          </button>
        </form>
      </div>
    `;
  },

  askAiPreset(text) {
    const input = document.getElementById("ai-user-input");
    if (input) {
      input.value = text;
      this.handleAiSubmit(new Event("submit"));
    }
  },

  async handleAiSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    const input = document.getElementById("ai-user-input");
    const chatBody = document.getElementById("ai-chat-body");
    const sendBtn = document.getElementById("ai-send-button");
    if (!input || !chatBody) return;

    const question = input.value.trim();
    if (!question) return;

    // Append user message
    const userMsg = document.createElement("div");
    userMsg.className = "ai-msg user";
    userMsg.innerHTML = `
      <div class="ai-msg-avatar">${Icons.user}</div>
      <div class="ai-msg-bubble">${question}</div>
    `;
    chatBody.appendChild(userMsg);
    input.value = "";

    // Append loading placeholder
    const loadingMsg = document.createElement("div");
    loadingMsg.className = "ai-msg bot";
    loadingMsg.id = "ai-loading-bubble";
    loadingMsg.innerHTML = `
      <div class="ai-msg-avatar">${Icons.ai}</div>
      <div class="ai-msg-bubble" style="color: #64748b; font-style: italic;">
        উত্তর প্রস্তুত করা হচ্ছে... (gemini-3.8-flash)
      </div>
    `;
    chatBody.appendChild(loadingMsg);
    chatBody.scrollTop = chatBody.scrollHeight;

    if (sendBtn) sendBtn.disabled = true;

    try {
      const response = await window.GeminiAssistant.ask(question);

      // Remove loading
      const loadEl = document.getElementById("ai-loading-bubble");
      if (loadEl) loadEl.remove();

      // Bot bubble
      const botMsg = document.createElement("div");
      botMsg.className = "ai-msg bot";

      let html = `<div class="ai-msg-avatar">${Icons.ai}</div><div class="ai-msg-bubble">`;
      html += `<div style="margin-bottom: 0.5rem; line-height: 1.6; white-space: pre-line;">${response.text}</div>`;

      // If fallback search results exist (when API fails or key absent)
      if (response.fallbackResults && response.fallbackResults.length > 0) {
        html += `<div style="margin-top: 0.75rem; border-top: 1px solid #e2e8f0; padding-top: 0.5rem;">`;
        html += `<strong style="font-size: 0.85rem; color: var(--primary-dark); display: block; margin-bottom: 0.4rem;">সংশ্লিষ্ট সেবা ও যোগাযোগ:</strong>`;
        response.fallbackResults.slice(0, 4).forEach(r => {
          html += `
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 0.5rem 0.75rem; margin-bottom: 0.35rem; display: flex; align-items: center; justify-content: space-between;">
              <div>
                <strong style="font-size: 0.875rem; color: #0f172a;">${r.title}</strong>
                <div style="font-size: 0.8rem; color: #64748b;">${r.address || r.area}</div>
              </div>
              <div>
                ${r.phones && r.phones.length > 0 ? `
                  <a href="tel:${r.phones[0]}" class="btn-call btn-sm" style="font-size: 0.75rem; padding: 0.25rem 0.6rem;">কল করুন</a>
                ` : `
                  <span class="btn-verify" style="font-size: 0.75rem; padding: 0.2rem 0.4rem;">${r.verifyText || "যাচাইাধীন"}</span>
                `}
              </div>
            </div>
          `;
        });
        html += `</div>`;
      }

      html += `</div>`;
      botMsg.innerHTML = html;
      chatBody.appendChild(botMsg);

    } catch (err) {
      const loadEl = document.getElementById("ai-loading-bubble");
      if (loadEl) loadEl.remove();

      const errMsg = document.createElement("div");
      errMsg.className = "ai-msg bot";
      errMsg.innerHTML = `
        <div class="ai-msg-avatar">${Icons.ai}</div>
        <div class="ai-msg-bubble" style="border-left: 3px solid #be123c;">
          দুঃখিত, প্রযুক্তিগত কারণে উত্তর তৈরি করা যায়নি। অনুগ্রহ করে পোর্টালের অনুসন্ধান বার ব্যবহার করুন।
        </div>
      `;
      chatBody.appendChild(errMsg);
    } finally {
      if (sendBtn) sendBtn.disabled = false;
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  },

  // =========================================================================
  // VIEW: SEARCH RESULTS VIEW
  // =========================================================================
  renderSearchView(query) {
    const app = document.getElementById("app-view");
    const results = window.PortalStorage.searchAll(query);

    app.innerHTML = `
      <div style="margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
        <div>
          <h2 style="font-size: 1.5rem; color: var(--primary-dark);">অনুসন্ধানের ফলাফল</h2>
          <p style="color: var(--text-muted); font-size: 0.875rem;">অনুসন্ধান: "<strong>${query}</strong>" • মোট মিল পাওয়া গেছে: ${results.length} টি</p>
        </div>
        <div>
          <a href="#/" class="btn btn-secondary btn-sm">মূল পাতায় ফিরুন</a>
        </div>
      </div>

      <!-- Search Input within Search Results -->
      <div class="category-toolbar">
        <div class="toolbar-search">
          <span class="toolbar-search-icon">${Icons.search}</span>
          <input type="text" value="${query}" placeholder="আবার খুঁজুন..." onchange="window.location.hash = '#/search?q=' + encodeURIComponent(this.value)">
        </div>
      </div>

      ${results.length === 0 ? `
        <div style="text-align: center; padding: 4rem 1rem; background: #ffffff; border-radius: var(--radius-lg); border: 1px dashed var(--border);">
          <div style="margin-bottom: 1rem; color: #94a3b8;">${Icons.searchLarge}</div>
          <h3 style="font-size: 1.25rem; color: var(--text-main); margin-bottom: 0.5rem;">"এই তথ্য এখনো যোগ করা হয়নি"</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; max-width: 500px; margin: 0 auto 1.5rem;">
            (ei tothyo ekhono add hoy nai) - আপনার কাঙ্ক্ষিত তথ্যটি আমাদের ডাটাবেজে সংরক্ষিত নেই। সঠিক বানান দিয়ে পুনরায় অনুসন্ধান করুন।
          </p>
          <a href="#/" class="btn btn-primary">সকল ক্যাটাগরি ব্রাউজ করুন</a>
        </div>
      ` : `
        <div class="data-cards-grid">
          ${results.map(r => `
            <div class="data-card">
              <div class="card-header-badge">
                <span class="area-badge">${r.categoryName}</span>
                <span class="type-badge">${r.area || "Chattogram"}</span>
              </div>

              <h4 class="card-title">${r.title}</h4>
              <p class="card-subtitle">${r.subTitle || ""}</p>

              <div class="card-info-row">
                <span class="card-info-icon">${Icons.location}</span>
                <span class="card-address-text">${r.address}</span>
              </div>

              ${r.phone ? `
                <div class="card-info-row">
                  <span class="card-info-icon">${Icons.phone}</span>
                  <strong class="card-phone-number">${r.phone}</strong>
                </div>
              ` : ""}

              ${r.extra ? `
                <div class="card-info-row">
                  <span class="card-info-icon">${Icons.info}</span>
                  <span>${r.extra}</span>
                </div>
              ` : ""}

              <div class="card-action-bar">
                ${r.phones && r.phones.length > 0 ? `
                  <a href="tel:${r.phones[0]}" class="btn-call">
                    ${Icons.phone} <span>কল করুন (${r.phones[0]})</span>
                  </a>
                ` : (r.verified ? `
                  <span style="font-size: 0.8rem; color: var(--primary);">বিস্তারিত দেখুন</span>
                ` : `
                  <span class="btn-verify">${r.verifyText || "verify korte hobe"}</span>
                `)}
                <a href="#/${r.category}" style="font-size: 0.8rem; color: var(--primary); font-weight: 600;">
                  ক্যাটাগরি পেজ &rarr;
                </a>
              </div>
            </div>
          `).join("")}
        </div>
      `}
    `;
  },

  // =========================================================================
  // VIEW: ADMIN PAGE (Dashboard + CRUD)
  // =========================================================================
  renderAdminView() {
    const app = document.getElementById("app-view");
    const user = window.PortalAuth.currentUser;

    if (!user) {
      // Hidden: login form only appears via clicking the hidden dot
      window.location.hash = "#/";
      return;
    }

    // Admin Dashboard (Logged in)
    const data = window.PortalStorage.getData();
    const bazar = data.bazarDam;

    app.innerHTML = `
      <div style="margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2 style="font-size: 1.6rem; color: var(--primary-dark);">অ্যাডমিনিস্ট্রেটর কন্ট্রোল প্যানেল</h2>
          <p style="color: var(--text-muted); font-size: 0.875rem;">
            লগইনকৃত অ্যাডমিন: <strong>${user.email}</strong> (${user.provider === 'firebase' ? 'Firebase Live' : 'Active Session'})
          </p>
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn btn-secondary btn-sm" onclick="PortalApp.openSettingsModal()">সিস্টেম সেটিংস</button>
          <button class="btn btn-danger btn-sm" onclick="PortalApp.handleAdminLogout()">লগআউট</button>
        </div>
      </div>

      <div class="admin-dashboard">
        <!-- Tabs -->
        <div class="admin-tabs">
          <button class="admin-tab-btn active" onclick="PortalApp.switchAdminTab('bazar', this)">বাজার দর ব্যবস্থাপনা</button>
          <button class="admin-tab-btn" onclick="PortalApp.switchAdminTab('hospitals', this)">হাসপাতাল</button>
          <button class="admin-tab-btn" onclick="PortalApp.switchAdminTab('ambulances', this)">অ্যাম্বুলেন্স</button>
          <button class="admin-tab-btn" onclick="PortalApp.switchAdminTab('police', this)">পুলিশ (সিএমপি)</button>
          <button class="admin-tab-btn" onclick="PortalApp.switchAdminTab('fireService', this)">ফায়ার সার্ভিস</button>
          <button class="admin-tab-btn" onclick="PortalApp.switchAdminTab('govtOffices', this)">সরকারি অফিস</button>
          <button class="admin-tab-btn" onclick="PortalApp.switchAdminTab('bloodBanks', this)">ব্লাড ব্যাংক ও রক্তদাতা</button>
          <button class="admin-tab-btn" onclick="PortalApp.switchAdminTab('localRoutes', this)">বাস রুট</button>
        </div>

        <!-- Tab Contents Area -->
        <div id="admin-tab-content">
          <!-- Default to Bazar Tab -->
          ${this.renderAdminBazarTab(bazar)}
        </div>
      </div>
    `;
  },

  /**
   * Open Hidden Admin Login Modal (Triggered ONLY by clicking the hidden dot in footer)
   */
  openAdminLoginModal() {
    if (window.PortalAuth.isAuthenticated()) {
      window.location.hash = "#/admin";
      this.renderAdminView();
      return;
    }
    const emailInput = document.getElementById("modal-admin-email");
    const passInput = document.getElementById("modal-admin-password");
    if (emailInput) emailInput.value = "";
    if (passInput) passInput.value = "";
    this.openModal("admin-login-modal");
    if (emailInput) emailInput.focus();
  },

  /**
   * Handle Login from the Hidden Modal
   */
  async handleModalAdminLogin(e) {
    if (e && e.preventDefault) e.preventDefault();
    const emailInput = document.getElementById("modal-admin-email");
    const passInput = document.getElementById("modal-admin-password");
    const btn = document.getElementById("modal-login-btn");

    const email = emailInput ? emailInput.value : "";
    const pass = passInput ? passInput.value : "";

    if (btn) {
      btn.disabled = true;
      btn.innerText = "যাচাই করা হচ্ছে...";
    }

    try {
      await window.PortalAuth.login(email, pass);
      this.closeModal("admin-login-modal");
      this.showToast("এডমিন হিসেবে সফলভাবে লগইন হয়েছে!", "success");
      window.location.hash = "#/admin";
      this.renderAdminView();
    } catch (err) {
      alert(err.message || "লগইন ব্যর্থ হয়েছে");
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.innerText = "লগইন";
      }
    }
  },

  async handleAdminLogout() {
    await window.PortalAuth.logout();
    this.showToast("সফলভাবে লগআউট হয়েছে।", "info");
    window.location.hash = "#/";
    this.renderHomeView();
  },

  switchAdminTab(tabKey, btnElement) {
    document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
    if (btnElement) btnElement.classList.add("active");

    const content = document.getElementById("admin-tab-content");
    const data = window.PortalStorage.getData();

    if (tabKey === "bazar") {
      content.innerHTML = this.renderAdminBazarTab(data.bazarDam);
    } else {
      content.innerHTML = this.renderAdminCategoryTab(tabKey);
    }
  },

  /**
   * Render Admin Bazar Dam Tab
   */
  renderAdminBazarTab(bazar) {
    const items = bazar.items || [];
    const meta = bazar.meta || {};

    return `
      <div>
        <div style="background: #f8fafc; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
          <h4 style="font-size: 1.1rem; color: #0f172a; margin-bottom: 0.5rem;">বাজারদর মেটাডাটা ও তারিখ হালনাগাদ</h4>
          <p style="font-size: 0.85rem; color: #64748b; margin-bottom: 1rem;">
            মঙ্গলবার ১০ নভেম্বর সন্ধ্যায় বা উপস্থাপনার দিনে নতুন তারিখ (যেমন: "10 November 2026" বা "11 November 2026") লিখুন এবং সেভ করুন:
          </p>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: flex-end;">
            <div style="flex: 1; min-width: 240px;">
              <label style="font-size: 0.8rem; font-weight: 600; display: block; margin-bottom: 0.25rem;">তারিখ লেবেল (Date Label):</label>
              <input type="text" id="admin-bazar-date" value="${meta.currentDateLabel || '14 July 2026'}" style="width: 100%; padding: 0.55rem; border: 1px solid var(--border); border-radius: var(--radius-sm);">
            </div>
            <button class="btn btn-primary" onclick="PortalApp.saveBazarMeta()">তারিখ সংরক্ষণ করুন</button>
          </div>
        </div>

        <div class="admin-action-bar">
          <h4 style="font-size: 1.15rem; color: #0f172a;">৩২টি নিত্যপণ্যের মূল্যের তালিকা</h4>
          <button class="btn btn-secondary btn-sm" onclick="PortalApp.saveAllBazarPrices()">সকল পরিবর্তিত দাম সেভ করুন</button>
        </div>

        <div class="bazar-table-container">
          <table class="bazar-table">
            <thead>
              <tr>
                <th style="width: 50px;">#</th>
                <th>পণ্যের নাম (বাংলা / English)</th>
                <th>একক</th>
                <th style="width: 180px;">দাম (টাকা)</th>
                <th style="width: 100px; text-align: center;">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody>
              ${items.map((it, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td>
                    <strong>${it.itemBn}</strong>
                    <div style="font-size: 0.8rem; color: #64748b;">${it.item}</div>
                  </td>
                  <td>${it.unitBn || it.unit}</td>
                  <td>
                    <div style="display: flex; align-items: center; gap: 0.25rem;">
                      <span style="font-weight: 700;">৳</span>
                      <input type="number" step="0.5" id="price-input-${it.id}" value="${it.price}" style="width: 110px; padding: 0.4rem; border: 1px solid var(--border); border-radius: var(--radius-sm); font-weight: 700;">
                    </div>
                  </td>
                  <td style="text-align: center;">
                    <button class="btn btn-primary btn-sm" onclick="PortalApp.saveSinglePrice('${it.id}')">সেভ</button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  async saveSinglePrice(id) {
    const input = document.getElementById(`price-input-${id}`);
    if (!input) return;
    const priceVal = parseFloat(input.value);
    if (isNaN(priceVal)) {
      alert("সঠিক সংখ্যা প্রদান করুন");
      return;
    }
    await window.PortalStorage.updateItem("bazarDam", id, { price: priceVal });
    this.showToast("দাম সফলভাবে সংরক্ষিত হয়েছে!", "success");
  },

  async saveAllBazarPrices() {
    const data = window.PortalStorage.getData();
    const items = data.bazarDam.items;
    for (const it of items) {
      const input = document.getElementById(`price-input-${it.id}`);
      if (input) {
        const val = parseFloat(input.value);
        if (!isNaN(val)) it.price = val;
      }
    }
    window.PortalStorage.saveToLocal(data);
    await window.PortalStorage.syncToFirestore();
    this.showToast("সকল বাজারমূল্য সফলভাবে আপডেট হয়েছে!", "success");
  },

  async saveBazarMeta() {
    const dateInput = document.getElementById("admin-bazar-date");
    if (!dateInput) return;
    const newDate = dateInput.value.trim();
    if (!newDate) {
      alert("তারিখ প্রদান করুন");
      return;
    }
    await window.PortalStorage.updateBazarMeta(newDate);
    this.showToast(`তারিখ "${newDate}" সফলভাবে সংরক্ষিত হয়েছে!`, "success");
  },

  /**
   * Render Generic Category CRUD Tab
   */
  renderAdminCategoryTab(catKey) {
    const data = window.PortalStorage.getData();
    let list = [];
    let catTitle = "";

    if (catKey === "localRoutes") {
      list = data.busRoutes.localRoutes;
      catTitle = "বাস রুট";
    } else {
      list = data[catKey] || [];
      const titleMap = {
        hospitals: "হাসপাতাল",
        ambulances: "অ্যাম্বুলেন্স",
        police: "পুলিশ থানা",
        fireService: "ফায়ার স্টেশন",
        govtOffices: "সরকারি অফিস",
        bloodBanks: "ব্লাড ব্যাংক"
      };
      catTitle = titleMap[catKey] || catKey;
    }

    return `
      <div>
        <div class="admin-action-bar">
          <h4 style="font-size: 1.15rem; color: #0f172a;">${catTitle} তালিকা (${list.length})</h4>
          <button class="btn btn-primary btn-sm" onclick="PortalApp.openAddModal('${catKey}')">
            নতুন ${catTitle} যোগ করুন
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          ${list.map(item => `
            <div style="background: #ffffff; border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 0.85rem 1rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
              <div>
                <strong style="font-size: 1rem; color: #0f172a;">${item.nameBn || item.name || item.numberBn || item.number}</strong>
                <div style="font-size: 0.85rem; color: #64748b;">
                  ${item.area || item.routeTitleBn || item.routeTitle || item.address || ""} • 
                  ${item.phone || item.distance || "যাচাইাধীন"}
                </div>
              </div>

              <div style="display: flex; gap: 0.5rem;">
                <button class="btn btn-secondary btn-sm" onclick="PortalApp.openEditModal('${catKey}', '${item.id || item.number}')">এডিট</button>
                <button class="btn btn-danger btn-sm" onclick="PortalApp.deleteItem('${catKey}', '${item.id || item.number}')">মুছুন</button>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  },

  /**
   * Open Modal to Add Item
   */
  openAddModal(catKey) {
    document.getElementById("crud-category").value = catKey;
    document.getElementById("crud-item-id").value = "";
    document.getElementById("modal-title").innerText = `নতুন তথ্য যোগ করুন (${catKey})`;
    document.getElementById("crud-name").value = "";
    document.getElementById("crud-area").value = "";
    document.getElementById("crud-address").value = "";
    document.getElementById("crud-phone").value = "";
    document.getElementById("crud-extra").value = "";
    document.getElementById("crud-notes").value = "";

    this.openModal("crud-modal");
  },

  /**
   * Open Modal to Edit Item
   */
  openEditModal(catKey, itemId) {
    const data = window.PortalStorage.getData();
    let list = (catKey === "localRoutes") ? data.busRoutes.localRoutes : (data[catKey] || []);
    const item = list.find(x => (x.id === itemId || x.number === itemId));
    if (!item) return;

    document.getElementById("crud-category").value = catKey;
    document.getElementById("crud-item-id").value = itemId;
    document.getElementById("modal-title").innerText = `তথ্য সংশোধন: ${item.nameBn || item.name || item.numberBn}`;
    document.getElementById("crud-name").value = item.nameBn || item.name || item.numberBn || "";
    document.getElementById("crud-area").value = item.area || "";
    document.getElementById("crud-address").value = item.address || item.stopsBn || "";
    document.getElementById("crud-phone").value = item.phone || item.distance || "";
    document.getElementById("crud-extra").value = item.timing || item.charge || item.coverage || "";
    document.getElementById("crud-notes").value = item.notes || "";

    this.openModal("crud-modal");
  },

  /**
   * Handle Form Submission for Add/Edit
   */
  async handleCrudSubmit(e) {
    e.preventDefault();
    const catKey = document.getElementById("crud-category").value;
    const itemId = document.getElementById("crud-item-id").value;
    const name = document.getElementById("crud-name").value.trim();
    const area = document.getElementById("crud-area").value.trim();
    const address = document.getElementById("crud-address").value.trim();
    const phone = document.getElementById("crud-phone").value.trim();
    const extra = document.getElementById("crud-extra").value.trim();
    const notes = document.getElementById("crud-notes").value.trim();

    const isVerify = phone.toLowerCase().includes("verify") || !phone;

    const payload = {
      name: name,
      nameBn: name,
      area: area,
      address: address,
      phone: isVerify ? "verify" : phone,
      phones: isVerify ? [] : [phone.replace(/[^0-9]/g, "")],
      verified: !isVerify,
      verifyText: isVerify ? "verify korte hobe" : "",
      notes: notes
    };

    if (catKey === "ambulances") payload.charge = extra || "Call kore janun";
    if (catKey === "govtOffices") payload.timing = extra || "রবি-বৃহস্পতি ৯:০০ AM - ৫:০০ PM";
    if (catKey === "fireService") payload.coverage = extra || area;

    try {
      if (itemId) {
        await window.PortalStorage.updateItem(catKey, itemId, payload);
        this.showToast("তথ্য সফলভাবে সংশোধিত হয়েছে!", "success");
      } else {
        await window.PortalStorage.addItem(catKey, payload);
        this.showToast("নতুন তথ্য সফলভাবে যুক্ত হয়েছে!", "success");
      }
      this.closeModal("crud-modal");
      this.switchAdminTab(catKey, null);
    } catch (err) {
      alert("ত্রুটি: " + err.message);
    }
  },

  /**
   * Delete Item
   */
  async deleteItem(catKey, itemId) {
    if (confirm("আপনি কি নিশ্চিত যে এই এন্ট্রিটি মুছে ফেলতে চান?")) {
      await window.PortalStorage.deleteItem(catKey, itemId);
      this.showToast("এন্ট্রি সফলভাবে মুছে ফেলা হয়েছে!", "info");
      this.switchAdminTab(catKey, null);
    }
  },

  /**
   * Quick Edit single Bazar Item from public table
   */
  quickEditBazarItem(id, name, curPrice) {
    const newPriceStr = prompt(`"${name}" এর নতুন দাম (টাকায়) লিখুন:`, curPrice);
    if (newPriceStr !== null) {
      const val = parseFloat(newPriceStr);
      if (!isNaN(val)) {
        window.PortalStorage.updateItem("bazarDam", id, { price: val });
        this.showToast(`"${name}" এর নতুন দাম ৳ ${val.toFixed(2)} সেভ হয়েছে!`, "success");
        this.renderBazarDamView();
      } else {
        alert("দয়া করে সঠিক সংখ্যা প্রদান করুন।");
      }
    }
  }
};

// Initialize app when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  window.PortalApp = PortalApp;
  PortalApp.init();
});

