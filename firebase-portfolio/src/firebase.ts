// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm0mKPc_8_Tc1NzGWDbBYOpIKzBkglozs",
  authDomain: "portflio-a5b10.firebaseapp.com",
  projectId: "portflio-a5b10",
  storageBucket: "portflio-a5b10.firebasestorage.app",
  messagingSenderId: "1040313084668",
  appId: "1:1040313084668:web:68004bcaa079c235c58579",
  measurementId: "G-9ZWLDK4XN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);