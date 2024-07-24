// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import {
  arrayRemove,
  arrayUnion,
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
  updateDoc,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* const firebaseConfig = {
  apiKey: 'AIzaSyABq8MSX--dAspZWbMB59umYaMVjLHkNjI',
  authDomain: 'gastrotour-17ada.firebaseapp.com',
  projectId: 'gastrotour-17ada',
  storageBucket: 'gastrotour-17ada.appspot.com',
  messagingSenderId: '38325177476',
  appId: '1:38325177476:web:43195b46f4f4c5ed2c06d1',
  measurementId: 'G-9BKFFCLQBP',

};
*/

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAr1CVRzcqWExR205zcxq8hQFHFH1S0GqQ',
  authDomain: 'gastro-tour-a7502.firebaseapp.com',
  databaseURL: 'https://gastro-tour-a7502-default-rtdb.firebaseio.com',
  projectId: 'gastro-tour-a7502',
  storageBucket: 'gastro-tour-a7502.appspot.com',
  messagingSenderId: '485511291348',
  appId: '1:485511291348:web:c35c9ebbd0aca801ccf641',
  measurementId: 'G-EP9SLJ1M2G',
};

// Initialize Firebase
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
// export const storage = firebase.storage();

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage();
// Create a storage reference from our storage service
export const storageRef = ref(storage);
export const imagesRefPost = ref(storageRef, 'posts');
export const imagesRefPerfil = ref(storageRef, 'perfilUser');

// libreria Inicializa Cloud Firestore
export const db = getFirestore(app);

export {
  arrayRemove,
  arrayUnion,
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
  updateDoc,
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
};

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
// const analytics = getAnalytics(app);
