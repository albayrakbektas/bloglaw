import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref as dbRef } from "firebase/database";

import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig =
  ({
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  },
  "blog-law");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage();

export default {
  analytics,
  db,
  dbRef,
};
