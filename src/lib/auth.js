import {
  createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider,
} from 'firebase/auth';

import {
  auth,
} from './fireBase.js';
// funcion para registro de usuario mediante formulario
export const registerNewUser = (email, password) => new Promise((resolve, reject) => {
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    resolve(user.uid);
  }).catch((error) => {
    const errorCode = error.code;
    if (errorCode === 'auth/email-already-in-use') {
      reject(new Error('Ya existe este email'));
    } else if (errorCode === 'auth/weak-password') {
      reject(new Error('Contraseña inválida minino 6 caracteres'));
    } else if (errorCode) {
      reject(new Error('Correo inválido intenta de nuevo'));
    }
  });
});

// funcion para loguearse de cuenta mediante cuenta de usuario
export const loginUser = (email, password) => new Promise((resolve, reject) => {
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    resolve(user.uid);
  }).catch((error) => {
    const errorCode = error.code;

    if (errorCode === 'auth/invalid-login-credentials') {
      reject(new Error('Usuario y/o contraseña incorrectos'));
    } else if (errorCode === 'auth/missing-password') {
      reject(new Error('Campo de contraseña vacía'));
    } else if (errorCode === 'auth/invalid-email') {
      reject(new Error('Campo de correo vacía'));
    }
  });
});

// registro mediante Google
export const registerGoogle = (provider) => (
signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user.uid;
      return user;
    }).catch((error) => {
      const errorCode = error.code;
      return errorCode;
    }));

// login por google
export const loginGoogle = (provider) => (
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      // const user = result.user.uid;
      return user;
    }).catch((error) => {
      const errorCode = error.code;
      return errorCode;
    })
);
