// src/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // 🔁 REPLACE THIS
  authDomain: "campus-copilot-rag-chatbot.firebaseapp.com",
  projectId: "campus-copilot-rag-chatbot",
  storageBucket: "campus-copilot-rag-chatbot.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // 🔁 REPLACE THIS
  appId: "YOUR_APP_ID", // 🔁 REPLACE THIS
  measurementId: "G-7DX5SM2MHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
