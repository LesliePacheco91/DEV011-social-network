import { createNewPost, paintRealTtime, querySnapshot } from '../lib/auth.js';

const muro = () => {
  // elementos de cabecera
  const section = document.createElement('section');
  const title = document.createElement('h3');
  const nameUser = document.createElement('h2');
  const elemenNav = document.createElement('nav');
  const buttonPost = document.createElement('button');
  const imgNewPost = document.createElement('img');

  // elementos del modal
  const modal = document.createElement('div');
  const buttonCloseMdl = document.createElement('button');
  const headModal = document.createElement('div');
  const titleModal = document.createElement('h2');
  const formNewPost = document.createElement('form');
  const nameRest = document.createElement('input');
  const location = document.createElement('input');
  const assment = document.createElement('input');
  const cleaning = document.createElement('input');
  const likepost = document.createElement('input');
  const price = document.createElement('select');
  const priceOpt1 = document.createElement('option');
  const priceOpt2 = document.createElement('option');
  const priceOpt3 = document.createElement('option');
  const category = document.createElement('select');
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');
  const option3 = document.createElement('option');
  const option4 = document.createElement('option');
  const buttonRegPost = document.createElement('button');

  // elements de filtro
  const navfilters = document.createElement('nav');
  const butonFilter1 = document.createElement('button');
  const butonFilter2 = document.createElement('button');
  const butonFilter3 = document.createElement('button');
  const imgfilter1 = document.createElement('img');
  const imgfilter2 = document.createElement('img');
  const imgfilter3 = document.createElement('img');

  // elementos los filtros del post
  const divOrderBy = document.createElement('div');
  const listOrderBy = document.createElement('select');
  const opcion1 = document.createElement('option');
  const opcion2 = document.createElement('option');
  const label = document.createElement('label');
  const contentPost = document.createElement('div');
  const listPost = document.createElement('ul');

  // elementos de cabecera
  title.textContent = 'Binveni@';
  title.className = 'titleStart';

  nameUser.textContent = 'Leslie Pacheco';
  nameUser.className = 'nameUser';

  elemenNav.className = 'elementHeder';
  buttonPost.className = 'buttonPost';
  imgNewPost.src = '../img/add.png';
  imgNewPost.className = 'imgNewPost';

  // elementos del modal
  modal.className = 'modal';
  // cabecera del modal
  headModal.className = 'head-modal';
  buttonCloseMdl.textContent = 'X';
  buttonCloseMdl.className = 'buttonCloseMdl';
  titleModal.textContent = 'Nueva reseña';
  titleModal.className = 'titleModal';
  // cuerpo del modal
  nameRest.type = 'text';
  // campo nombre del restaurante
  formNewPost.id = 'formNewPost';
  nameRest.className = 'form-post';
  nameRest.placeholder = 'Nombre del restaurante';
  nameRest.id = 'nameRest';

  // campo dirección del restaurante
  location.type = 'text';
  location.placeholder = 'Dirección';
  location.id = 'location';
  location.className = 'form-post';

  // campo de rango de calificacion
  assment.type = 'number';
  assment.placeholder = 'Calificacion de 1 - 5';
  assment.min = 1;
  assment.max = 5;
  assment.id = 'assment';
  assment.className = 'form-post';

  // campo de rango calificacion de limpieza
  cleaning.type = 'number';
  cleaning.placeholder = 'Rango de limpieza de 1 - 5';
  cleaning.id = 'clear';
  cleaning.min = 1;
  cleaning.max = 5;
  cleaning.className = 'form-post';

  // campo like "es un campo oculto"
  likepost.type = 'hidden';
  likepost.id = 'idLike';
  likepost.value = '0';

  // campo de rango de precios
  price.id = 'price';
  price.className = 'form-post';
  priceOpt1.value = 'Economico';
  priceOpt1.textContent = 'Economico';
  priceOpt2.value = 'Regualar';
  priceOpt2.textContent = 'Regular';
  priceOpt3.value = 'Caro';
  priceOpt3.textContent = 'Caro';
  price.append(priceOpt1, priceOpt2, priceOpt3);

  // campo de categoria
  category.id = 'category';
  category.className = 'form-post';
  option1.value = 'Vegano';
  option1.textContent = 'Vegano';
  option2.value = 'Comida rápida';
  option2.textContent = 'Comida rápida';
  option3.value = 'Cafetería';
  option3.textContent = 'Cafetería';
  option4.value = 'Gurmet';
  option4.textContent = 'Gurmet';
  category.append(option1, option2, option3, option4);

  // botón de publicar
  buttonRegPost.textContent = 'Publicar';
  buttonRegPost.className = 'registerPost';
  buttonRegPost.id = 'idregisterPost';

  formNewPost.append(
    nameRest,
    location,
    assment,
    cleaning,
    price,
    category,
    likepost,
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
  modal.querySelector('#idregisterPost').addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
    const namePost = document.querySelector('#nameRest').value;
    const loc = document.querySelector('#location').value;
    const assm = document.querySelector('#assment').value;
    const clear = document.querySelector('#clear').value;
    const pri = document.querySelector('#price').value;
    const categ = document.querySelector('#category').value;
    const like = document.querySelector('#idLike').value;
    createNewPost(namePost, loc, assm, clear, pri, categ, like);
    document.querySelector('#formNewPost').reset();
  });

  // elementos de filtros ( por el momento no se están mostrando)
  // **elementos de botones**
  navfilters.className = 'filters';
  butonFilter1.className = 'Buttonfilrer';
  butonFilter2.className = 'Buttonfilrer';
  butonFilter3.className = 'Buttonfilrer';
  imgfilter1.src = '../img/add.png';
  imgfilter1.className = 'imgfilter';
  imgfilter2.src = '../img/add.png';
  imgfilter2.className = 'imgfilter';
  imgfilter3.src = '../img/add.png';
  imgfilter3.className = 'imgfilter';
  butonFilter1.append(imgfilter1);
  butonFilter2.append(imgfilter2);
  butonFilter3.append(imgfilter3);
  elemenNav.append(buttonPost);

  // ** elementos de lista de ordenamiento**
  divOrderBy.className = 'contenOrder';
  label.textContent = ('Ordenar');
  label.for = 'order';
  listOrderBy.name = 'orderBy';
  listOrderBy.className = 'form-select';
  listOrderBy.setAttribute('id', 'order');
  opcion1.value = 'mayorAmenor';
  opcion1.textContent = 'De mayor a menor';
  opcion2.value = 'MenorAMayor';
  opcion2.textContent = 'De menor a mayor';
  listOrderBy.append(opcion1, opcion2);
  divOrderBy.append(label, listOrderBy);

  navfilters.append(butonFilter1, butonFilter2, butonFilter3, divOrderBy);

  // elementos del post
  contentPost.className = 'contentPost';
  listPost.setAttribute('id', 'posts');

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
      userPost.textContent = 'Leslie Pacheco';

      headerPost.className = 'headerPost';
      iconDeletePost.src = '../img/basura.png';
      iconDeletePost.className = 'iconHeader';
      buttonDeletePost.className = 'buttonDelete';
      buttonDeletePost.append(iconDeletePost);

      iconUpdatePost.src = '../img/editar.png';
      iconUpdatePost.className = 'iconHeader';
      buttonUpdatepost.className = 'buttonUpdate';
      buttonUpdatepost.append(iconUpdatePost);

      headerPost.append(userPost, buttonUpdatepost, buttonDeletePost);

      imgPost.src = '../img/primer-plano-deliciosos-tacos.jpg';
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
      totalLike.textContent = doc.data().like;
      buttonLike.append(likes, totalLike);
      buttonLike.id = 'buttonLike';
      iconloc.src = '../img/ubicacion.png';
      iconloc.className = 'iconloc';
      contendLoc.textContent = doc.data().loc;
      contendLoc.className = 'titlePost';
      local.append(iconloc, contendLoc);
      local.className = 'titleLocal';
      likes.className = 'imgLike';

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
      divinfo.append(titlePost, buttonLike, local, article, rangeClear, rangePrice, rangeCateg);
      li.append(headerPost, divimg, divinfo);
      listPost.appendChild(li);
    });
  });

  contentPost.append(listPost);
  section.append(modal, title, nameUser, elemenNav, contentPost);
  return section;
};

export { muro };
