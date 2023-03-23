import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE-gbpJJ4Pn_NOrz-jyMGrvouHr60HM-Y",
  authDomain: "chat-gpt-5a4dc.firebaseapp.com",
  projectId: "chat-gpt-5a4dc",
  storageBucket: "chat-gpt-5a4dc.appspot.com",
  messagingSenderId: "130985956188",
  appId: "1:130985956188:web:7b537129dace8a5d5b6799",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
