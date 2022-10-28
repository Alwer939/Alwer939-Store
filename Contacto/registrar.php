<?php

include 'cn.php';

// Declaracion de las variables
$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$correo = $_POST["correo"];
$usuario = $_POST["usuario"];
$clave = $_POST["clave"];
$telefono = $_POST["telefono"];
$comentario = $_POST["comentario"];

// Consultas para insertar datos desde el formulario hasta la base de datos

$insertar = "INSERT INTO usuario(nombre, apellidos, correo, usuario, clave, telefono,comentario)
 VALUES ('$nombre','$apellidos','$correo','$usuario','$clave','$telefono','$comentario')";

$verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuario WHERE usuario= '$usuario'");
if(mysqli_num_rows($verificar_usuario) > 0){
    echo '<script languaje="javascript">
    alert("El usuario ya existe, si eres tú, intenta iniciar sesión"); 
    window.history.go(-1);
    </script>';
    exit;
}
$verificar_correo = mysqli_query($conexion, "SELECT * FROM usuario WHERE correo='$correo'");
if(mysqli_num_rows($verificar_correo) > 0){
    echo '<script languaje="javascript">
    alert("El correo ya existe, si eres tú, intenta iniciar sesión");
    window.history.go(-1);
    </script>';
    exit;
}

// Verificar que no haya campos vacios
if(isset($_POST['nombre'])){         //      isset solo funciona con name, no con id en html
    if(empty($nombre)){
        echo '<script>
        window.history.go(-1);
        </script>';
        exit;
    }
}

if(isset($_POST['apellidos'])){         //      isset solo funciona con name, no con id en html
    if(empty($apellidos)){
        echo '<script>
        window.history.go(-1);
        </script>';
        exit;
    }
}

if(isset($_POST['correo'])){         //      isset solo funciona con name, no con id en html
    if(empty($correo)){
        echo '<script>
        window.history.go(-1);
        </script>';
        exit;
    }
}

if(isset($_POST['usuario'])){         //      isset solo funciona con name, no con id en html
    if(empty($usuario)){
        echo '<script>
        window.history.go(-1);
        </script>';
        exit;
    }
}

if(isset($_POST['clave'])){         //      isset solo funciona con name, no con id en html
    if(empty($clave)){
        echo '<script>
        window.history.go(-1);
        </script>';
        exit;
    }
}

if(isset($_POST['telefono'])){         //      isset solo funciona con name, no con id en html
    if(empty($telefono)){
        echo '<script>
        window.history.go(-1);
        </script>';
        exit;
    }
}

if(isset($_POST['nombre'])){         //      isset solo funciona con name, no con id en html
    if(strlen($nombre)>10){
        echo "<script lenguaje='Javascript'>
        alert('El nombre es demasiado largo, ingresa uno mas corto');
        window.history.go(-1);
        </script>";
        exit;
    }
}

if(isset($_POST['correo'])){         //      isset solo funciona con name, no con id en html
    if(strlen($correo)>30){
        echo "<script lenguaje='Javascript'>
        alert('El correo es demasiado largo, ingresa uno mas corto');
        window.history.go(-1);
        </script>";
        exit;
    }
}

if(isset($_POST['usuario'])){         //      isset solo funciona con name, no con id en html
    if(strlen($usuario)>10){
        echo "<script lenguaje='Javascript'>
        alert('El usuario es demasiado largo, ingresa uno mas corto');
        window.history.go(-1);
        </script>";
        exit;
    }
}

if(isset($_POST['clave'])){         //      isset solo funciona con name, no con id en html
    if(strlen($clave)>10){
        echo "<script lenguaje='Javascript'>
        alert('La clave es demasiada largo, ingresa una mas corta');
        window.history.go(-1);
        </script>";
        exit;
    }
}

if(isset($_POST['telefono'])){         //      isset solo funciona con name, no con id en html
    if(strlen($telefono)>10){
        echo "<script lenguaje='Javascript'>
        alert('El telefono es demasiado largo, ingresa uno mas corto');
        window.history.go(-1);
        </script>";
        exit;
    }
}


$resultado = mysqli_query ($conexion, $insertar);
if($resultado) {
    echo '<script>alert("usuario registrado exitosamente");</script>'; 
} 
else if(!$resultado){
    echo 'error al registrar el usuario';
}

// Cerrar conexion a la base de datos
mysqli_close($conexion);
header ("Location:../index.html");
die();