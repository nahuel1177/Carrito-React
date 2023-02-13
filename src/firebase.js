// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfoW8-obMmIw8rCMumEmQfE8zKjBGkCXY",
  authDomain: "e-commerce-b9d72.firebaseapp.com",
  projectId: "e-commerce-b9d72",
  storageBucket: "e-commerce-b9d72.appspot.com",
  messagingSenderId: "121892577489",
  appId: "1:121892577489:web:abacf1ff053594b3fa25f0",
  measurementId: "G-345MZ2241D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);