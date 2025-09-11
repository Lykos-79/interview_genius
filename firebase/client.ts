import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdTvr8qPRTa77sLx7pMEQHhkhRv7CDAhw",
  authDomain: "interviewgenius-4096f.firebaseapp.com",
  projectId: "interviewgenius-4096f",
  storageBucket: "interviewgenius-4096f.firebasestorage.app",
  messagingSenderId: "206944113790",
  appId: "1:206944113790:web:ccd33004e1b13e67b5342f",
  measurementId: "G-XCP0VJMMZN",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
