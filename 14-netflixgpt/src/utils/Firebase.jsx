// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3KjQXVwnwSSwLjirLh18RncXfDZeDLNQ",
  authDomain: "aiflix-e2b0c.firebaseapp.com",
  projectId: "aiflix-e2b0c",
  storageBucket: "aiflix-e2b0c.firebasestorage.app",
  messagingSenderId: "379253609887",
  appId: "1:379253609887:web:419dd6c9a90ea4f99a99aa",
  measurementId: "G-1F3FD3NR3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth =getAuth(app)