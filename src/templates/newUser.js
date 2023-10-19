import { registerNewUser } from "../lib/auth";



function newUser(navigateTo) {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const buttonReturn = document.createElement('button');
    const form = document.createElement('form');
    const inputName = document.createElement('input');
    const inputEmail = document.createElement('input');
    const inputPass = document.createElement('input');
    const buttonRegister = document.createElement('input');
    const inputCountry = document.createElement('select');
    const option0 = document.createElement('option');
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    const option3 = document.createElement('option');
    const buttonGoogle = document.createElement('button');

    title.textContent = 'Registro';
    title.className = 'titulo';

    inputName.placeholder = 'Ingresa tu nombre';
    inputName.type = 'text';
    inputName.className = 'form-data';
    inputName.required = 'true';

    inputEmail.placeholder = 'Ingresa tu correo';
    inputEmail.type = 'email';
    inputEmail.required = 'true';
    inputEmail.className = 'form-data';
 
    inputPass.placeholder = 'Ingresa tu contraseña';
    inputPass.type = 'password';
    inputPass.required = 'true';
    inputPass.className = 'form-data';

    inputCountry.name = 'pais';
    inputCountry.required = 'true';
    inputCountry.className = 'form-data-select';
    // opciones
    option0.text = 'Pais';
    option0.value = '';

    option1.text = 'México';
    option1.value = 'México';

    option2.text = 'Colombia';
    option2.value = 'Colombia';

    option3.text = 'Peru';
    option3.value = 'Peru';

    inputCountry.add(option0);
    inputCountry.add(option1);
    inputCountry.add(option2);
    inputCountry.add(option3);

    buttonRegister.type = 'submit';
    buttonRegister.value = 'Registrar';
    buttonRegister.className = 'register';

    buttonRegister.addEventListener('click', () => {
      registerNewUser(inputEmail.value, inputPass.value)
    });
    
    buttonGoogle.addEventListener('click', () => {
      registerGoogle( )
    });

    buttonReturn.textContent = 'Return to home';
    buttonReturn.addEventListener('click', () => {
      navigateTo('/');
    });

    form.append(inputName, inputEmail, inputPass, inputCountry, buttonRegister, buttonGoogle);
    section.append(title, form, buttonReturn);

    return section;
  }

  export default newUser;