import {
  SabeInfoUser,
  UpdateInfoUser,
} from '../lib/auth.js';

const perfil = (navigateTo) => {

 
  const iduser = localStorage.getItem('user');
  const emailUser = localStorage.getItem('email');
  const section = document.createElement('section');
  const elemenNav = document.createElement('nav');
  const divImg = document.createElement('div');
  divImg.className = 'img-container';
  const imgAcount = document.createElement('img');
  imgAcount.src = '../img/usuarioAcount.png';
  imgAcount.className = 'img-count';

  divImg.append(imgAcount);

  // form acunt
  const formAcount = document.createElement('form');

  const inputEmail = document.createElement('input');
  inputEmail.placeholder = 'Ingresa tu correo electrónico';
  inputEmail.type = 'email';
  inputEmail.name = 'email';
  inputEmail.value = emailUser;
  inputEmail.readOnly = 'readOnly';
  inputEmail.required = 'true';
  inputEmail.className = 'form-data';
  inputEmail.setAttribute('id', 'idEmail');

  const inputName = document.createElement('input');
  inputName.placeholder = 'Ingresa tu nombre';
  inputName.type = 'text';
  inputName.name = 'username';
  inputName.required = 'true';
  inputName.className = 'form-data';

  const inputImg = document.createElement('input');
  inputImg.placeholder = 'Ingresa una imagen';
  inputImg.type = 'file';
  inputImg.name = 'image';
  inputImg.required = 'true';
  inputImg.className = 'form-data';

  inputName.name = 'username';
  inputName.required = 'true';
  inputName.className = 'form-data';

  const inputId = document.createElement('input');
  inputId.type = 'hidden';
  inputId.name = 'idUser';
  inputId.value = iduser;
  inputId.required = 'true';
  inputId.className = 'form-data';

  const butonSaveAcount = document.createElement('button');
  butonSaveAcount.textContent = 'Actualizar Datos';
  butonSaveAcount.className = 'register';
  butonSaveAcount.setAttribute('id', 'buttonUser');

  butonSaveAcount.addEventListener('click', (e) => {
    e.preventDefault();
    SabeInfoUser(inputEmail.value, inputImg.value, inputName.value).then((ok) => {
      if (ok) {
        console.log('se ha registrado correctamente');
      }
    }).catch((error) => {
      document.getElementById('alerts-error').textContent = error;
    });
  });

  formAcount.append(inputEmail, inputName, inputImg, inputId, butonSaveAcount);

  // boton cerrar sesión
  const buttonLogout = document.createElement('button');
  const titleButtonLogout = document.createElement('h3');
  const imgLogout = document.createElement('img');
  // boton muro
  const buttonMuro = document.createElement('button');
  const titleButonMuro = document.createElement('h3');
  const imgMuro = document.createElement('img');

  elemenNav.className = 'elementHeader';

  // boton muro
  buttonMuro.className = 'buttonMuro';
  imgMuro.src = '../img/muro.png';
  imgMuro.className = 'imgMuro';
  titleButonMuro.className = 'titleButon';
  titleButonMuro.textContent = 'Ver muro';
  buttonMuro.append(imgMuro, titleButonMuro);
  buttonMuro.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/muro');
  });

  // boton cerrar sesión
  buttonLogout.classList = ('buttonLogout');
  titleButtonLogout.className = 'titleButon';
  titleButtonLogout.textContent = 'Cerrar Sesión';
  imgLogout.src = '../img/cerrar-sesion.png';
  imgLogout.classList = 'imgLogout';
  buttonLogout.append(imgLogout, titleButtonLogout);
  buttonLogout.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    navigateTo('/');
  });

  elemenNav.append(buttonMuro, buttonLogout);
  section.append(elemenNav, divImg, formAcount);

  return section;
};

export { perfil };