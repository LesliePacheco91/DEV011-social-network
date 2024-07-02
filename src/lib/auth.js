import {
  createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider,
} from 'firebase/auth';

import {
  auth,
  db,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  orderBy, query, doc, deleteDoc, updateDoc,
  arrayUnion, arrayRemove, getStorage, ref, uploadBytes, getDownloadURL,
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
    }));

// funcion para crear publicaciones
const postCollection = collection(db, 'posts');
export const createNewPost = (img, nameRest, loc, assm, clear, pri, categ, user) => {
  addDoc(postCollection, {
    img,
    nameRest,
    loc,
    assm,
    clear,
    pri,
    categ,
    user,
    date: Date.now(),
  });
};

// llamar la coleccion de manera ordenada
const q = query(postCollection, orderBy('date', 'desc'));

// llamar la coleccion de manera ordenada por calificación
// const q = query(postCollection, orderBy('assm', 'desc'));

// mostrar publicaciones en tiempo real
// export const querySnapshot = getDocs(q);

// imprime los post en tiempo real
export const paintRealTtime = (Callback) => (onSnapshot(q, Callback));

// eliminar post
export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

// actualizar datos del post
export const UpdatePost = (idPost, nombreRest, locali, Calfic, Limpieza, precio, categoria) => {
  const docRef = doc(db, 'posts', idPost);
  updateDoc(docRef, {
    nameRest: nombreRest,
    loc: locali,
    assm: Calfic,
    clear: Limpieza,
    pri: precio,
    categ: categoria,
  });
};

export const updateLikes = (idPost, iduser) => {
  const docRef = doc(db, 'posts', idPost);
  updateDoc(docRef, {
    like: arrayUnion(iduser),
  });
};

export const repoveLike = (idPost, iduser) => {
  const docRef = doc(db, 'posts', idPost);
  updateDoc(docRef, {
    like: arrayRemove(iduser),
  });
};
const storage = getStorage();
export const subirImg = (file) => new Promise((resolve, reject) => {
  const storageRef = ref(storage, `posts/${file.name}`);
  uploadBytes(storageRef, file).then((snapshot) => {
    const info = snapshot;
    resolve(storageRef);
  }).catch((error) => {
    reject(new Error('error de importar imagen'));
  });
});

export const readfile = (info) => new Promise((resolve, reject) => {
  getDownloadURL(info).then((url) => {
    const urlImg = url;
    resolve(urlImg);
  }).catch((error) => {
    reject(new Error('error de descargar imagen'));
  });
});

// guardar datos del perfil del usuario
const infoUser = collection(db, 'infoUser');
export const SabeInfoUser = (email, img, name) => {
  addDoc(infoUser, {
    email,
    img,
    name,
    date: Date.now(),
  });
};

// actualizar datos en del perfil del usuario
export const UpdateInfoUser = (email, img, name) => {
  const infoDocRef = doc(db, 'infoUser', email);
  updateDoc(infoDocRef, {
    img: img,
    name: name,
  });
};

// visualizar datos del perfil del usuario
