<?php
$servername = "212.1.208.199";
$username = "u312507976_db16";
$password = "5Bg323-1";
$dbname = "u312507976_db16";

// Establecer la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener los datos del formulario
$titulo = $_POST['titulo'];
$descripcion = $_POST['descripcion'];
$tratamiento = $_POST['tratamiento'];

// Insertar la publicación en la base de datos
$sql = "INSERT INTO publicaciones (titulo, descripcion, tratamiento) VALUES ('$titulo', '$descripcion', '$tratamiento')";

if ($conn->query($sql) === TRUE) {
    echo "Publicación guardada exitosamente.";
} else {
    echo "Error al guardar la publicación: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
