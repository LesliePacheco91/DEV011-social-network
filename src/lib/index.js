import {
  db,
  collection,
  addDoc,
  onSnapshot,
  orderBy, query, doc, deleteDoc, updateDoc,
  arrayUnion, arrayRemove, getStorage, ref, uploadBytes, getDownloadURL,
} from './fireBase.js';

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
const q = query(postCollection, orderBy('date', 'desc'));
// llamar la coleccion de manera ordenada

// imprime los post en tiempo real
export const paintRealTtime = (Callback) => (onSnapshot(q, Callback));

export const filterMuro = (data, iduser, emailUser) => {
  const idpost = document.getElementById('posts');
  idpost.innerHTML = 'Sin pulicaciones';
};

// llamar la coleccion de manera ordenada por calificación
// const q = query(postCollection, orderBy('assm', 'desc'));

// mostrar publicaciones en tiempo real
// export const querySnapshot = getDocs(q);

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
