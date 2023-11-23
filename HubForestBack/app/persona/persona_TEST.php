<?php


function persona_TEST(){


	include_once './Base/TEST_CLASS_sin_CURL.php';


	$pruebas = new apptestNoRest_sin_CURL();

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//USUARIO
	$entidad = 'persona';
	$accion = 'ADD';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	//insertar espacio correcto
	$POST = array(
				'dni'=> '99999999R', 
				'nombre_persona'=> 'Nombre9', 
				'apellidos_persona'=> 'Apellidos9',
				'fechaNacimiento_persona'=> '09/09/9999', 
				'direccion_persona'=> 'Direccion9',
				'telefono_persona'=> '999999999',
				'email_persona'=> '99@99.99',
				'foto_persona'=> 'Foto9.png',
				'controlador'=>'persona',
				'action'=>'ADD'
			);
	$prueba = 'insertar persona correcto';
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

	//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'insertar persona dni existe en persona';
	$POST = array(
				'dni'=> '99999999R', 
				'nombre_persona'=> 'Nombre9', 
				'apellidos_persona'=> 'Apellidos9',
				'fechaNacimiento_persona'=> '09/09/9999', 
				'direccion_persona'=> 'Direccion9',
				'telefono_persona'=> '999999999',
				'email_persona'=> '99@99.99',
				'foto_persona'=> 'Foto9.png',
				'controlador'=>'persona',
				'action'=>'ADD'
			);
	$codeEsperado = literal['dni_EXISTE_en_persona_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

	//---------------------------------------------------------------------------------------------------------------------

	

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//USUARIO
	$entidad = 'persona';
	$accion = 'SEARCH';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'buscar persona correcto vacio';
	$POST = array('dni' => 'XXXXXXXXX', 'controlador'=>'persona', 'action'=>'SEARCH');
	$codeEsperado = literal['RECORDSET_VACIO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//--------------------------------------------------------------------------------------------------------------------

	$prueba = 'buscar persona correcto datos';
	$POST = array('controlador'=>'persona', 'action'=>'SEARCH');
	$codeEsperado = literal['RECORDSET_DATOS'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);


//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//USUARIO
	$entidad = 'persona';
	$accion = 'EDIT';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'editar persona correcto';
	$POST = array(
				'dni'=> '99999999R', 
				'nombre_persona'=> 'Nombre99', 
				'apellidos_persona'=> 'Apellidos9',
				'fechaNacimiento_persona'=> '09/09/9999', 
				'direccion_persona'=> 'Direccion9',
				'telefono_persona'=> '999999999',
				'email_persona'=> '99@99.99',
				'foto_persona'=> 'Foto9.png',
				'controlador'=>'persona',
				'action'=>'EDIT'
			);
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'editar persona dni ya existe';
	$POST = array(
				'dni'=> '7777R', 
				'nombre_persona'=> 'Nombre9', 
				'apellidos_persona'=> 'Apellidos9',
				'fechaNacimiento_persona'=> '09/09/9999', 
				'direccion_persona'=> 'Direccion9',
				'telefono_persona'=> '999999999',
				'email_persona'=> '99@99.99',
				'foto_persona'=> 'Foto9.png',
				'controlador'=>'persona',
				'action'=>'EDIT'
			);
	$codeEsperado = literal['dni_NO_EXISTE_en_persona_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//persona
	$entidad = 'persona';
	$accion = 'DELETE';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------
	
	$prueba = 'borrar persona dni en usuario';
	$POST = array(
				'dni'=> '1', 
				'nombre_persona'=> 'Nombre9', 
				'apellidos_persona'=> 'Apellidos9',
				'fechaNacimiento_persona'=> '09/09/9999', 
				'direccion_persona'=> 'Direccion9',
				'telefono_persona'=> '999999999',
				'email_persona'=> '99@99.99',
				'foto_persona'=> 'Foto9.png',
				'controlador'=>'persona',
				'action'=>'DELETE'
			);
	$codeEsperado = literal['dni_EXISTE_en_usuario_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//---------------------------------------------------------------------------------------------------------------------
	$prueba = 'borrar persona dni no existe';
	$POST = array(
				'dni'=> '7777R', 
				'nombre_persona'=> 'Nombre9', 
				'apellidos_persona'=> 'Apellidos9',
				'fechaNacimiento_persona'=> '09/09/9999', 
				'direccion_persona'=> 'Direccion9',
				'telefono_persona'=> '999999999',
				'email_persona'=> '99@99.99',
				'foto_persona'=> 'Foto9.png',
				'controlador'=>'persona',
				'action'=>'DELETE'
			);
	$codeEsperado = literal['dni_NO_EXISTE_en_persona_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//---------------------------------------------------------------------------------------------------------------------
	
	$prueba = 'borrar persona correcto';
	$POST = array(
				'dni'=> '99999999R', 
				'nombre_persona'=> 'Nombre9', 
				'apellidos_persona'=> 'Apellidos9',
				'fechaNacimiento_persona'=> '09/09/9999', 
				'direccion_persona'=> 'Direccion9',
				'telefono_persona'=> '999999999',
				'email_persona'=> '99@99.99',
				'foto_persona'=> 'Foto9.png',
				'controlador'=>'persona',
				'action'=>'DELETE'
			);
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//--------------------------------------------------------------------------------------------------------------------

	return $pruebas->resultadoTest;

}








?>
