import { GoogleAuthProvider } from 'firebase/auth';
import { registerGoogle } from '../lib/auth';

// file login finished
function login(navigateTo) {
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

  inputEmail.placeholder = 'Correo electrónico';
  inputEmail.className = 'form-data';

  inputPass.placeholder = 'pass';
  inputPass.type = 'password';
  inputPass.className = 'form-data';

  title.textContent = 'Iniciar sesión';
  title.className = 'titulo';
  buttonLogin.value = 'Iniciar';
  buttonLogin.type = 'submit';
  buttonLogin.className = 'register';

  buttonReturn.textContent = 'Regresar al inicio';
  buttonReturn.className = 'register';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  imgGoogle.src = '../img/001-google.png';
  imgGoogle.alt = 'Logo Javascript';
  imgGoogle.className = 'imgGoogle';

  textButtonGoogle.textContent = 'Iniciar con google';
  textButtonGoogle.className = 'title-google';
  buttonGoogle.append(imgGoogle, textButtonGoogle);

  buttonGoogle.className = 'register';
  buttonGoogle.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    registerGoogle(provider);
  });

  form.append(inputEmail, inputPass, buttonLogin);
  section.append(title, form, buttonGoogle, buttonReturn);

  return section;
}

export default login;
