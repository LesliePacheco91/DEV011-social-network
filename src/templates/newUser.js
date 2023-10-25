import { GoogleAuthProvider } from 'firebase/auth';
import { registerNewUser, registerGoogle } from '../lib/auth';

function newUser(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  // const inputName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonRegister = document.createElement('input');
  const alerts = document.createElement('span');
  // const imgRegister = document.createElement('img');
  /* const inputCountry = document.createElement('select');
  const option0 = document.createElement('option');
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');
  const option3 = document.createElement('option');
  */
  const buttonGoogle = document.createElement('button');
  const imgGoogle = document.createElement('img');
  const textButtonGoogle = document.createElement('span');

  title.textContent = 'Registro';
  title.className = 'titulo';
  /* inputName.placeholder = 'Ingresa tu nombre';
  inputName.type = 'text';
  inputName.className = 'form-data'; */

  inputEmail.placeholder = 'Ingresa tu correo';
  inputEmail.type = 'email';
  inputEmail.name = 'email';
  inputEmail.required = 'true';
  inputEmail.className = 'form-data';

  inputPass.placeholder = 'Ingresa tu contraseña';
  inputPass.type = 'password';
  inputPass.name = 'password';
  inputPass.required = 'true';
  inputPass.className = 'form-data';

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

  buttonRegister.type = 'submit';
  buttonRegister.value = 'Registrar';
  buttonRegister.className = 'register';

  buttonRegister.addEventListener('click', async (e) => {
    e.preventDefault();

    registerNewUser(inputEmail.value, inputPass.value)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        navigateTo('/muro');

      // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/email-already-in-use') {
          document.querySelector('#alerts-error').innerHTML = 'Ya existe este usuario';
        } else if (errorCode === 'auth/weak-password') {
          document.querySelector('#alerts-error').innerHTML = 'Contraseña invalida minino 6 caracteres';
        }
      // ..
      });
  });

  buttonGoogle.className = 'register';
  textButtonGoogle.textContent = 'Registrarse con google';
  textButtonGoogle.className = 'title-google';

  buttonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    registerGoogle(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      navigateTo('/muro');
      // ...
    })
      .catch((error) => {
      // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      });
  });

  imgGoogle.src = '../img/001-google.png';
  imgGoogle.alt = 'Logo Javascript';
  imgGoogle.className = 'imgGoogle';
  buttonGoogle.append(imgGoogle, textButtonGoogle);

  /* imgRegister.src = '../img/Nuevo_usuario.png';
  imgRegister.alt = 'Logo Registro';
  imgRegister.className = 'imgRegistro';
  */

  buttonReturn.textContent = 'Regresar';
  buttonReturn.className = 'register';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  form.append(inputEmail, inputPass, buttonRegister);
  section.append(title, form, buttonGoogle, buttonReturn);

  return section;
}
export default newUser;
