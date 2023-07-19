<?php
// Datos de conexión a la base de datos
$servername = "212.1.208.199";
$username = "u312507976_db16";
$password = "5Bg323-1";
$dbname = "u312507976_db16";

// Obtener los datos del formulario de inicio de sesión
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

// Verificar si el usuario es el administrador
if ($usuario === 'administrador' && $contrasena === 'admin123') {
    // Inicio de sesión exitoso como administrador
    echo 'Inicio de sesión exitoso como administrador';
    exit;
}

// Crear la conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Consulta SQL para verificar las credenciales de inicio de sesión
$sql = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND contrasena = '$contrasena'";

$result = $conn->query($sql);

if ($result->num_rows == 1) {
    // Inicio de sesión exitoso como usuario registrado
    echo 'Inicio de sesión exitoso como usuario registrado';
} else {
    // Credenciales de inicio de sesión inválidas
    echo 'Usuario o contraseña incorrectos';
}

// Cerrar la conexión a la base de datos
$conn->close();
?>
