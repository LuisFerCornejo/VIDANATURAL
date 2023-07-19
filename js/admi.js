// Obtener las publicaciones
const publicaciones = obtenerPublicaciones();

// Mostrar las publicaciones en el contenedor correspondiente
const publicacionesContainer = document.getElementById('publicacionesContainer');

if (publicaciones.length === 0) {
  publicacionesContainer.innerHTML = '<p>No hay publicaciones disponibles.</p>';
} else {
  publicaciones.forEach((publicacion) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${publicacion.titulo}</h3>
      <p>${publicacion.descripcion}</p>
      <p>Tratamiento: ${publicacion.tratamiento}</p>
    `;
    publicacionesContainer.appendChild(div);
  });
}

// Función para obtener las publicaciones
function obtenerPublicaciones() {
  // Obtener las publicaciones almacenadas en localStorage
  const publicacionesJSON = localStorage.getItem('publicaciones');

  // Si no hay publicaciones almacenadas, devuelve un array vacío
  if (!publicacionesJSON) {
    return [];
  }

  // Parsear el JSON y devolver las publicaciones como un array
  return JSON.parse(publicacionesJSON);
}

// Función para guardar la publicación
function guardarPublicacion(publicacion) {
  // Obtener las publicaciones existentes
  const publicaciones = obtenerPublicaciones();

  // Agregar la nueva publicación al array
  publicaciones.push(publicacion);

  // Guardar las publicaciones actualizadas en localStorage
  localStorage.setItem('publicaciones', JSON.stringify(publicaciones));
}

// Obtener el formulario de publicación
const publicacionForm = document.getElementById('publicacionForm');

// Agregar un listener al evento submit del formulario
publicacionForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtener los valores del formulario
  const tituloInput = document.getElementById('tituloInput').value;
  const descripcionInput = document.getElementById('descripcionInput').value;
  const tratamientoInput = document.getElementById('tratamientoInput').value;

  // Crear una nueva publicación
  const nuevaPublicacion = {
    titulo: tituloInput,
    descripcion: descripcionInput,
    tratamiento: tratamientoInput
  };

  // Guardar la publicación
  guardarPublicacion(nuevaPublicacion);

  // Limpiar el formulario
  publicacionForm.reset();

  // Redireccionar a la página donde se muestran las publicaciones
  window.location.href = 'publicaciones.html';
});
