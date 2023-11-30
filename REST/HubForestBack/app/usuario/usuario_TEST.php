<?php


function usuario_TEST(){


	include_once './Base/TEST_CLASS_sin_CURL.php';


	$pruebas = new apptestNoRest_sin_CURL();

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//USUARIO
	$entidad = 'usuario';
	$accion = 'ADD';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	//insertar espacio correcto
	$POST = array('dni' => '11111111A','usuario' => 'BEA', 'id_rol' => '0','controlador'=>'usuario','action'=>'ADD');
	$prueba = 'insertar usuario correcto';
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

	//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'insertar usuario dni no existe en persona';
	$POST = array('dni' => '11111111J','usuario' => 'BEA', 'id_rol' => '0','controlador'=>'usuario','action'=>'ADD');
	$codeEsperado = literal['dni_NO_EXISTE_en_persona_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

	//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'insertar usuario dni ya existe';
	$POST = array('dni' => '11111111A','usuario' => 'BEA', 'id_rol' => '0','controlador'=>'usuario','action'=>'ADD');
	$codeEsperado = literal['dni_EXISTE_en_usuario_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

	//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'insertar usuario nombre usuario ya existe';	
	$POST = array('dni' => '2','usuario' => '1', 'id_rol' => '0','controlador'=>'usuario','action'=>'ADD');
	$codeEsperado = literal['usuario_EXISTE_en_usuario_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

	//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'insertar usuario rol no existe en rol';
	$POST = array('dni' => '2','usuario' => 'BEA1', 'id_rol' => '99999','controlador'=>'usuario','action'=>'ADD');
	$codeEsperado = literal['id_rol_NO_EXISTE_en_rol_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);


//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//USUARIO
	$entidad = 'usuario';
	$accion = 'SEARCH';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	//buscar USUARIO correcto vacio
	$POST = array('usuario' => 'AA', 'controlador'=>'usuario', 'action'=>'SEARCH');
	$prueba = 'buscar usuario correcto vacio';
	$codeEsperado = literal['RECORDSET_VACIO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//USUARIO
	$entidad = 'usuario';
	$accion = 'SEARCH';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	//buscar USUARIO correcto
	$POST = array('controlador'=>'usuario', 'action'=>'SEARCH');
	$prueba = 'buscar usuario correcto';
	$codeEsperado = literal['RECORDSET_DATOS'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);


//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//USUARIO
	$entidad = 'usuario';
	$accion = 'EDIT';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	//editar USUARIO correcto
	$POST = array('dni' => '11111111A','usuario' => 'BEA1', 'id_rol' => '0','controlador'=>'usuario','action'=>'EDIT');
	$prueba = 'editar usuario correcto';
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//---------------------------------------------------------------------------------------------------------------------

	//buscar USUARIO nombre usuario ya existe
	$POST = array('dni' => '11111111A','usuario' => 'root', 'id_rol' => '9999','controlador'=>'usuario','action'=>'EDIT');
	$prueba = 'editar usuario nombre usuario ya existe';
	$codeEsperado = literal['usuario_EXISTE_en_usuario_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'editar usuario rol no existe en rol';
	$POST = array('dni' => '11111111A','usuario' => 'BEA', 'id_rol' => '99999','controlador'=>'usuario','action'=>'EDIT');
	$codeEsperado = literal['id_rol_NO_EXISTE_en_rol_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//--------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//persona
	$entidad = 'usuario';
	$accion = 'DELETE';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	//borrar espacio correcto
	$POST = array('dni' => '11111111A', 'controlador' => 'usuario', 'action' => 'DELETE');
	$prueba = 'borrar usuario correcto';
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//---------------------------------------------------------------------------------------------------------------------
	$prueba = 'borrar usuario dni no existe';
	$POST = array('dni' => '11111122A', 'controlador' => 'usuario', 'action' => 'DELETE');
	$codeEsperado = literal['dni_NO_EXISTE_en_usuario_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//--------------------------------------------------------------------------------------------------------------------

	return $pruebas->resultadoTest;

}








?>
