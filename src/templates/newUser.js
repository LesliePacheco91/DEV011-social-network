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
  buttonRegister.setAttribute('id', 'registerUser');
  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    const answer = document.querySelector('#alerts-error');
    registerNewUser(inputEmail.value, inputPass.value)
      .then(() => {
        navigateTo('/muro');
      }).catch((no) => {
        if (no === 'auth/email-already-in-use') {
          answer.innerHTML = 'Ya existe este email';
        } else if (no === 'auth/weak-password') {
          answer.innerHTML = 'Contraseña invalida minino 6 caracteres';
        } else if (no) {
          answer.innerHTML = 'Error de registro intenta de nuevo';
        }
      });
  });

  buttonGoogle.className = 'register';
  buttonGoogle.setAttribute('id', 'registerGoogle');
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

  form.append(inputEmail, inputPass, alerts, buttonRegister);
  section.append(title, form, buttonGoogle, buttonReturn);

  return section;
};

export { newUser };
