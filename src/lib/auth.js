import { getAuth, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const auth = getAuth();
export const registerNewUser = (email, password) => (
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      document.querySelector('#alerts-error').innerHTML = 'Te has registrado correctamente ';
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === 'auth/email-already-in-use') {
        document.querySelector('#alerts-error').innerHTML = 'Ya existe este usuario';
      } else if (errorCode === 'auth/weak-password') {
        document.querySelector('#alerts-error').innerHTML = 'Contraseña invalida minino 6 caracteres';
      }
      // ..
    })
);

export const registerGoogle = (provider) => (

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    })
);
