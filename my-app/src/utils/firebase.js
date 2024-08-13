// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClJTAXkLmtqa9an4dlkN74LX1-7TtpU_8",
  authDomain: "movies-8609d.firebaseapp.com",
  projectId: "movies-8609d",
  storageBucket: "movies-8609d.appspot.com",
  messagingSenderId: "827613750749",
  appId: "1:827613750749:web:2591766d71dcd003990234",
  measurementId: "G-GWPFSZ5LNL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
