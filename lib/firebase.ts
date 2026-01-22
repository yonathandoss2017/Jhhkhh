import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// ============================================================
// ============================================================
// ========= Put your own Firebase configuration here =========
// 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇

const firebaseConfig = {
    apiKey: "AIzaSyAu0J3fKrVBt6n3Sz6tgfGoX5nCkB2vSM8",
    authDomain: "web-community-123m.firebaseapp.com",
    projectId: "web-community-123m",
    storageBucket: "web-community-123m.appspot.com",
    messagingSenderId: "745930105993",
    appId: "1:745930105993:web:5bb8ad7f9d7e90697a9258",
    measurementId: "G-SRV4Y5K1XE"
  };

// ☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️
// ============================================================
// ============================================================

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
