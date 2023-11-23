<?php

function rolaccionfuncionalidad_TEST(){


	include_once './Base/TEST_CLASS_sin_CURL.php';


	$pruebas = new apptestNoRest_sin_CURL();

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//rol
	$entidad = 'rolaccionfuncionalidad';
	$accion = 'ADD';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'insertar rolaccionfuncionalidad correcto';
	$POST = array('id_funcionalidad' => 5, 'id_accion' => 5,'id_rol'=> 1, 'controlador'=>'rolaccionfuncionalidad','action'=>'ADD');
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'insertar rolaccionfuncionalidad ya existe';
	$POST = array('id_funcionalidad' => 1, 'id_accion' => 1,'id_rol'=> 0, 'controlador'=>'rolaccionfuncionalidad','action'=>'ADD');
	$codeEsperado = literal['permiso_EXISTE_en_rolaccionfuncionalidad_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'insertar rolaccionfuncionalidad id rol no existe en rol';
	$POST = array('id_funcionalidad' => 5, 'id_accion' => 5,'id_rol'=> 99, 'controlador'=>'rolaccionfuncionalidad','action'=>'ADD');
	$codeEsperado = literal['id_rol_NO_EXISTE_en_rol_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'insertar rolaccionfuncionalidad id accion no existe en accion';
	$POST = array('id_funcionalidad' => 5, 'id_accion' => 99,'id_rol'=> 0, 'controlador'=>'rolaccionfuncionalidad','action'=>'ADD');
	$codeEsperado = literal['id_accion_NO_EXISTE_en_accion_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'insertar rolaccionfuncionalidad id funcionalidad no existe en funcionalidad';
	$POST = array('id_funcionalidad' => 99, 'id_accion' => 1,'id_rol'=> 0, 'controlador'=>'rolaccionfuncionalidad','action'=>'ADD');
	$codeEsperado = literal['id_funcionalidad_NO_EXISTE_en_funcionalidad_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);
	
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
	
	//rolaccionfuncionalidad
	$entidad = 'rolaccionfuncionalidad';
	$accion = 'EDIT';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'editar rolaccionfuncionalidad no permitido';
	$POST = array('id_funcionalidad' => 1, 'id_accion' => 1,'id_rol'=> 1, 'controlador'=>'rolaccionfuncionalidad','action'=>'EDIT');
	$codeEsperado = literal['prohibido_edit_rolaccionfuncionalidad'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
	
	//rol
	$entidad = 'rolaccionfuncionalidad';
	$accion = 'SEARCH';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	
	$prueba = 'buscar rolaccionfuncionalidad correcto vacio';
	$POST = array('id_funcionalidad' => 'a', 'controlador'=>'rolaccionfuncionalidad', 'action'=>'SEARCH');
	$codeEsperado = literal['RECORDSET_VACIO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//rol
	$entidad = 'rolaccionfuncionalidad';
	$accion = 'SEARCH';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'buscar rolaccionfuncionalidad correcto';
	$POST = array('controlador'=>'rol', 'action'=>'SEARCH');
	$codeEsperado = literal['RECORDSET_DATOS'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);


//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//rol
	$entidad = 'rolaccionfuncionalidad';
	$accion = 'DELETE';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'borrar rolaccionfuncionalidad correcto';
	$POST = array('id_funcionalidad'=>5, 'id_accion'=>5, 'id_rol' => 1, 'controlador' => 'rolaccionfuncionalidad', 'action' => 'DELETE');
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'borrar rolaccionfuncionalidad no existe';
	$POST = array('id_funcionalidad'=>10, 'id_accion'=>10, 'id_rol' => 10, 'controlador' => 'rolaccionfuncionalidad', 'action' => 'DELETE');
	$codeEsperado = literal['permiso_NO_EXISTE_en_rolaccionfuncionalidad_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//---------------------------------------------------------------------------------------------------------------------

	$prueba = 'borrar rolaccionfuncionalidad admin no permitido';
	$POST = array('id_funcionalidad'=>5, 'id_accion'=>1, 'id_rol' => 0, 'controlador' => 'rolaccionfuncionalidad', 'action' => 'DELETE');
	$codeEsperado = literal['no_puede_borrar_permiso_admin'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);


//--------------------------------------------------------------------------------------------------------------------

	return $pruebas->resultadoTest;

}








?>
