// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, onSnapshot, query, deleteDoc, doc, updateDoc, setDoc, getCountFromServer, getDoc, orderBy, serverTimestamp, increment } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyACVHfY0rcOrwQn4iUoC1pbBvkwZ0PCons",
  authDomain: "sucursaldhl-51601.firebaseapp.com",
  projectId: "sucursaldhl-51601",
  storageBucket: "sucursaldhl-51601.appspot.com",
  messagingSenderId: "406399556807",
  appId: "1:406399556807:web:22a21f6980a5469f0f32e2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db, collection, addDoc, onSnapshot, query, deleteDoc, doc, updateDoc, setDoc, getCountFromServer, getDoc, orderBy, serverTimestamp, increment };