<?php

include_once './Base/appServiceBase.php';

class funcionesesquema_SERVICE extends appServiceBase{

//interrogación a esquema de la bd
//@params
//controlador: funcionesesquema
//action: listatablas : devuelve lista de nombres de tablas o acceso_BD_KO
//action: estructuratabas, $_POST['tabla'] trae el nombre de la tabla : devuelve estructura tabla (show columns) o no_existe_tabla_KO

function listartablas(){

        include_once './Base/mapping.php';
        $query = "show tables";
        $mapping = new mapping('');
        $res = $mapping->lanzarqueryconresults($query);
        if (($res['ok'] == false)){
            $respuesta = array('ok' => false, 'code' => 'acceso_BD_KO', 'resource' => '');
            header('Content-type: application/json');
            echo(json_encode($respuesta));
            exit();
        }
        else{
            $respuesta = array('ok' => true, 'code' => 'lista_tablas_OK', 'resource' => $res['resource']);
            header('Content-type: application/json');
            echo(json_encode($respuesta));
            exit();
        }

}
    
function estructuratabla(){

    if (!(isset($_POST['tabla']))){
            $respuesta = array('ok' => false, 'code' => 'nombre_tabla_vacio_KO', 'resource' => '');
            header('Content-type: application/json');
            echo(json_encode($respuesta));
            exit();
        }

        $tabla = $_POST['tabla'];
        include_once './Base/mapping.php';
        $query = "show columns from ".$tabla;
        $mapping = new mapping('');
        $res = $mapping->lanzarqueryconresults($query);
        if (($res['ok'] == false)){
            $respuesta = array('ok' => false, 'code' => 'no_existe_tabla_KO', 'resource' => 'Nombre tabla : '.$tabla);
            header('Content-type: application/json');
            echo(json_encode($respuesta));
            exit();
        }
        else{
            $respuesta = array('ok' => true, 'code' => 'estructura_tabla_OK', 'resource' => $res['resource']);
            header('Content-type: application/json');
            echo(json_encode($respuesta));
            exit();
        }

    }



//funcion que comprueba si se puede conectar con el gestor en la bd indicada en DBCredencials.php para las bd de produccion y test

function Comprobar_si_existe_BD(){

	//Activamos todas las notificaciones de error posibles
	error_reporting (E_ALL);
	//Definimos el tratamiento de errores no controlados
	set_error_handler(function () 
	{
		throw new Exception("Error");
	});
	  
	try {
		$conn = new mysqli(host, user, pass, BD);
	} catch(Exception $e) { //capturamos un posible error
	
		$mensaje = 'No esta definida la BD o los usuarios'.$e->getMessage();
		$respuesta = array('ok' => false, 'code' => 'BD_not_defined_KO', 'resource' => $mensaje);
		header('Content-type: application/json');
		echo(json_encode($respuesta));
		//escribirLogInterno($respuesta['resource']);
		exit();

	}

	try {
		$conn = new mysqli(host, user, pass, BD_test);
	} catch(Exception $e) { //capturamos un posible error
	
		$mensaje = 'No esta definida la BD o los usuarios'.$e->getMessage();
		$respuesta = array('ok' => false, 'code' => 'BD_not_defined_KO', 'resource' => $mensaje);
		header('Content-type: application/json');
		echo(json_encode($respuesta));
		//escribirLogInterno($respuesta['resource']);
		exit();

	}

    $mensaje = 'Base de Datos y usuarios correctos'.BD;
	$respuesta = array('ok' => true, 'code' => 'BD_OK', 'resource' => $mensaje);
	header('Content-type: application/json');
	echo(json_encode($respuesta));
	exit();

	//Restablecemos el tratamiento de errores
	restore_error_handler();

}


function crearBDs(){

	$conn = new mysqli($_POST['localhost'],$_POST['root'], $_POST['pass'], '');

	if ($conn->select_db(BD_test)){ // si  existe la bd de test
	}
	else{
			// leemos el fichero de sql de la bd de test
		$query = '';

		$sqlScript = file('./bd/'.$_POST['bd'].'.sql');
		foreach ($sqlScript as $line) {
			
			$startWith = substr(trim($line), 0 ,2);
			$endWith = substr(trim($line), -1 ,1);
				
			if (empty($line) || $startWith == '--' || $startWith == '/*' || $startWith == '//') {
				continue;
			}
						
			$query = $query . $line;
			if ($endWith == ';') {
				mysqli_query($conn,$query) or die('<div class="error-response sql-import-response">Problem in executing the SQL query <b>' . $query. '</b></div>');
				$query= '';             
			}
		}


		$mensaje = 'Base de Datos y usuarios de test creados en '.BD_test;
		$respuesta = array('ok' => true, 'code' => 'BD_OK', 'resource' => $mensaje);
		header('Content-type: application/json');
		echo(json_encode($respuesta));
		exit();


		$conn->close();
	}

	$mensaje = 'Base de Datos y usuarios de test ya creados '.BD_test;
	$respuesta = array('ok' => true, 'code' => 'BD_OK', 'resource' => $mensaje);
	header('Content-type: application/json');
	echo(json_encode($respuesta));
	exit();

}

/*
hacer para borrar y crear las tablas de test cada vez que se comienza la pagina de test en funcionpromesa.js..... ????? NO

function borrartablasbdtest(){

//  Tomado de: https://stackoverflow.com/a/18625545/5032550

	SET FOREIGN_KEY_CHECKS = 0;
	SET GROUP_CONCAT_MAX_LEN=32768;
	SET @tables = NULL;
	SELECT GROUP_CONCAT('`', table_name, '`') INTO @tables
	FROM information_schema.tables
	WHERE table_schema = (SELECT DATABASE());
	SELECT IFNULL(@tables,'dummy') INTO @tables;

	SET @tables = CONCAT('DROP TABLE IF EXISTS ', @tables);
	PREPARE stmt FROM @tables;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
	SET FOREIGN_KEY_CHECKS = 1;
	view raw

}


*/




}