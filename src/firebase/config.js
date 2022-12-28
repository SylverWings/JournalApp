// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMxFntFCNzSFW32Q1nJWHP4I-IFSAvv4E",
  authDomain: "react-cursos-e47d6.firebaseapp.com",
  projectId: "react-cursos-e47d6",
  storageBucket: "react-cursos-e47d6.appspot.com",
  messagingSenderId: "935666959783",
  appId: "1:935666959783:web:c9060d53765f39e8342282"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );