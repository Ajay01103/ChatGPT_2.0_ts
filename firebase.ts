import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR API KEY",
  authDomain: "AUTH DOMAIN",
  projectId: "PROJECT ID",
  storageBucket: "STORAGE BUCKET",
  messagingSenderId: "MESSAGING SENDER ID",
  appId: "APP ID"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };