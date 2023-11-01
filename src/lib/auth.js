import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from './fireBase.js';

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

export const registerGoogle = (provider) => (

  signInWithPopup(auth, provider)
);
