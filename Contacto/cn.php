<?php
//Crear una variable con los siguientes parametros
//servidor, usuario, contraseña, nombre_baseDeDatos
$conexion = mysqli_connect("localhost:3307", "root", "", "registro_usuarios");
if(!$conexion){
    echo 'Error en la conexion a la base de datos';
}
else{
    echo '<script>
    console.log("Conexion exitosa a la base de datos");
    </script>';
}