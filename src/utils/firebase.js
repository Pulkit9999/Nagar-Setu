// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyARvm6ZkH_Z0cnwxKTvpTpkq8mzBEIAxzc",
//   authDomain: "nagar-setu-a67a7.firebaseapp.com",
//   projectId: "nagar-setu-a67a7",
//   storageBucket: "nagar-setu-a67a7.firebasestorage.app",
//   messagingSenderId: "1014176543932",
//   appId: "1:1014176543932:web:b3da579ea848838f6eccb9",
//   measurementId: "G-YEF2DHSS0L",
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
