import { GoogleAuthProvider } from 'firebase/auth';
import { registerNewUser, registerGoogle } from '../lib/auth';

const newUser = (navigateTo) => {
// <------------------------- Creación de elementos HTML --------------------------------->

  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonRegister = document.createElement('button');
  const alerts = document.createElement('span');
  const buttonGoogle = document.createElement('button');
  const imgGoogle = document.createElement('img');
  const textButtonGoogle = document.createElement('h3');
  const buttons = document.createElement('section');
  // const inputName = document.createElement('input');
  // const imgRegister = document.createElement('img');
  /* const inputCountry = document.createElement('select');
  const option0 = document.createElement('option');
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');
  const option3 = document.createElement('option');
  */

  // <---- Sección que contiene toda la información de los campos de registro "newUser" ---->

  section.setAttribute('id', 'contendSection');

  // <------------------------- Título de la página "newUser" ------------------------------>

  title.textContent = 'Registro';
  title.className = 'tituloRegistro titulo';

  // <------ Campo para ingresar nombre para el registro con correo electrónico ------------>

  // inputName.placeholder = 'Ingresa tu nombre';
  // inputName.type = 'text';
  // inputName.className = 'form-data';

  // <--------------- Campo para registrarse con correo electrónico ------------------------>

  inputEmail.placeholder = 'Ingresa tu correo electrónico';
  inputEmail.type = 'email';
  inputEmail.name = 'email';
  inputEmail.required = 'true';
  inputEmail.className = 'form-data';
  inputEmail.setAttribute('id', 'idEmail');

  // <------------------- Campo para ingresar contraseña de registro ----------------------->

  inputPass.placeholder = 'Ingresa tu contraseña';
  inputPass.type = 'password';
  inputPass.name = 'password';
  inputPass.required = 'true';
  inputPass.className = 'form-data';
  inputPass.setAttribute('id', 'form-pass');

  // <------------------- Campo para mostrar los avisos de alerta -------------------------->

  alerts.setAttribute('id', 'alerts-error');

  // <------ Campo para ingresar el pais para el registro con correo electrónico ----------->

  // inputCountry.name = 'pais';
  // inputCountry.required = 'true';
  // inputCountry.className = 'form-data-select';

  // option0.text = 'Pais';
  // option0.value = '';

  // option1.text = 'México';
  // option1.value = 'México';

  // option2.text = 'Colombia';
  // option2.value = 'Colombia';

  // option3.text = 'Chile';
  // option3.value = 'Chile';

  // inputCountry.add(option0);
  // inputCountry.add(option1);
  // inputCountry.add(option2);
  // inputCountry.add(option3);

  // <-------------------------------- Sección de botones ---------------------------------->

  buttons.className = 'botones';

  // <------ Botón para enviar los datos y registrarse con correo electrónico -------------->

  buttonRegister.textContent = 'Registrar';
  buttonRegister.className = 'register';
  buttonRegister.setAttribute('id', 'buttonUser');
  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('email', inputEmail.value);
    registerNewUser(inputEmail.value, inputPass.value)
      .then((ok) => {
        if (ok) {
          localStorage.setItem('user', ok);
          navigateTo('/muro');
        }
      }).catch((error) => {
        document.getElementById('alerts-error').textContent = error;
      });
  });

  // <-------------- Botón para registrarse con una cuenta de Google ----------------------->

  buttonGoogle.className = 'registergoogle';
  buttonGoogle.setAttribute('id', 'buttonRegisterGoogle');
  textButtonGoogle.textContent = 'Registrarse con';
  textButtonGoogle.className = 'title-google';

  buttonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    const resultado = registerGoogle(provider);
    resultado.then((user) => {
      if (user) {
        localStorage.setItem('user', user);
        navigateTo('/muro');
      }
    }).catch((errorCode) => {
      document.getElementById('alerts-error').textContent = errorCode;
    });
  });

  imgGoogle.src = '../img/001-google.png';
  imgGoogle.alt = 'Logo Javascript';
  imgGoogle.className = 'imgGoogle';
  // buttonGoogle.append(imgGoogle, textButtonGoogle);

  // <-------------------- Botón para regresar a la página "home" -------------------------->

  buttonReturn.textContent = 'Iniciar sesión';
  buttonReturn.setAttribute('id', 'buttonReturn');
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  // <---------------- Orden de la estructura de los elementos HTML ------------------------>

  buttonGoogle.append(imgGoogle);
  form.append(inputEmail, inputPass, alerts);
  buttons.append(buttonRegister, textButtonGoogle, buttonGoogle, buttonReturn);
  section.append(title, form, buttons);

  return section;
};
export { newUser };
