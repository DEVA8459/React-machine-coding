// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABsy6t5XmRqfiTHonoTvcGz2-dgcvY_mU",
  authDomain: "netflixgpt-c2b86.firebaseapp.com",
  projectId: "netflixgpt-c2b86",
  storageBucket: "netflixgpt-c2b86.firebasestorage.app",
  messagingSenderId: "777620215517",
  appId: "1:777620215517:web:3f604f4d779bb9a4b22d34",
  measurementId: "G-Z0Y4GN6VWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth =getAuth(app)