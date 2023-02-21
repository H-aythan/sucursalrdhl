// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, onSnapshot, query, deleteDoc, doc, updateDoc, setDoc, getCountFromServer, getDoc, orderBy, serverTimestamp, increment } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDiLdHs3q2p6rPrMhYWFbsBiKRRUOWppSY",
  authDomain: "sucursal472.firebaseapp.com",
  projectId: "sucursal472",
  storageBucket: "sucursal472.appspot.com",
  messagingSenderId: "239901615474",
  appId: "1:239901615474:web:51cbb62b97cd9285cca9eb"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db, collection, addDoc, onSnapshot, query, deleteDoc, doc, updateDoc, setDoc, getCountFromServer, getDoc, orderBy, serverTimestamp, increment };