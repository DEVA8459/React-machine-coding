// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2dLeH15-mFTUMHMz_KfBL6z-2abDunUo",
  authDomain: "foodorderingapp-eaa05.firebaseapp.com",
  projectId: "foodorderingapp-eaa05",
  storageBucket: "foodorderingapp-eaa05.firebasestorage.app",
  messagingSenderId: "67412117709",
  appId: "1:67412117709:web:e68e21976c94b980d5c184",
  measurementId: "G-0RMDEPDD8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)