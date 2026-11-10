/**
 * Shobar Sheba - Gemini AI Citizen Assistant Module
 * Model: gemini-3.8-flash (STRICTLY REQUIRED)
 * Answers in simple Bangla from site data first.
 * If not found: "ei tothyo ekhono add hoy nai"
 * If API fails: Shows search results from site data.
 */

const GeminiAssistant = {
  model: "gemini-3.8-flash",

  /**
   * Get the active API Key
   */
  getApiKey() {
    return localStorage.getItem(window.APP_CONFIG.storageKeys.geminiKey) || 
           window.APP_CONFIG.gemini.apiKey || 
           "";
  },

  /**
   * Set API Key
   */
  setApiKey(key) {
    const cleanKey = (key || "").trim();
    localStorage.setItem(window.APP_CONFIG.storageKeys.geminiKey, cleanKey);
    window.APP_CONFIG.gemini.apiKey = cleanKey;
    return true;
  },

  /**
   * Build site data context string for prompt
   */
  buildContextData() {
    const data = window.PortalStorage.getData();
    let text = `PORTAL DATA FOR CHATTOGRAM, BANGLADESH:\n`;

    // Emergency rules
    text += `\nEMERGENCY RULES:
- Primary National Emergency: 999 (Police + Fire Service + Ambulance dispatch). Toll free 24/7.
- Fire Service Direct Hotline: 16163. Fire Control Room: 01730336666. National Hotline: 102.
- CRITICAL WARNING: 16263 is NOT an ambulance number! 16263 is Shastho Batayan health advice helpline.
- Ambulance charges: Do not invent charges; where charge is unknown say "Call kore janun". CMCH ambulance is "Govt chart onujayi".
- Where phone says "verify", state "verify korte hobe".\n`;

    // Hospitals
    text += `\nHOSPITALS IN CHATTOGRAM:\n`;
    data.hospitals.forEach((h, i) => {
      text += `${i+1}. ${h.name} (${h.nameBn}) | Address: ${h.address} | Area: ${h.area} | Phone: ${h.phone}\n`;
    });

    // Ambulances
    text += `\nAMBULANCE SERVICES:\n`;
    data.ambulances.forEach((a, i) => {
      text += `${i+1}. ${a.name} (${a.nameBn}) | Area: ${a.area} | Phone: ${a.phone} | Charge: ${a.charge}\n`;
    });

    // Police CMP
    text += `\nPOLICE (CMP 16 THANAS):\n`;
    data.police.forEach((p, i) => {
      const phoneText = p.verified ? p.phone : (p.verifyText || "verify korte hobe");
      text += `${i+1}. ${p.name} (${p.nameBn}) | Area: ${p.area} | Phone: ${phoneText}\n`;
    });

    // Fire Service
    text += `\nFIRE SERVICE STATIONS (CHATTOGRAM):\n`;
    data.fireService.forEach((f, i) => {
      const phoneText = f.verified === false ? (f.verifyText || "verify korte hobe") : f.phone;
      text += `${i+1}. ${f.name} (${f.nameBn}) | Area: ${f.area} | Phone: ${phoneText} | Coverage: ${f.coverage}\n`;
    });

    // Govt Offices
    text += `\nGOVERNMENT OFFICES:\n`;
    data.govtOffices.forEach((g, i) => {
      const phoneText = g.verified === false ? (g.verifyText || "verify korte hobe") : g.phone;
      text += `${i+1}. ${g.name} (${g.nameBn}) | Area: ${g.area} | Phone: ${phoneText} | Timing: ${g.timing}\n`;
    });

    // Blood Banks
    text += `\nBLOOD BANKS & ORGANIZATIONS:\n`;
    data.bloodBanks.forEach((b, i) => {
      text += `${i+1}. ${b.name} (${b.nameBn}) | Area: ${b.area} | Phone: ${b.phone}\n`;
    });

    // Sample Donors
    text += `\nSAMPLE DONORS (DEMO ONLY, NOT REAL PEOPLE):\n`;
    data.sampleDonors.forEach((s, i) => {
      text += `${i+1}. ${s.name} | Blood Group: ${s.bloodGroup} | Area: ${s.area} | Phone: ${s.phone} | Available: ${s.available} (${s.availableBn})\n`;
    });

    // Bus routes
    text += `\nBUS ROUTES (CHATTOGRAM LOCAL):\n`;
    text += `Note: ${data.busRoutes.meta.noteBn}\n`;
    data.busRoutes.localRoutes.forEach((br) => {
      text += `- ${br.numberBn}: ${br.routeTitleBn} (${br.distance}). Stops: ${br.stopsBn}\n`;
    });
    text += `\nBRTC BUS SERVICES:\n`;
    data.busRoutes.brtcServices.forEach((bs) => {
      text += `- ${bs.serviceBn}: ${bs.routeBn}. Details: ${bs.details}\n`;
    });

    // Bazar Dam
    text += `\nBAZAR DAM (Date: ${data.bazarDam.meta.currentDateLabel || "14 July 2026"}):\n`;
    data.bazarDam.items.forEach((bd) => {
      text += `- ${bd.itemBn} (${bd.item}): ৳ ${bd.price.toFixed(2)} (${bd.unitBn})\n`;
    });

    return text;
  },

  /**
   * Ask a question in Bangla
   */
  async ask(question) {
    const q = (question || "").trim();
    if (!q) {
      return {
        success: false,
        text: "দয়া করে আপনার প্রশ্নটি লিখুন।",
        fallbackResults: []
      };
    }

    const apiKey = this.getApiKey();

    // If no API key configured, trigger direct intelligent fallback to site data search
    if (!apiKey) {
      console.log("Gemini API key not configured, using instant local search fallback.");
      const localResults = window.PortalStorage.searchAll(q);
      let responseText = "";
      if (localResults.length > 0) {
        responseText = `এপিআই কি সেট করা নেই, তবে আপনার অনুসন্ধানের ভিত্তিতে পোর্টাল ডেটাবেজ থেকে প্রাপ্ত ফলাফল নিচে দেখানো হলো:`;
      } else {
        responseText = `ei tothyo ekhono add hoy nai (এই তথ্য এখনো যোগ করা হয়নি)।`;
      }

      return {
        success: true,
        source: "local-fallback",
        text: responseText,
        fallbackResults: localResults
      };
    }

    // Call Gemini API free tier with model gemini-3.8-flash
    const contextData = this.buildContextData();
    const systemPrompt = `You are the polite AI Nagorik Assistant for "Shobar Sheba - Nagorik Help Portal" for Chattogram, Bangladesh.
Your task is to answer citizen questions in simple, natural Bangla using ONLY the provided verified portal site data below.

IMPORTANT RULES:
1. Answer in simple, friendly, helpful Bangla.
2. Rely strictly on the provided site data first.
3. If the requested information is not found in the site data, you MUST answer: "ei tothyo ekhono add hoy nai" (or "এই তথ্য এখনো যোগ করা হয়নি (ei tothyo ekhono add hoy nai)") and politely offer related categories.
4. For Emergency numbers: 999 is national emergency (police, fire, ambulance). Fire direct is 16163. Control room is 01730336666. 
5. NEVER mention 16263 as ambulance (16263 is Shastho Batayan health advice helpline).
6. For ambulance charges: do not invent charges, state "Call kore janun" (except CMCH which is "Govt chart onujayi").
7. For unverified phones, state that the number needs verification ("verify korte hobe").
8. For Bazar Dam: answer with the recorded prices and date.
9. Keep answers concise, actionable, and formatted cleanly.

PORTAL SITE DATA:
${contextData}`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`;

    const payload = {
      contents: [
        {
          role: "user",
          parts: [
            { text: `${systemPrompt}\n\nUser Question: ${q}` }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 800
      }
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.warn("Gemini API error response:", errorData);
        throw new Error(errorData.error?.message || `HTTP ${response.status}`);
      }

      const resData = await response.json();
      const answer = resData.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!answer) {
        throw new Error("Empty response from Gemini API");
      }

      return {
        success: true,
        source: "gemini-3.8-flash",
        text: answer,
        fallbackResults: []
      };

    } catch (apiError) {
      console.warn("Gemini API failed, falling back to site search:", apiError);
      
      // Fallback: search site data
      const searchResults = window.PortalStorage.searchAll(q);
      let fallbackMsg = "";

      if (searchResults.length > 0) {
        fallbackMsg = `এআই সার্ভার সংযোগে সমস্যা হয়েছে (${apiError.message})। তবে আপনার প্রশ্নের প্রেক্ষিতে সাইটের সংরক্ষিত তথ্য থেকে ফলাফল নিচে দেওয়া হলো:`;
      } else {
        fallbackMsg = `ei tothyo ekhono add hoy nai (এই তথ্য এখনো যোগ করা হয়নি)।`;
      }

      return {
        success: true,
        source: "api-failure-fallback",
        error: apiError.message,
        text: fallbackMsg,
        fallbackResults: searchResults
      };
    }
  }
};

window.GeminiAssistant = GeminiAssistant;

