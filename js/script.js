// Seleccionando elementos HTML y asignándoles eventos
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

// Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");
const form = document.querySelector('form');
const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');

// Función para detectar el ancho de la ventana y hacer cambios en los elementos
function anchoPage() {
  // Si el ancho de la ventana es mayor a 850px, muestra ambas cajas traseras
  if (window.innerWidth > 850) {
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "block";
  } else {
    // Si el ancho de la ventana es menor a 850px, muestra solo la caja trasera de registro y oculta la de inicio de sesión
    caja_trasera_register.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
  }
}

// Ejecutando la función anchoPage para hacer cambios en la página en función del tamaño de la ventana
anchoPage();

// Función para mostrar el formulario de inicio de sesión y ocultar el de registro
function iniciarSesion() {
  if (window.innerWidth > 850) {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "10px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
  } else {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "none";
  }
}

// Función para mostrar el formulario de registro y ocultar el de inicio de sesión
function register() {
  if (window.innerWidth > 850) {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
  }
}

// Función para validar el inicio de sesión
function validarInicioSesion(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de usuario y contraseña
  const usuarioValue = usuario.value;
  const contraseñaValue = contraseña.value;

  // Validar las credenciales del usuario
  if (usuarioValue === "cliente" && contraseñaValue === "cliente123") {
    // Redireccionar al usuario normal a la página de usuario
    window.location.href = "Inicio.html";
  } else if (usuarioValue === "administrador" && contraseñaValue === "admin123") {
    // Redireccionar al administrador a la página de administrador
    window.location.href = "admi.html";
  } else {
    alert("Credenciales inválidas. Intente nuevamente.");
  }
}

// Agregar el controlador de eventos al formulario de inicio de sesión
const loginForm = document.querySelector(".formulario__login");
loginForm.addEventListener("submit", validarInicioSesion);
// Seleccionando elementos HTML y asignándoles eventos
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

// Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");
const form = document.querySelector('form');
const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');

// Función para detectar el ancho de la ventana y hacer cambios en los elementos
function anchoPage() {
  // Si el ancho de la ventana es mayor a 850px, muestra ambas cajas traseras
  if (window.innerWidth > 850) {
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "block";
  } else {
    // Si el ancho de la ventana es menor a 850px, muestra solo la caja trasera de registro y oculta la de inicio de sesión
    caja_trasera_register.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
  }
}

// Ejecutando la función anchoPage para hacer cambios en la página en función del tamaño de la ventana
anchoPage();

// Función para mostrar el formulario de inicio de sesión y ocultar el de registro
function iniciarSesion() {
  if (window.innerWidth > 850) {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "10px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
  } else {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "none";
  }
}

// Función para mostrar el formulario de registro y ocultar el de inicio de sesión
function register() {
  if (window.innerWidth > 850) {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
  }
}

// Función para validar el inicio de sesión
function validarInicioSesion(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de usuario y contraseña
  const usuarioValue = usuario.value;
  const contraseñaValue = contraseña.value;

  // Validar las credenciales del usuario
  if (usuarioValue === "cliente" && contraseñaValue === "cliente123") {
    // Redireccionar al usuario normal a la página de usuario
    window.location.href = "Inicio.html";
  } else if (usuarioValue === "administrador" && contraseñaValue === "admin123") {
    // Redireccionar al administrador a la página de administrador
    window.location.href = "admi.html";
  } else {
    alert("Credenciales inválidas. Intente nuevamente.");
  }
}

// Agregar el controlador de eventos al formulario de inicio de sesión
const loginForm = document.querySelector(".formulario__login");
loginForm.addEventListener("submit", validarInicioSesion);
// Seleccionando elementos HTML y asignándoles eventos
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

// Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");
const form = document.querySelector('form');
const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');

// Función para detectar el ancho de la ventana y hacer cambios en los elementos
function anchoPage() {
  // Si el ancho de la ventana es mayor a 850px, muestra ambas cajas traseras
  if (window.innerWidth > 850) {
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "block";
  } else {
    // Si el ancho de la ventana es menor a 850px, muestra solo la caja trasera de registro y oculta la de inicio de sesión
    caja_trasera_register.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
  }
}

// Ejecutando la función anchoPage para hacer cambios en la página en función del tamaño de la ventana
anchoPage();

// Función para mostrar el formulario de inicio de sesión y ocultar el de registro
function iniciarSesion() {
  if (window.innerWidth > 850) {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "10px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
  } else {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "none";
  }
}

// Función para mostrar el formulario de registro y ocultar el de inicio de sesión
function register() {
  if (window.innerWidth > 850) {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
  }
}

// Función para validar el inicio de sesión
function validarInicioSesion(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de usuario y contraseña
  const usuarioValue = usuario.value;
  const contraseñaValue = contraseña.value;

  // Validar las credenciales del usuario
  if (usuarioValue === "cliente" && contraseñaValue === "cliente123") {
    // Redireccionar al usuario normal a la página de usuario
    window.location.href = "Inicio.html";
  } else if (usuarioValue === "administrador" && contraseñaValue === "admin123") {
    // Redireccionar al administrador a la página de administrador
    window.location.href = "admi.html";
  } else {
    alert("Credenciales inválidas. Intente nuevamente.");
  }
}

// Agregar el controlador de eventos al formulario de inicio de sesión
const loginForm = document.querySelector(".formulario__login");
loginForm.addEventListener("submit", validarInicioSesion);
