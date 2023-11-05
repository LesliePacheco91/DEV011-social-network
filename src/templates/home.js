function home(navigateTo) {
// <------------------------- Creación de elementos HTML --------------------------------->
  const imgfont = document.createElement('img');
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const button = document.createElement('button');
  const buttonNew = document.createElement('button');
  const imgSesion = document.createElement('img');
  const imgRegister = document.createElement('img');
  // -------------------imagen de fonfo --------
  imgfont.src = '../img/fontHome.jpg';
  imgfont.className = 'imageFond';
  // <-------------------------- Título de la página "home" -------------------------------->
  title.textContent = 'Bienvenido';
  title.className = 'titulo';
  // <---------------------- Botón para ir a la página "login" ----------------------------->
  button.textContent = 'Iniciar sesión';
  button.className = 'butom-home';
  imgSesion.src = '../img/usuario.png';
  imgSesion.className = 'img-login';
  button.addEventListener('click', () => {
    navigateTo('/login');
  });
  // <---------------------- Botón para ir a la página "newUser" --------------------------->
  buttonNew.textContent = 'Registrarse';
  buttonNew.className = 'butom-home';
  imgRegister.src = '../img/Nuevo_usuario.png';
  imgRegister.className = 'img-login';
  buttonNew.addEventListener('click', () => {
    navigateTo('/newUser');
  });
  // <---------------- Orden de la estructura de los elementos HTML ------------------------>
  button.append(imgSesion);
  buttonNew.appendChild(imgRegister);
  section.append(title, button, buttonNew);
  return section;
}
export default home;
