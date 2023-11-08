import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import {
  auth, db, collection, addDoc, getDocs, onSnapshot, orderBy, query,
} from './fireBase.js';

// funcion para registro de usuario mediante formulario
export const registerNewUser = (email, password) => new Promise((resolve, reject) => {
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    resolve(user.email);
  }).catch((error) => {
    const errorCode = error.code;
    if (errorCode === 'auth/email-already-in-use') {
      reject(new Error('Ya existe este email'));
    } else if (errorCode === 'auth/weak-password') {
      reject(new Error('Contraseña invalida minino 6 caracteres'));
    } else if (errorCode) {
      reject(new Error('Error de registro intenta de nuevos'));
    }
  });
});

// funcion para registro de cuenta mediante google

export const loginUser = (email, password) => new Promise((resolve, reject) => {
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    resolve(user.email);
  }).catch((error) => {
    const errorCode = error.code;
    if (errorCode === 'auth/invalid-login-credentials') {
      const errorMessage = error.message;
      console.log(errorMessage);
      reject(new Error('Usuario y/o Contraseña invalidas'));
    }
  });
});

export const registerGoogle = (provider) => (
  signInWithPopup(auth, provider)
);

// funcion para crear publicaciones

const postCollection = collection(db, 'posts');
export const createNewPost = (nameRest, loc, assm, clear, pri, categ, like) => {
  addDoc(postCollection, {
    nameRest,
    loc,
    assm,
    clear,
    pri,
    categ,
    like,
    date: Date.now(),
  });
};

// mostrar publicaciones
export const querySnapshot = getDocs(postCollection);

const q = query(postCollection, orderBy('date', 'desc'));

// mostrar publicaciones en tiempo real
export const paintRealTtime = (Callback) => (onSnapshot(q, Callback));

// login por google
export const loginGoogle = (provider) => (
  signInWithPopup(auth, provider)
    .then((result) => {
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      const user = result.user;
      return user;
    }).catch((error) => {
      const errorCode = error.code;
      return errorCode;
      // const errorMessage = error.message;
      // const email = error.customData.email;
      // const credential = GoogleAuthProvider.credentialFromError(error);
    }));
