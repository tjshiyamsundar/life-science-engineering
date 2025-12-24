import { initializeApp } from "firebase/app";
import { initializeFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYAd62ugGE6FLYIEkgiZlebhHT5KAoaqg",
    authDomain: "life-science-engineering.firebaseapp.com",
    projectId: "life-science-engineering",
    storageBucket: "life-science-engineering.firebasestorage.app",
    messagingSenderId: "882730692782",
    appId: "1:882730692782:web:304b4f67fb99ca0a1bbd3f",
    measurementId: "G-98C2ME6G4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with Long Polling (Proxy Bypass)
const db = initializeFirestore(app, { experimentalForceLongPolling: true });
console.log("Firebase DB Initialized with Long Polling (Proxy Bypass)");

// Enable Offline Persistence (Fixes hanging writes)
enableIndexedDbPersistence(db)
    .catch((err) => {
        if (err.code == 'failed-precondition') {
            console.warn('Persistence failed: Multiple tabs open.');
        } else if (err.code == 'unimplemented') {
            console.warn('Persistence failed: Browser not supported.');
        }
    });

const auth = getAuth(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { db, auth, storage, analytics };
