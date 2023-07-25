// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDerL9zebQ_Wf2ujA4BgzhpJZtYePjZos0",
  authDomain: "react-curso-bri.firebaseapp.com",
  projectId: "react-curso-bri",
  storageBucket: "react-curso-bri.appspot.com",
  messagingSenderId: "410630200729",
  appId: "1:410630200729:web:34871352697fda5c0bc708"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );