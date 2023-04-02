import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJtj0Jr2_mKQ0Qmxy4yrO-j3n1AsY8ibE",
  authDomain: "chatgpt-96d6a.firebaseapp.com",
  projectId: "chatgpt-96d6a",
  storageBucket: "chatgpt-96d6a.appspot.com",
  messagingSenderId: "135741645653",
  appId: "1:135741645653:web:e37e4ff2abace55b3685dc"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };