// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxH38OFz-8bSOMRx67jzra3b02IGJU_1w",
  authDomain: "netflixgpt-681d6.firebaseapp.com",
  projectId: "netflixgpt-681d6",
  storageBucket: "netflixgpt-681d6.firebasestorage.app",
  messagingSenderId: "818866210523",
  appId: "1:818866210523:web:4c9fe8687ac73316432efe",
  measurementId: "G-KCQFL2R0Y3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();