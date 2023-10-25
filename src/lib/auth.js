import { getAuth, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const auth = getAuth();
export const registerNewUser = (email, password) => (
  createUserWithEmailAndPassword(auth, email, password)
);

export const registerGoogle = (provider) => (

  signInWithPopup(auth, provider)
);
