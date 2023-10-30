// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
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
console.log('****', app);
// const db = getFirestore(app);

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
// const analytics = getAnalytics(app);
