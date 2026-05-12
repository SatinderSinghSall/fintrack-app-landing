import { initializeApp, getApps, getApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVkKJYctXwFeSe8p4cyLfykseW0aB_jWQ",

  authDomain: "fintrack-landing-8c6c1.firebaseapp.com",

  projectId: "fintrack-landing-8c6c1",

  storageBucket: "fintrack-landing-8c6c1.firebasestorage.app",

  messagingSenderId: "892123815443",

  appId: "1:892123815443:web:1e62f98fba37a4571be9e6",

  measurementId: "G-CK4RDXRNY6",
};

// Prevent duplicate initialization in Next.js
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
