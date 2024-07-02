import { GoogleAuthProvider } from 'firebase/auth';
import { loginGoogle, loginUser } from '../lib/auth';

const login = (navigateTo) => {
// <------------------------- Creación de elementos HTML --------------------------------->

  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const alerts = document.createElement('span');
  const buttonLogin = document.createElement('input');
  const buttonGoogle = document.createElement('button');
  const imgGoogle = document.createElement('img');
  const textButtonGoogle = document.createElement('h3');
  const buttons = document.createElement('section');

  // <-------------------------- Título de la página "login" ------------------------------->

  title.textContent = 'Iniciar sesión';
  title.className = 'tituloLogin titulo';

  // <------------------- Campo para ingresar correo electrónico --------------------------->

  inputEmail.placeholder = 'Ingresa tu correo electrónico';
  inputEmail.className = 'form-data';

  inputEmail.setAttribute('id', 'idEmail');

  // <------------------------ Campo para ingresar contraseña ------------------------------>

  inputPass.placeholder = 'Ingresa tu contraseña';
  inputPass.type = 'password';
  inputPass.className = 'form-data';
  inputPass.setAttribute('id', 'inputPass');
  alerts.setAttribute('id', 'alerts-error');

  // <-------------------------------- Sección de botones ---------------------------------->

  buttons.className = 'botones';

  // <-Botón para iniciar sesión con correo electrónico ----->

  buttonLogin.value = 'Iniciar';
  buttonLogin.type = 'submit';
  buttonLogin.className = 'register';
  buttonLogin.setAttribute('id', 'buttonLogin');
  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('email', inputEmail.value);
    loginUser(inputEmail.value, inputPass.value)
      .then((ok) => {
        if (ok) {
          localStorage.setItem('user', ok);
          navigateTo('/muro');
        }
      }).catch((error) => {
        document.getElementById('alerts-error').textContent = error;
      });
  });

  // <--Botón para iniciar sesión con cuenta de Google ---->
  buttonGoogle.className = 'registergoogle';
  buttonGoogle.setAttribute('id', 'buttonLoginGoogle');

  buttonGoogle.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    const resultado = loginGoogle(provider);
    resultado.then((user) => {
      if (user) {
        localStorage.setItem('user', user.uid);
        localStorage.setItem('email', user.email);
        navigateTo('/muro');
      }
    }).catch((errorCode) => {
      document.getElementById('alerts-error').textContent = errorCode;
    });
  });

  imgGoogle.src = '../img/001-google.png';
  imgGoogle.alt = 'Logo Javascript';
  imgGoogle.className = 'imgGoogle';
  textButtonGoogle.textContent = 'Iniciar con';
  textButtonGoogle.className = 'title-google';

  // <-------------------- Botón para regresar a la página "home" -------------------------->

  buttonReturn.textContent = 'Registrarse';
  buttonReturn.id = 'buttonReturn';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/newUser');
  });

  // <---------------- Orden de la estructura de los elementos HTML ------------------------>

  buttonGoogle.append(imgGoogle);
  form.append(inputEmail, inputPass, alerts);
  buttons.append(buttonLogin, textButtonGoogle, buttonGoogle, buttonReturn);
  section.append(title, form, buttons);

  return section;
};

export { login };
