// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBml10UUJy3xUnsezJA_3rGPtEX7kMQRRY",
  authDomain: "fir-assignment-projects.firebaseapp.com",
  projectId: "fir-assignment-projects",
  storageBucket: "fir-assignment-projects.appspot.com",
  messagingSenderId: "1085458790386",
  appId: "1:1085458790386:web:6905a0cc64534fb0039d6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;