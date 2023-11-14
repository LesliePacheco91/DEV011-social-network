import {
  createNewPost, UpdatePost, paintRealTtime, deletePost,
} from '../lib/auth.js';

const muro = (navigateTo) => {
  const iduser = localStorage.getItem('user');
  // localStorage.removeItem(user);

  // elementos de cabecera
  const section = document.createElement('section');
  const buttonLogout = document.createElement('button');
  // const nameUser = document.createElement('h2');
  const elemenNav = document.createElement('nav');
  const buttonPost = document.createElement('button');
  const imgNewPost = document.createElement('img');

  // elementos del modal para registrar reseña
  const modal = document.createElement('div');
  const buttonCloseMdl = document.createElement('button');
  const headModal = document.createElement('div');
  const titleModal = document.createElement('h2');
  const formNewPost = document.createElement('form');
  const imagPost = document.createElement('input');
  const nameRest = document.createElement('input');
  const location = document.createElement('input');
  const assment = document.createElement('input');
  const cleaning = document.createElement('input');
  const likepost = document.createElement('input');
  const price = document.createElement('select');
  const priceOpt0 = document.createElement('option');
  const priceOpt1 = document.createElement('option');
  const priceOpt2 = document.createElement('option');
  const priceOpt3 = document.createElement('option');
  const category = document.createElement('select');
  const option0 = document.createElement('option');
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');
  const option3 = document.createElement('option');
  const option4 = document.createElement('option');
  const buttonRegPost = document.createElement('button');

  // modal para actualizar reseña
  // elementos del modal para registrar nuevo post
  const user = document.createElement('input');
  const modalUpdt = document.createElement('div');
  const idP = document.createElement('input');
  const buttonCloseMdlUpdt = document.createElement('button');
  const headModalUpdt = document.createElement('div');
  const titleModalUpdt = document.createElement('h2');
  const formPostUpdt = document.createElement('form');
  const labelNameRest = document.createElement('label');
  const nameRestUpdt = document.createElement('input');
  const labelLoc = document.createElement('label');
  const locationUpdt = document.createElement('input');
  const labelAssment = document.createElement('label');
  const assmentUpdt = document.createElement('input');
  const labelClear = document.createElement('label');
  const cleaningUpdt = document.createElement('input');
  const likepostUpdt = document.createElement('input');
  const labelPrice = document.createElement('label');
  const priceUpdt = document.createElement('select');
  const priceOpt1Updt = document.createElement('option');
  const priceOpt2Updt = document.createElement('option');
  const priceOpt3Updt = document.createElement('option');
  const labelCategory = document.createElement('label');
  const categoryUpdt = document.createElement('select');
  const option1Updt = document.createElement('option');
  const option2Updt = document.createElement('option');
  const option3Updt = document.createElement('option');
  const option4Updt = document.createElement('option');
  const buttonPostUpdt = document.createElement('button');
  const contentPost = document.createElement('div');
  const listPost = document.createElement('ul');

  // // Función para verificar si el usuario tiene la sesión iniciada
  // const checkSession = () => new Promise((resolve, reject) => {
  //   // Comprueba el estado de autenticación del usuario actual
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       // El usuario tiene la sesión iniciada
  //       resolve(user);
  //     } else {
  //       // El usuario no tiene la sesión iniciada
  //       reject(new Error('Usuario no autenticado'));
  //     }
  //   });
  // });

  // // Ejemplo de uso de la función checkSession
  // checkSession()
  //   .then((user) => {
  //   // El usuario tiene la sesión iniciada
  //     console.log('Usuario autenticado:', user.email);
  //   // Aquí puedes realizar las acciones que necesites para un usuario autenticado
  //   })
  //   .catch((error) => {
  //   // El usuario no tiene la sesión iniciada
  //     console.error('Error:', error.message);
  //   // Aquí puedes realizar las acciones que necesites para un usuario no autenticado
  //   });

  // elementos de cabecera
  // nameUser.textContent = 'Leslie Pacheco';
  // nameUser.className = 'nameUser';

  buttonLogout.textContent = 'Cerrar sesión';
  buttonLogout.className = 'register';
  buttonLogout.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/');
  });
  const header = document.querySelector('header');

  header.append(buttonLogout);

  // nameUser.textContent = user;
  // nameUser.className = 'nameUser';

  elemenNav.className = 'elementHeder';
  buttonPost.className = 'buttonPost';
  imgNewPost.src = '../img/add.png';
  imgNewPost.className = 'imgNewPost';

  // elementos del modal
  modal.className = 'modal';
  modal.id = 'modalRegister';
  // cabecera del modal
  headModal.className = 'head-modal';
  buttonCloseMdl.textContent = 'X';
  buttonCloseMdl.className = 'buttonCloseMdl';
  titleModal.textContent = 'Nueva reseña';
  titleModal.className = 'titleModal';
  // cuerpo del modal
  formNewPost.id = 'formNewPost';
  imagPost.type = 'text';
  imagPost.className = 'form-post';
  imagPost.id = 'idImgPost';
  imagPost.placeholder = 'Ingresa una imagen';
  imagPost.name = 'imgPost';
  imagPost.required = 'true';
  // campo nombre del restaurante
  nameRest.type = 'text';
  nameRest.className = 'form-post';
  nameRest.placeholder = 'Nombre del restaurante';
  nameRest.id = 'idnameRest';
  nameRest.name = 'nameRest';
  nameRest.required = 'true';

  // campo dirección del restaurante
  location.type = 'text';
  location.placeholder = 'Dirección';
  location.id = 'idlocation';
  location.className = 'form-post';
  location.name = 'location';
  location.required = 'true';

  // campo de rango de calificacion
  assment.type = 'number';
  assment.placeholder = 'Calificación de 1 - 5';
  assment.min = 1;
  assment.max = 5;
  assment.id = 'idassment';
  assment.className = 'form-post';
  assment.name = 'assment';
  assment.required = 'true';

  // campo de rango calificacion de limpieza
  cleaning.type = 'number';
  cleaning.placeholder = 'Rango de limpieza de 1 - 5';
  cleaning.id = 'idclear';
  cleaning.min = 1;
  cleaning.max = 5;
  cleaning.className = 'form-post';
  cleaning.name = 'clear';
  cleaning.required = 'true';

  // campo like "es un campo oculto"
  likepost.type = 'hidden';
  likepost.id = 'idLike';
  likepost.value = '0';
  likepost.name = 'likePost';
  likepost.required = 'true';

  // campo de rango de precios
  price.id = 'idprice';
  price.className = 'form-post';

  price.name = 'price';
  price.required = 'true';
  priceOpt0.value = '';
  priceOpt0.textContent = 'Precio';
  priceOpt1.value = 'Económico';
  priceOpt1.textContent = 'Económico';

  priceOpt2.value = 'Regular';
  priceOpt2.textContent = 'Regular';
  priceOpt3.value = 'Caro';
  priceOpt3.textContent = 'Caro';
  price.append(priceOpt0, priceOpt1, priceOpt2, priceOpt3);

  // campo de categoria
  category.id = 'idcategory';
  category.className = 'form-post';
  category.name = 'category';
  category.required = 'true';

  option0.value = '';
  option0.textContent = 'Tipo de Comida';
  option1.value = 'Cafetería';
  option1.textContent = 'Cafetería';
  option2.value = 'Comida rápida';
  option2.textContent = 'Comida rápida';
  option3.value = 'Gourmet';
  option3.textContent = 'Gourmet';
  option4.value = 'Vegano';
  option4.textContent = 'Vegano';
  category.append(option0, option1, option2, option3, option4);

  // campo usuario
  user.type = 'hidden';
  user.id = 'idUser';
  user.value = iduser;
  user.name = 'iduser';

  // botón de publicar
  buttonRegPost.textContent = 'Publicar';
  buttonRegPost.className = 'registerPost';
  buttonRegPost.id = 'idregisterPost';

  formNewPost.append(
    imagPost,
    nameRest,
    location,
    assment,
    cleaning,
    price,
    category,
    likepost,
    user,
    buttonRegPost,
  );
  buttonPost.append(imgNewPost);
  headModal.append(titleModal, buttonCloseMdl);
  modal.append(headModal, formNewPost);

  // boton para abrir modal
  buttonPost.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
  });

  // boton para cerrar modal
  buttonCloseMdl.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
  });

  // Boton para registrar reseña
  buttonRegPost.addEventListener('click', (e) => {
    e.preventDefault();

    const imagePost = document.querySelector('#idImgPost');
    const namePost = document.querySelector('#idnameRest');
    const loc = document.querySelector('#idlocation');
    const assm = document.querySelector('#idassment');
    const clear = document.querySelector('#idclear');
    const pri = document.querySelector('#idprice');
    const categ = document.querySelector('#idcategory');
    const like = document.querySelector('#idLike');
    const idUser = document.querySelector('#idUser');
    createNewPost(imagePost.value, namePost.value, loc.value, assm.value, clear.value, pri.value, categ.value, like.value, idUser.value);
    modal.classList.remove('modal--show');
    // document.querySelector('#formNewPost').reset();
  });

  // modal para actualizar reseñas
  // elementos del modal
  modalUpdt.className = 'modal';
  // cabecera del modal
  headModalUpdt.className = 'head-modal';
  buttonCloseMdlUpdt.textContent = 'X';
  buttonCloseMdlUpdt.className = 'buttonCloseMdl';
  titleModalUpdt.textContent = 'Modificar reseña';
  titleModalUpdt.className = 'titleModal';

  buttonCloseMdlUpdt.addEventListener('click', (e) => {
    e.preventDefault();
    modalUpdt.classList.remove('modal--show');
  });

  // cuerpo del modal
  nameRestUpdt.type = 'text';
  // campo nombre del restaurante
  labelNameRest.textContent = 'Nombre del restaurante';
  formPostUpdt.id = 'formPostUpdt';
  idP.id = 'idpost';
  idP.type = 'hidden';
  nameRestUpdt.className = 'form-post';
  nameRestUpdt.placeholder = 'Nombre del restaurante';
  nameRestUpdt.id = 'nameRestUdt';

  // campo dirección del restaurante
  labelLoc.textContent = 'Localización del restaurante';
  locationUpdt.type = 'text';
  locationUpdt.placeholder = 'Dirección';
  locationUpdt.id = 'locationUdt';
  locationUpdt.className = 'form-post';

  // campo de rango de calificacion
  labelAssment.textContent = 'Rango de calificacion';
  assmentUpdt.type = 'number';
  assmentUpdt.placeholder = 'Calificacion de 1 - 5';
  assmentUpdt.min = 1;
  assmentUpdt.max = 5;
  assmentUpdt.id = 'assmentUdt';
  assmentUpdt.className = 'form-post';

  // campo de rango calificacion de limpieza
  labelClear.textContent = 'Rando de limpieza';
  cleaningUpdt.type = 'number';
  cleaningUpdt.placeholder = 'Rango de limpieza de 1 - 5';
  cleaningUpdt.id = 'clearUpdt';
  cleaningUpdt.min = 1;
  cleaningUpdt.max = 5;
  cleaningUpdt.className = 'form-post';

  // campo like "es un campo oculto"
  likepostUpdt.type = 'hidden';
  likepostUpdt.id = 'idLikeUpdt';
  likepostUpdt.value = '0';

  // campo de rango de precios
  labelPrice.textContent = 'Rango de precios';
  priceUpdt.id = 'priceUpdt';
  priceUpdt.className = 'form-post';
  priceOpt1Updt.value = 'Economico';
  priceOpt1Updt.textContent = 'Economico';
  priceOpt2Updt.value = 'Regualar';
  priceOpt2Updt.textContent = 'Regular';
  priceOpt3Updt.value = 'Caro';
  priceOpt3Updt.textContent = 'Caro';
  priceUpdt.append(priceOpt1Updt, priceOpt2Updt, priceOpt3Updt);

  // campo de categoria
  labelCategory.textContent = 'Categoría';
  categoryUpdt.id = 'categoryUpdt';
  categoryUpdt.className = 'form-post';
  option1Updt.value = 'Vegano';
  option1Updt.textContent = 'Vegano';
  option2Updt.value = 'Comida rápida';
  option2Updt.textContent = 'Comida rápida';
  option3Updt.value = 'Cafetería';
  option3Updt.textContent = 'Cafetería';
  option4Updt.value = 'Gurmet';
  option4Updt.textContent = 'Gurmet';
  categoryUpdt.append(option1Updt, option2Updt, option3Updt, option4Updt);

  // botón de publicar
  buttonPostUpdt.textContent = 'Actualizar';
  buttonPostUpdt.className = 'registerPost';
  buttonPostUpdt.id = 'idregisterPostUpdate';

  formPostUpdt.append(
    idP,
    labelNameRest,
    nameRestUpdt,
    labelLoc,
    locationUpdt,
    labelAssment,
    assmentUpdt,
    labelClear,
    cleaningUpdt,
    labelPrice,
    priceUpdt,
    labelCategory,
    categoryUpdt,
    likepostUpdt,
    buttonPostUpdt,
  );

  headModalUpdt.append(titleModalUpdt, buttonCloseMdlUpdt);
  modalUpdt.append(headModalUpdt, formPostUpdt);
  elemenNav.append(buttonPost);

  /// funcion de actualizar post
  modalUpdt.querySelector('#idregisterPostUpdate').addEventListener('click', (e) => {
    e.preventDefault();
    modalUpdt.classList.remove('modal--show');
    const id = document.querySelector('#idpost');
    const nombreRest = document.querySelector('#nameRestUdt');
    const locali = document.querySelector('#locationUdt');
    const Calfic = document.querySelector('#assmentUdt');
    const Limpieza = document.querySelector('#clearUpdt');
    const precio = document.querySelector('#priceUpdt');
    const categoria = document.querySelector('#categoryUpdt');
    UpdatePost(id.value, nombreRest.value, locali.value, Calfic.value, Limpieza.value, precio.value, categoria.value);
  });

  // elementos del post
  contentPost.className = 'contentPost';
  listPost.id = 'posts';

  paintRealTtime((querySnapshot) => {
    listPost.textContent = '';
    querySnapshot.forEach((doc) => {
      // post
      const li = document.createElement('li');
      // cabecera el post
      const headerPost = document.createElement('div');
      const buttonDeletePost = document.createElement('button');
      const iconDeletePost = document.createElement('img');
      const buttonUpdatepost = document.createElement('button');
      const iconUpdatePost = document.createElement('img');
      const userPost = document.createElement('h3');

      // imagen del post
      const divimg = document.createElement('div');
      const imgPost = document.createElement('img');

      // informacion del post
      const divinfo = document.createElement('div');
      const titlePost = document.createElement('h3');
      const buttonLike = document.createElement('button');
      const totalLike = document.createElement('h3');
      const likes = document.createElement('img');
      const article = document.createElement('article');
      const iconloc = document.createElement('img');
      const contendLoc = document.createElement('span');
      const local = document.createElement('p');
      const rangeClear = document.createElement('article');
      const titleClear = document.createElement('h4');
      const numClear = document.createElement('p');
      const rangePrice = document.createElement('article');
      const titlePrice = document.createElement('h4');
      const numPrice = document.createElement('p');
      const rangeCateg = document.createElement('article');
      const titleCateg = document.createElement('h4');
      const typeCateg = document.createElement('p');

      li.classList.add('card');
      li.setAttribute('itemscope', '');
      li.setAttribute('itemtype', 'gastroTour');
      divimg.classList = ('contend-img');
      userPost.className = 'userPost';
      // userPost.textContent = 'Leslie Pacheco';

      headerPost.className = 'headerPost';

      iconDeletePost.src = '../img/basura.png';
      iconDeletePost.className = 'iconHeader';
      buttonDeletePost.className = 'buttonDelete';

      buttonDeletePost.append(iconDeletePost);

      iconUpdatePost.src = '../img/editar.png';
      iconUpdatePost.className = 'iconHeader';
      buttonUpdatepost.className = 'buttonUpdate';

      if (doc.data().user === iduser) {
        buttonDeletePost.append(iconDeletePost);
        buttonUpdatepost.append(iconUpdatePost);
      }
      buttonUpdatepost.addEventListener('click', async (e) => {
        e.preventDefault();
        modalUpdt.classList.add('modal--show');
        document.querySelector('#idpost').value = doc.id;
        document.querySelector('#nameRestUdt').value = doc.data().nameRest;
        document.querySelector('#locationUdt').value = doc.data().loc;
        document.querySelector('#assmentUdt').value = doc.data().assm;
        document.querySelector('#clearUpdt').value = doc.data().clear;
        document.querySelector('#priceUpdt').value = doc.data().pri;
        document.querySelector('#categoryUpdt').value = doc.data().categ;
      });

      buttonDeletePost.addEventListener('click', (e) => {
        e.preventDefault();
        const idPost = doc.id;
        deletePost(idPost);
      });

      imgPost.src = doc.data().img;
      imgPost.className = 'imgPost';
      divimg.append(imgPost);

      divinfo.classList = ('contend-info');
      titlePost.textContent = doc.data().nameRest;
      titlePost.className = 'titlePost';

      if (doc.data().like > 0) {
        likes.src = '../img/like.png';
      } else {
        likes.src = '../img/dislike.png';
      }
      let counter = 0;
      let isSelected = false;

      buttonLike.addEventListener('click', () => {
        if (!isSelected) {
          counter += 1;
          isSelected = true;
          likes.src = '../img/like.png';
        } else {
          counter -= 1;
          isSelected = false;
          likes.src = '../img/dislike.png';
        }

        totalLike.textContent = counter;
      });

      totalLike.textContent = doc.data().like;
      totalLike.className = 'totalLike';
      buttonLike.append(likes, totalLike);
      buttonLike.id = 'buttonLike';
      iconloc.src = '../img/ubicacion.png';
      iconloc.className = 'iconloc';
      contendLoc.textContent = doc.data().loc;
      contendLoc.className = 'titlePost';
      local.append(iconloc, contendLoc);
      local.className = 'titleLocal';
      likes.className = 'imgLike';

      /* buttonLike.addEventListener('click', (e) => {
        e.preventDefault();
        const idPost = doc.id;
        const totalLikes = parseInt(doc.data().like, 10) + 1;

        updateLikes(idPost, totalLikes);
      });
      */
      // impresion de las estrellas
      article.className = 'rangeStart';
      for (let z = 0; z < doc.data().assm; z += 1) {
        const assmentsPost = document.createElement('img');

        assmentsPost.src = '../img/start.png';
        assmentsPost.className = 'assments';

        article.appendChild(assmentsPost);
      }

      titleClear.textContent = 'Limpieza';
      titleClear.className = 'titleRange';
      rangeClear.className = 'contedRange';
      numClear.textContent = `${doc.data().clear}/5`;

      rangeClear.append(titleClear, numClear);

      titlePrice.textContent = 'Precio';
      titlePrice.className = 'titleRange';
      numPrice.textContent = doc.data().pri;
      rangePrice.className = 'contedRange';

      rangePrice.append(titlePrice, numPrice);

      titleCateg.textContent = 'Categoría';
      titleCateg.className = 'titleRange';
      rangeCateg.className = 'contedRange';
      typeCateg.textContent = doc.data().categ;

      rangeCateg.append(titleCateg, typeCateg);
      divinfo.append(local, rangeClear, rangePrice, rangeCateg, article, buttonLike);
      headerPost.append(titlePost, buttonUpdatepost, buttonDeletePost);
      li.append(headerPost, divimg, divinfo);
      listPost.appendChild(li);
    });
  });

  contentPost.append(listPost);

  section.append(modal, elemenNav, contentPost, modalUpdt);

  return section;
};

export { muro };
