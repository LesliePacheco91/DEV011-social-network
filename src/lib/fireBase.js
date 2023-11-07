// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  doc,
  deleteDoc,
  setDoc,
} from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: 'AIzaSyABq8MSX--dAspZWbMB59umYaMVjLHkNjI',

  authDomain: 'gastrotour-17ada.firebaseapp.com',

  projectId: 'gastrotour-17ada',

  storageBucket: 'gastrotour-17ada.appspot.com',

  messagingSenderId: '38325177476',

  appId: '1:38325177476:web:43195b46f4f4c5ed2c06d1',

  measurementId: 'G-9BKFFCLQBP',

};
// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// libreria Inicializa Cloud Firestore
export const db = getFirestore(app);

export {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  doc,
  deleteDoc,
  setDoc,
};

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
// const analytics = getAnalytics(app);
