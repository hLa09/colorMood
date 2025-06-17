// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8hiftWhJlYUdT-5P2_1kI7BaaqMrxZAI",
    authDomain: "colormood-587b0.firebaseapp.com",
    projectId: "colormood-587b0",
    storageBucket: "colormood-587b0.firebasestorage.app",
    messagingSenderId: "474875342711",
    appId: "1:474875342711:web:e5713b1d04f7ffc0527b72",
    measurementId: "G-J6KQQR1WKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);

export { db };