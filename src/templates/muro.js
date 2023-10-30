function muro(navigateTo) {
  // <------------------------- Creación de elementos HTML --------------------------------->

  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonLogout = document.createElement('button');

  // <------------------------- Título de la página "muro" --------------------------------->

  title.textContent = 'Muro';
  title.className = 'titulo';

  // <-------------------- Botón para cerrar sesión y regresar a la página "home" ----------->

  buttonLogout.textContent = 'Cerrar Sesión';
  buttonLogout.className = 'register';
  buttonLogout.addEventListener('click', () => {
    navigateTo('/');
  });

  // <---------------- Orden de la estructura de los elementos HTML ------------------------>

  section.append(title, buttonLogout);

  return section;
}

export { muro };
