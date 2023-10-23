function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const button = document.createElement('button');
  const buttonNew = document.createElement('button');
  const imgSesion = document.createElement('img');
  const imgRegister = document.createElement('img');

  button.textContent = 'Iniciar sesión';
  button.className = 'butom-home';
  buttonNew.textContent = 'Registrarse';
  buttonNew.className = 'butom-home';

  imgSesion.src = '../img/usuario.png';
  imgSesion.className = 'img-login';
  button.append(imgSesion);

  imgRegister.src = '../img/Nuevo_usuario.png';
  imgRegister.className = 'img-login';
  buttonNew.appendChild(imgRegister);

  title.textContent = 'Bienvenido';
  title.className = 'titulo';
  section.append(title, button, buttonNew);

  button.addEventListener('click', () => {
    navigateTo('/login');
  });

  buttonNew.addEventListener('click', () => {
    navigateTo('/newUser');
  });

  return section;
}

export default home;
