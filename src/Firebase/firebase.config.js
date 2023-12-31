// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrfNLfhhaKG4lni3GXkhRtbBqQ3mKtzJQ",
  authDomain: "authentication-two-19fe2.firebaseapp.com",
  projectId: "authentication-two-19fe2",
  storageBucket: "authentication-two-19fe2.appspot.com",
  messagingSenderId: "657175765129",
  appId: "1:657175765129:web:2e474ccab012bf4000e658"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;