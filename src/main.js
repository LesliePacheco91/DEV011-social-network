// <------------------------ Importación de funciones para mostrar -------------------------------->

// home y login van sin llaves porque se exportan por default
import { home } from './templates/home.js';
import { login } from './templates/login.js';
// newUser y muro van con llaves porque se usan en más de una hoja
import { newUser } from './templates/newUser.js';
import { muro } from './templates/muro.js';

// <---------------------------------- Rutas de los módulos -------------------------------------->

const routes = [
  { path: '/', component: home }, // indica que es ruta por defencto
  { path: '/login', component: login },
  { path: '/newUser', component: newUser },
  { path: '/muro', component: muro },
];

// <-------------------------------- Declaración de Variables ------------------------------------>

// Variable para la ruta inicial
const defaultRoute = '/';
// Div en donde se muestra el contenido
const root = document.getElementById('root');

// <------------------------ Función de navegación entre las páginas ---------------------------->

// El hash es un argumento que se invoca para cambiar de ruta
function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);
  // route.component es la funcion que se encuentra en la ruta llamada.
  if (route && route.component) {
    // window.history.pushState se usa para actualizar la URL de la página sin recargarla
    window.history.pushState(
      {},
      route.path,
      // route.path nombre de la ruta
      window.location.origin + route.path,
    );
    if (root.firstChild) {
      // removeChild limpia el contenido actual antes de agregar el nuevo de la nueva ruta.
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}
// window.onpopstate cuando se navega hacia atrás o hacia adelante llama a la función navigateTo.
window.onpopstate = () => {
  navigateTo(window.location.pathname);
};
// window.location.pathname devuelve la ruta actual de la URL en la que se encuentra el usuario
// Si esta ruta existe, se pasa como argumento a la función navigateTo
// Si window.location.pathname es una cadena vacía o no existe
// se utiliza el valor de defaultRoute como ruta por defecto
// y se pasa como argumento a la función navigateTo.
navigateTo(window.location.pathname || defaultRoute);
