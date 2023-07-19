// Obtener las publicaciones (simulación)
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

// Función para obtener las publicaciones (simulación)
function obtenerPublicaciones() {
  // Aquí puedes implementar la lógica para obtener las publicaciones desde la base de datos o desde otro lugar
  // Por ahora, se devuelve un conjunto de publicaciones simuladas
  return [
    {
      titulo: 'Enfermedad 1',
      descripcion: 'Descripción de la enfermedad 1',
      tratamiento: 'Tratamiento para la enfermedad 1'
    },
    {
      titulo: 'Enfermedad 2',
      descripcion: 'Descripción de la enfermedad 2',
      tratamiento: 'Tratamiento para la enfermedad 2'
    },
    {
      titulo: 'Enfermedad 3',
      descripcion: 'Descripción de la enfermedad 3',
      tratamiento: 'Tratamiento para la enfermedad 3'
    }
  ];
}
// Obtener las publicaciones (simulación)
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

// Función para obtener las publicaciones (simulación)
function obtenerPublicaciones() {
  // Aquí puedes implementar la lógica para obtener las publicaciones desde la base de datos o desde otro lugar
  // Por ahora, se devuelve un conjunto de publicaciones simuladas
  return [
    {
      titulo: 'Enfermedad 1',
      descripcion: 'Descripción de la enfermedad 1',
      tratamiento: 'Tratamiento para la enfermedad 1'
    },
    {
      titulo: 'Enfermedad 2',
      descripcion: 'Descripción de la enfermedad 2',
      tratamiento: 'Tratamiento para la enfermedad 2'
    },
    {
      titulo: 'Enfermedad 3',
      descripcion: 'Descripción de la enfermedad 3',
      tratamiento: 'Tratamiento para la enfermedad 3'
    }
  ];
}
// Obtener las publicaciones (simulación)
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

// Función para obtener las publicaciones (simulación)
function obtenerPublicaciones() {
  // Aquí puedes implementar la lógica para obtener las publicaciones desde la base de datos o desde otro lugar
  // Por ahora, se devuelve un conjunto de publicaciones simuladas
  return [
    {
      titulo: 'Enfermedad 1',
      descripcion: 'Descripción de la enfermedad 1',
      tratamiento: 'Tratamiento para la enfermedad 1'
    },
    {
      titulo: 'Enfermedad 2',
      descripcion: 'Descripción de la enfermedad 2',
      tratamiento: 'Tratamiento para la enfermedad 2'
    },
    {
      titulo: 'Enfermedad 3',
      descripcion: 'Descripción de la enfermedad 3',
      tratamiento: 'Tratamiento para la enfermedad 3'
    }
  ];
}
