import { GoogleAuthProvider } from 'firebase/auth';
import { registerGoogle } from '../lib/auth';

function login(navigateTo) {
// <------------------------- Creación de elementos HTML --------------------------------->
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('input');
  const buttonGoogle = document.createElement('button');
  const imgGoogle = document.createElement('img');
  const textButtonGoogle = document.createElement('span');
  const buttons = document.createElement('section');
  // <-------------------------- Título de la página "login" -------------------------->
  title.textContent = 'Iniciar sesión';
  title.className = 'titulo';
  // <------------------- Campo para ingresar correo electrónico --------------------------->
  inputEmail.placeholder = 'Ingresa tu correo electrónico';
  inputEmail.className = 'form-data';
  // <------------------------ Campo para ingresar contraseña ------------------------------>
  inputPass.placeholder = 'Ingresa tu contraseña';
  inputPass.type = 'password';
  inputPass.className = 'form-data';
  // <-------------------------------- Sección de botones ---------------------------------->
  buttons.className = 'botones';
  // <------------- Botón para iniciar sesión con correo electrónico ----------------------->
  buttonLogin.value = 'Iniciar';
  buttonLogin.type = 'submit';
  buttonLogin.className = 'register';
  // <-------------- Botón para iniciar sesión con cuenta de Google ------------------------>
  buttonGoogle.className = 'registergoogle';
  buttonGoogle.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    registerGoogle(provider);
  });
  imgGoogle.src = '../img/001-google.png';
  imgGoogle.alt = 'Logo Javascript';
  imgGoogle.className = 'imgGoogle';
  textButtonGoogle.textContent = 'Iniciar con google';
  textButtonGoogle.className = 'title-google';
  // <-------------------- Botón para regresar a la página "home" -------------------------->
  buttonReturn.textContent = 'Regresar al inicio';
  buttonReturn.className = 'register';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });
  // <---------------- Orden de la estructura de los elementos HTML ------------------------>
  buttonGoogle.append(imgGoogle, textButtonGoogle);
  form.append(inputEmail, inputPass);
  buttons.append(buttonLogin, buttonGoogle, buttonReturn);
  section.append(title, form, buttons);

  return section;
}
export default login;
