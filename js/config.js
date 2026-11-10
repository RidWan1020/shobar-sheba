/**
 * Shobar Sheba - Configuration File
 * Chattogram Nagorik Help Portal
 */

const getSafeStorage = (key) => {
  try {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem(key) || "";
    }
  } catch (e) {
    return "";
  }
  return "";
};

window.APP_CONFIG = {
  appName: "Shobar Sheba - Nagorik Help Portal",
  appNameBn: "সবার সেবা - নাগরিক হেল্প পোর্টাল (চট্টগ্রাম)",
  city: "Chattogram, Bangladesh",
  version: "1.0.0",
  presentationDate: "11 Nov 2026",

  // Gemini API Configuration
  // Model name MUST be gemini-3.8-flash as required
  gemini: {
    model: "gemini-3.8-flash",
    apiKey: getSafeStorage("shobar_sheba_gemini_key"),
    endpoint: "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent"
  },

  // Firebase Configuration (Free Tier)
  firebase: {
    apiKey: getSafeStorage("shobar_sheba_fb_apiKey"),
    authDomain: getSafeStorage("shobar_sheba_fb_authDomain"),
    projectId: getSafeStorage("shobar_sheba_fb_projectId"),
    storageBucket: getSafeStorage("shobar_sheba_fb_storageBucket"),
    messagingSenderId: getSafeStorage("shobar_sheba_fb_messagingSenderId"),
    appId: getSafeStorage("shobar_sheba_fb_appId")
  },

  // Storage Keys
  storageKeys: {
    data: "shobar_sheba_portal_data_v1",
    adminSession: "shobar_sheba_admin_session",
    geminiKey: "shobar_sheba_gemini_key"
  }
};
