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

// Realizar la consulta
$sql = "SELECT * FROM publicaciones";
$result = $conn->query($sql);

// Verificar si se obtuvieron resultados
if ($result->num_rows > 0) {
    // Crear un arreglo para almacenar las publicaciones
    $publicaciones = array();

    // Recorrer los resultados y almacenar cada publicación en el arreglo
    while ($row = $result->fetch_assoc()) {
        $publicacion = array(
            'id' => $row['id'],
            'titulo' => $row['titulo'],
            'descripcion' => $row['descripcion'],
            'tratamiento' => $row['tratamiento']
        );
        $publicaciones[] = $publicacion;
    }

    // Imprimir el arreglo en formato JSON
    header('Content-Type: application/json');
    echo json_encode($publicaciones);
} else {
    echo "No se encontraron publicaciones.";
}

// Cerrar la conexión
$conn->close();
?>
