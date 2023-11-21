# Proyecto [Social Network - GastroTour]() :plate_with_cutlery: :earth_americas:	:airplane:		
 > *Para acceder a la página web haz clic en el nombre del proyecto ⇑*

## Desarrolladoras 

### Leslie Pacheco 

<a href="https://github.com/LesliePacheco91" target="_blank" rel="noreferrer"> 
<img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg" alt="github" width="40" height="40"/> </a> 

### Maria José Valdebenito 

<a href="https://github.com/Kotte91" target="_blank" rel="noreferrer"> 
<img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg" alt="github" width="40" height="40"/> </a> 

### Tatiana Cifuentes 

<!-- <img class="foto" src="https://avatars.githubusercontent.com/u/113222501?v=4" alt="fotot" width="40" height="40"/> -->
<a href="https://github.com/taciga30" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg" alt="github" width="40" height="40"/> </a>


## Índice

* [1. Introducción](#1-introducción)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Funcionalidades](#3-funcionalidades)
* [4. Prototipado](#4-prototipado)
* [5. Pruebas unitarias](#5-pruebas-unitarias)
* [6. Tecnologías aplicadas](#6-tecnologías-aplicadas)

***
## 1. Introducción

Como tercer proyecto dentro del Bootcamp de ⪡Laboratoria⪢ denominado "Social Network" el cuál es trabajado en triadas, se debe crear una aplicación simulando una red social de un tema libre. Después de reunirnos en triadas planteamos varias opciones y finalmente tomamos la decisión de trabajar una red social de reseñas de lugares de oferta gastronómica en latinoamerica.

El objetivo de este proyecto es que de acuerdo con la información recolectada por medio de encuestas se desarrolle la aplicación de una red social satisfaciendo las necesidades identificadas de los usuarios para encontrar recomendaciones basadas en reseñas de platos de diferentes restaurantes donde se informa la calificación del lugar, la limpieza, el precio y tipo de comida ofrecida.

[⇧ Volver al Índice](#índice)

## 2. Resumen del proyecto

Se elaboró una aplicación web como red social para visualizar reseñas publicadas por diferentes usuarios después de que se haya hecho su respectivo registro e inicio de sesión en la aplicación. 

Como entrega final la aplicación muestra una página de inicio donde nos podemos dirigir al inicio de sesión o al registro, dentro de estos módulos tenemos la opción de iniciar sesión o registrarse por medio de correo electrónico y contraseña o por medio  una cuenta de Google, una vez elegida la opción más acorde al usuario redirecciona al módulo del muro; donde se encuentran la lista de publicaciones con cada una de las reseñas.

[⇧ Volver al Índice](#índice)

## 3. Funcionalidades

* Por medio de SPA (Single Page Aplication) se estructura la navegación dentro de los módulos desarrollados sin actualizar el navegador.
* Se crean los módulos de home, registro de usuario, inicio de sesión, y muro.
* Se hace uso de Firebase como nuestra base de datos para almacenar la información de los usuarios registrados y las reseñas.
* El módulo de home nos permite dar una bienvenida e indicar a los usuarios las opciones de iniciar sesión o registrarse.
* El módulo de registro cuenta con la función de crear un usuario mediante un formulario donde debe ingresar correo electrónico y contraseña, o por medio de una cuenta de Google.
* El módulo de inicio de sesión podrá loguearse una vez esté registrado, mediante un formulario donde debe ingresar correo electrónico y contraseña válidos, o por medio de una cuenta de Google.
* El módulo de muro muestra las publicaciones con las reseñas realizadas por los usuarios.
* Se valida que el usuario esté logueado para mostrar el módulo del muro, en caso contrario retorna al módulo de inicio de sesión.

### 3.1  Funciones dentro del módulo muro

* Listado de reseñas publicadas de forma descendente.
* Crear publicación de reseña.
* Al crear la reseña se puede ingresar imagen, nombre del restaurante, ubicación del restaurante, calificación general, calificación de limpieza, rango de precio, y tipo de comida.
* Se puede editar o eliminar la reseña solamente por el usuario que la realizó.
* En cada reseña se puede dar o quitar un like por ususario.
* Se puede cerrar sesión retornando al módulo de inicio de sesión.

[⇧ Volver al Índice](#índice)

## 4. Prototipado

Al identificar las necesidades de nuestros usuarios y definir los requisitos mínimos de aceptación de la aplicación web se procede a realizar el prototipado.

### Diseño de la Interfaz de Usuario

<hr><hr>

Prototipo de baja fidelidad Vs Producto entregado

:pencil2: Prototipo de baja fidelidad

![Pb](/src/img/Prototipo.png)

:triangular_flag_on_post: Producto Entregado

![Home](/src/img/Home.png)
![NewUser](/src/img/NewUser.png)
![Login](/src/img/Login.png)
![Muro1](/src/img/Muro1.png)
![Muro2](/src/img/Muro2.png)
![Modal](/src/img/Modal.png)

:checkered_flag: Vista de Escritorio 

![VistaEscritorio](/src/img/VistaEscritorio.png)

[⇧ Volver al Índice](#índice)

## 5. Pruebas unitarias

Se desarrollaron los test unitarios para las funciones creadas.

![Test](/src/img/Test.png)

[⇧ Volver al Índice](#índice)

## 6. Tecnologías aplicadas

<img class="html5" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> <img class="css3" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> <img class="javascript" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> <img class="miro" src="https://www.icesi.edu.co/servicios/wp-content/uploads/2020/08/Miro-Icono-768x768.png" alt="miro" width="40" height="40"/> <img class="git" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> <img class="github" src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg" alt="github" width="40" height="40"/> <img class="Jest" src="https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png" alt="Jest" width="40" height="40"/>
<img class="Nodejs" src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png" alt="Nodejs" width="40" height="40"/>
<img class="firebase" src="https://cdn.icon-icons.com/icons2/691/PNG/512/google_firebase_icon-icons.com_61474.png" alt="firebase" width="40" height="40"/>

[⇧ Volver al Índice](#índice)
