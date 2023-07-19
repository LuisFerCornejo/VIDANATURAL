<?php
// Datos de conexión a la base de datos
$servername = "212.1.208.199";
$username = "u312507976_db16";
$password = "5Bg323-1";
$dbname = "u312507976_db16";

// Obtener los datos del formulario de registro
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

// Crear la conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Insertar los datos en la tabla de usuarios
$sql = "INSERT INTO usuarios (nombre, correo, usuario, contrasena)
        VALUES ('$nombre', '$correo', '$usuario', '$contrasena')";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error al registrar: " . $conn->error;
}

// Cerrar la conexión a la base de datos
$conn->close();
?>
