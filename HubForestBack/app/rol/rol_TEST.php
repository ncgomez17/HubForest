<?php

function rol_TEST(){


	include_once './Base/TEST_CLASS_sin_CURL.php';


	$pruebas = new apptestNoRest_sin_CURL();

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//rol
	$entidad = 'rol';
	$accion = 'ADD';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	//insertar rol correcto
	$POST = array('rol_name' => 'esterol1', 'rol_description' => 'descripcion de este rol1','controlador'=>'rol','action'=>'ADD');
	$prueba = 'insertar rol correcto';
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

	
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//rol
	$entidad = 'rol';
	$accion = 'SEARCH';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	//buscar rol correcto vacio
	$POST = array('rol_name' => 'AA', 'controlador'=>'rol', 'action'=>'SEARCH');
	$prueba = 'buscar rol correcto vacio';
	$codeEsperado = literal['RECORDSET_VACIO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//rol
	$entidad = 'rol';
	$accion = 'SEARCH';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	//buscar rol correcto
	$POST = array('controlador'=>'rol', 'action'=>'SEARCH');
	$prueba = 'buscar rol correcto';
	$codeEsperado = literal['RECORDSET_DATOS'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);


//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//rol
	$entidad = 'rol';
	$accion = 'EDIT';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	//buscar rol creado
	$res = devolver('rol',array('rol_name' => 'esterol1'));
	$id_rol=$res['resource'][0]['id_rol'];

	//editar rol correcto
	$POST = array('id_rol' => $id_rol,'rol_name' => 'BEA','rol_description' => 'descripcion pepito','controlador'=>'rol','action'=>'EDIT');
	$prueba = 'editar rol correcto';
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

	//editar rol correcto
	$POST = array('id_rol' => $id_rol,'rol_name' => 'pepito', 'rol_description' => 'descripcion pepito','controlador'=>'rol','action'=>'EDIT');
	$prueba = 'editar rol correcto';
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);


//--------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//rol
	$entidad = 'rol';
	$accion = 'DELETE';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	//borrar rol correcto
	$POST = array('id_rol' => $id_rol, 'controlador' => 'rol', 'action' => 'DELETE');
	$prueba = 'borrar rol correcto';
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

	//borrar rol que existe en usuario
	$POST = array('id_rol' => 3, 'controlador' => 'rol', 'action' => 'DELETE');
	$prueba = 'borrar rol que existe en usuario';
	$codeEsperado = literal['id_rol_EXISTE_en_usuario_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

	//borrar rol que no existe
	$POST = array('id_rol' => 9999999, 'controlador' => 'rol', 'action' => 'DELETE');
	$prueba = 'borrar rol que no existe';
	$codeEsperado = literal['id_rol_NO_EXISTE_en_rol_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//--------------------------------------------------------------------------------------------------------------------

	return $pruebas->resultadoTest;

}








?>
