// import {myFunction} from './lib/index.js';

// file main.js
import home from './templates/home.js';
import login from './templates/login.js';
import newUser from './templates/newUser.js';

// rutas de los modulos
const routes = [
  { path: '/', component: home }, // indica que es ruta por defencto
  { path: '/login', component: login },
  { path: '/newUser', component: newUser },
];
// variable para iniciar la ruta inicial
const defaultRoute = '/';
// div en donde se muestra el contenido
const root = document.getElementById('root');

// que permir el proceso de navegación entre rutas
// el hashe es un argumento que se invoca para cambiar de ruta
// route.component es la funcion que se encuentra en la ruta llamada.
// route.path  // nombre de la ruta
function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,

    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
