import { GoogleAuthProvider } from 'firebase/auth';
import { registerNewUser, registerGoogle } from '../lib/auth';

const newUser = (navigateTo) => {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonRegister = document.createElement('buttom');
  const alerts = document.createElement('span');
  const buttonGoogle = document.createElement('button');
  const imgGoogle = document.createElement('img');
  const textButtonGoogle = document.createElement('span');

  section.setAttribute('id', 'contendSection');
  title.textContent = 'Registro';
  title.className = 'titulo';

  inputEmail.placeholder = 'Ingresa tu correo';
  inputEmail.type = 'email';
  inputEmail.name = 'email';
  inputEmail.required = 'true';
  inputEmail.className = 'form-data';
  inputEmail.setAttribute('id', 'idEmail');

  inputPass.placeholder = 'Ingresa tu contraseña';
  inputPass.type = 'password';
  inputPass.name = 'password';
  inputPass.required = 'true';
  inputPass.className = 'form-data';
  inputPass.setAttribute('id', 'form-pass');
  alerts.setAttribute('id', 'alerts-error');
  buttonRegister.textContent = 'Registrar';
  buttonRegister.className = 'register';
  buttonRegister.setAttribute('id', 'buttonUser');
  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    registerNewUser(inputEmail.value, inputPass.value)
      .then((ok) => {
        if (ok) {
          navigateTo('/muro');
        }
      }).catch((error) => {
        document.getElementById('alerts-error').textContent = error;
      });
  });

  buttonGoogle.className = 'register';
  buttonGoogle.setAttribute('id', 'buttonRegisterGoogle');
  textButtonGoogle.textContent = 'Registrarse con google';
  textButtonGoogle.className = 'title-google';

  buttonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    registerGoogle(provider);
  });

  imgGoogle.src = '../img/001-google.png';
  imgGoogle.alt = 'Logo Javascript';
  imgGoogle.className = 'imgGoogle';
  buttonGoogle.append(imgGoogle, textButtonGoogle);
  buttonReturn.textContent = 'Regresar';
  buttonReturn.setAttribute('id', 'buttomReturn');
  buttonReturn.className = 'register';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  form.append(inputEmail, inputPass, alerts);
  section.append(title, form, buttonRegister, buttonGoogle, buttonReturn);

  return section;
};

export { newUser };
