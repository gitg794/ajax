<?php

$nombre     = $_POST['usuario'];
$contraseña = $_POST['contraseña'];
$opc        = $_POST['opc'];

 $server = 'localhost';
 $user   = 'root';
 $pass   = '';
 $db     = 'consultas';

// $conexion = (mysqli_connect($server,$user,$pass));
// mysqli_select_db($conexion, $db) or die ('no se encuentra la db');
// print ('todo esta bien');
$conexion = new mysqli($server,$user,$pass,$db); //conexion
//consulta login
switch($opc){
    case 1:
        
        $sql      = "SELECT * FROM usuario WHERE nombre = '$nombre'"; //codigo sql

        $consulta = mysqli_query($conexion, $sql) or die (mysqli_error()); //hacemos la peticion
        // echo true;

        if($fila = mysqli_fetch_array($consulta)){
            if($contraseña == $fila['documento']){
                echo true;
            }else{
                echo false;
            }
        }
        break;

    case 2:
        $direccion  = $_POST['dereccion'];
        $cel        = $_POST['cel'];
        $f_n        = $_POST['f_n'];
        
        $sql = "INSERT INTO usuario (nombre, documento, tel, direccion, fecha_nac)VALUE ('$nombre', '$contraseña', '$cel','$direccion', '$f_n')";
        $consulta = mysqli_query($conexion, $sql) or die (mysqli_error());
        echo true;

}



// if(mysqli_fetch_array($consulta) > 0){
//     echo true;
// }else{
//     print false;
// }

// if($conexion -> connect_error){
//     die ('la conexion fallo');
// }else{
//     echo 'conexion exitosa';
// }




// $user = $_POST['usuario'];

// if($user == 'ana'){
//     echo true;
// }else{
//     echo false;
// }
?>

