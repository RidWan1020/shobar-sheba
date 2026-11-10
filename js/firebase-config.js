/**
 * Shobar Sheba - Firebase Initialization & Config
 * Connects Firebase Free Tier (Auth & Firestore)
 */

(function () {
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

  const firebaseConfig = {
    apiKey: getSafeStorage("shobar_sheba_fb_apiKey") || window.APP_CONFIG?.firebase?.apiKey || "",
    authDomain: getSafeStorage("shobar_sheba_fb_authDomain") || window.APP_CONFIG?.firebase?.authDomain || "",
    projectId: getSafeStorage("shobar_sheba_fb_projectId") || window.APP_CONFIG?.firebase?.projectId || "",
    storageBucket: getSafeStorage("shobar_sheba_fb_storageBucket") || window.APP_CONFIG?.firebase?.storageBucket || "",
    messagingSenderId: getSafeStorage("shobar_sheba_fb_messagingSenderId") || window.APP_CONFIG?.firebase?.messagingSenderId || "",
    appId: getSafeStorage("shobar_sheba_fb_appId") || window.APP_CONFIG?.firebase?.appId || ""
  };

  // Only initialize if minimum credentials exist and firebase library is loaded
  if (typeof window !== "undefined" && window.firebase && firebaseConfig.apiKey && firebaseConfig.projectId) {
    try {
      if (!window.firebase.apps.length) {
        window.firebaseApp = window.firebase.initializeApp(firebaseConfig);
      } else {
        window.firebaseApp = window.firebase.app();
      }
      window.firebaseAuth = window.firebase.auth();
      window.firebaseFirestore = window.firebase.firestore();
      console.log("Firebase Free Tier connected successfully.");
    } catch (e) {
      console.warn("Firebase initialization warning (using local fallback):", e);
    }
  } else {
    console.log("Firebase running in demo / local mode with official seed data.");
  }
})();
