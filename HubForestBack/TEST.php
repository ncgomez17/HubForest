<?php

session_start();
$_SESSION['test'] = true;

include_once './Comun/config.php';
include_once './Comun/FuncionesGenerales.php';

define ('urlnoRest','http://193.147.87.202/julio/index.php');

// insertar id_rol 0, 1, 3

$resultadosTESTS = array();
/*
//prueba equipo
include './app/EQUIPO/EQUIPO_TEST.php';
$rest = EQUIPO_TEST();
guardar_test($resultadosTESTS, $rest);


//prueba FORMULARIO
include './app/FORMULARIO/FORMULARIO_TEST.php';
$rest = FORMULARIO_TEST();
guardar_test($resultadosTESTS, $rest);

//prueba RESERVA
include './app/RESERVA/RESERVA_TEST.php';
$rest = RESERVA_TEST();
guardar_test($resultadosTESTS, $rest);

//prueba RESERVA_FORMULARIO
include './app/RESERVA_FORMULARIO/RESERVA_FORMULARIO_TEST.php';
$rest = RESERVA_FORMULARIO_TEST();
guardar_test($resultadosTESTS, $rest);
*/

//prueba auth
include './app/AUTH/AUTH_TEST.php';
$rest = AUTH_TEST();
guardar_test($resultadosTESTS, $rest);

//prueba USUARIO
include './app/usuario/usuario_TEST.php';
$rest = usuario_TEST();
guardar_test($resultadosTESTS, $rest);

//prueba rol
include './app/rol/rol_TEST.php';
$rest = rol_TEST();
guardar_test($resultadosTESTS, $rest);

//prueba persona
include './app/persona/persona_TEST.php';
$rest = persona_TEST();
guardar_test($resultadosTESTS, $rest);



//prueba accion
include './app/accion/accion_TEST.php';
$rest = accion_TEST();
guardar_test($resultadosTESTS, $rest);

//prueba funcionalidad
include './app/funcionalidad/funcionalidad_TEST.php';
$rest = funcionalidad_TEST();
guardar_test($resultadosTESTS, $rest);

//prueba rolaccionfuncionalidad
include './app/rolaccionfuncionalidad/rolaccionfuncionalidad_TEST.php';
$res = rolaccionfuncionalidad_TEST();
guardar_test($resultadosTESTS, $res);

//prueba funcionalidad_accion
include './app/funcionalidad_accion/funcionalidad_accion_TEST.php';
$res = funcionalidad_accion_TEST();
guardar_test($resultadosTESTS, $res);

/*
//prueba LINEAS_RESERVA
include './app/LINEAS_RESERVA/LINEAS_RESERVA_TEST.php';
$rest = LINEAS_RESERVA_TEST();
guardar_test($resultadosTESTS, $rest);
*/

session_destroy();
//presentar resultados
presentarResultadosPruebas($resultadosTESTS);

// borrar de persona dni 11111111A

//header('Content-type: application/json');
//echo(json_encode($resultadosTESTS));


?>
