/**
 * Shobar Sheba - Authentication Module
 * Firebase Auth integration with demo offline fallback for presentation
 */

const PortalAuth = {
  currentUser: null,
  isDemoAuth: false,

  // Fallback demo credentials (for offline/demo presentation on 11 Nov 2026)
  demoCredentials: {
    email: "admin@shobarsheba.gov.bd",
    password: "ctgadmin@2026"
  },

  /**
   * Initialize auth state listener
   */
  init(onUserChanged) {
    // 1. Firebase Auth listener if initialized
    if (window.firebaseAuth) {
      window.firebaseAuth.onAuthStateChanged((user) => {
        if (user) {
          this.currentUser = {
            email: user.email,
            uid: user.uid,
            isAnonymous: false,
            provider: "firebase"
          };
          this.isDemoAuth = false;
        } else {
          // Check local session
          const localSession = sessionStorage.getItem(window.APP_CONFIG.storageKeys.adminSession);
          if (localSession) {
            try {
              this.currentUser = JSON.parse(localSession);
              this.isDemoAuth = true;
            } catch (e) {
              this.currentUser = null;
            }
          } else {
            this.currentUser = null;
          }
        }
        if (onUserChanged) onUserChanged(this.currentUser);
      });
      return;
    }

    // 2. Local session check for standalone demo
    const localSession = sessionStorage.getItem(window.APP_CONFIG.storageKeys.adminSession);
    if (localSession) {
      try {
        this.currentUser = JSON.parse(localSession);
        this.isDemoAuth = true;
      } catch (e) {
        this.currentUser = null;
      }
    }
    if (onUserChanged) onUserChanged(this.currentUser);
  },

  /**
   * Log in admin (No self-registration)
   */
  async login(email, password) {
    const cleanEmail = (email || "").trim().toLowerCase();
    const cleanPassword = (password || "").trim();

    if (!cleanEmail || !cleanPassword) {
      throw new Error("ইমেইল এবং পাসওয়ার্ড দুটিই প্রদান করুন।");
    }

    // 1. Attempt Firebase Auth if available
    if (window.firebaseAuth) {
      try {
        const userCredential = await window.firebaseAuth.signInWithEmailAndPassword(cleanEmail, cleanPassword);
        this.currentUser = {
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          provider: "firebase"
        };
        this.isDemoAuth = false;
        return this.currentUser;
      } catch (err) {
        // If Firebase fails or credentials don't match, check demo fallback if demo credentials match
        if (cleanEmail === this.demoCredentials.email && cleanPassword === this.demoCredentials.password) {
          this.currentUser = {
            email: cleanEmail,
            uid: "demo_admin_ctg_2026",
            provider: "demo"
          };
          this.isDemoAuth = true;
          sessionStorage.setItem(window.APP_CONFIG.storageKeys.adminSession, JSON.stringify(this.currentUser));
          return this.currentUser;
        }
        throw new Error("ভুল ইমেইল বা পাসওয়ার্ড। আবার চেষ্টা করুন। (" + (err.message || "") + ")");
      }
    }

    // 2. Offline / Demo Auth check
    if (cleanEmail === this.demoCredentials.email && cleanPassword === this.demoCredentials.password) {
      this.currentUser = {
        email: cleanEmail,
        uid: "demo_admin_ctg_2026",
        provider: "demo"
      };
      this.isDemoAuth = true;
      sessionStorage.setItem(window.APP_CONFIG.storageKeys.adminSession, JSON.stringify(this.currentUser));
      return this.currentUser;
    }

    throw new Error("ভুল ইমেইল বা পাসওয়ার্ড! সঠিক তথ্য দিয়ে পুনরায় চেষ্টা করুন।");
  },

  /**
   * Log out
   */
  async logout() {
    if (window.firebaseAuth) {
      try {
        await window.firebaseAuth.signOut();
      } catch (e) {
        console.warn("Firebase signout error:", e);
      }
    }
    this.currentUser = null;
    this.isDemoAuth = false;
    sessionStorage.removeItem(window.APP_CONFIG.storageKeys.adminSession);
    return true;
  },

  /**
   * Check if user is logged in
   */
  isAuthenticated() {
    return !!this.currentUser;
  }
};

window.PortalAuth = PortalAuth;

