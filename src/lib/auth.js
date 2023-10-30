import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from './fireBase.js';
// const auth = getAuth();
export const registerNewUser = (email, password) => new Promise((resolve, reject) => {
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    resolve(auth, user.email);
  }).catch((error) => {
    const errorCode = error.code;
    reject(errorCode);
  });
});

export const registerGoogle = (provider) => (

  signInWithPopup(auth, provider)
);
