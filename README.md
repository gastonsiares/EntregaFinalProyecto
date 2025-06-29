Tienda online con funcionalidades completas de login, registro, carrito de compras y gestión de ventas.
## Stack:
Frontend: HTML5, CSS3, TailwindCSS, JavaScript
Backend: Node.js + Express.js
Base de Datos: MySQL
Herramientas: Postman, HeidiSQL, bcrypt, JSON Web Tokens (JWT)

El proyecto no fue desplegado en un hosting externo. Se ejecuta en entorno local: http://localhost:3000

## Funcionalidades:
Usuarios
Registro de usuarios con contraseña encriptada (bcrypt)
Login con generación de token JWT
Validación de token para rutas protegidas

Productos
Filtrado por categoría en la vista principal (home.html)
Agregado al carrito con persistencia en localStorage

Carrito
Vista detallada del carrito con modificación de cantidades
Total calculado automáticamente
Compra que genera una orden registrada en la base de datos

Ventas (Admin)
Acceso exclusivo a ventas.html si el usuario tiene rol admin
Visualización de todas las ventas realizadas, con detalles

## Base de Datos:
Archivo crear_tablas.sql: contiene la creación de las tablas usuarios, productos, ventas, detalle_ventas
Archivo productos.sql: contiene productos precargados

## Roadmap de Desarrollo
1- Diseño inicial del backend
2- Creación de rutas y controladores para login y registro
3- Implementación de protección con JWT
4- Desarrollo de vista principal con listado de productos
5- Integración de carrito de compras en localStorage
6- Registro de ventas en la base de datos
7- Vista de ventas para el administrador
8- Estilizado general con TailwindCSS
9- Documentación y video explicativo

## Enlace a google drive con el video.
https://drive.google.com/drive/folders/1_54pKYl7dbmpVpAvlshj0s6ZPMq6Dcdp?hl=es-419

## Algunas observaciones.
No se usó una API para cargar productos. Las imágenes se omiten o utilizan URLs de referencia, debido a problemas al obtenerlas de MercadoLibre.

Gaston Siares

