// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs9FR9MS09FdjDpOB5BARWvnZK4rmPbVk",
  authDomain: "inventory-management-a476f.firebaseapp.com",
  projectId: "inventory-management-a476f",
  storageBucket: "inventory-management-a476f.appspot.com",
  messagingSenderId: "657623055730",
  appId: "1:657623055730:web:1d2af4bf508dadd6eef1eb",
  measurementId: "G-59XNQ70983"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};