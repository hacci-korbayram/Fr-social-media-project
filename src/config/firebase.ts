// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTxPKuwb2sYVYbAzfxee3DVyzj9neljvQ",
  authDomain: "react-course-23857.firebaseapp.com",
  projectId: "react-course-23857",
  storageBucket: "react-course-23857.appspot.com",
  messagingSenderId: "838270571295",
  appId: "1:838270571295:web:45473c7d6007f42b21d62a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
