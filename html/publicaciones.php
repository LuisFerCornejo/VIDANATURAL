<?php
include 'conexion.php';

// Obtener las publicaciones desde la base de datos
$query = "SELECT * FROM publicaciones";
$result = $conn->query($query);

// Generar la estructura HTML para mostrar las publicaciones
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    echo '<div class="publicacion">';
    echo '<h2>' . $row['titulo'] . '</h2>';
    echo '<p>' . $row['descripcion'] . '</p>';
    echo '<p>' . $row['tratamiento'] . '</p>';
    echo '</div>';
  }
} else {
  echo 'No se encontraron publicaciones';
}

// Cerrar la conexión
$conn->close();
?>
