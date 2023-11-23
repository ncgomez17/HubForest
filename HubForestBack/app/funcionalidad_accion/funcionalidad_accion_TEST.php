<?php

function funcionalidad_accion_TEST(){


	include_once './Base/TEST_CLASS_sin_CURL.php';


	$pruebas = new apptestNoRest_sin_CURL();

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//funcionalidad
	$entidad = 'funcionalidad_accion';
	$funcionalidad = 'ADD';
	$tipo = 'accion';

//---------------------------------------------------------------------------------------------------------------------

	//insertar funcionalidad correcto
	$POST = array('id_funcionalidad' => 8, 'id_accion' => 8,'controlador'=>'funcionalidad_accion','action'=>'ADD');
	$prueba = 'insertar funcionalidad_accion correcto';
	$codeEsperado = literal['funcionalidad_accion_ADD_forbidden_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $funcionalidad, $tipo, $prueba, $codeEsperado);

	
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//funcionalidad
	$entidad = 'funcionalidad_accion';
	$funcionalidad = 'SEARCH';
	$tipo = 'accion';

//---------------------------------------------------------------------------------------------------------------------

	//buscar funcionalidad correcto vacio
	$POST = array('id_funcionalidad' => 'a', 'controlador'=>'funcionalidad_accion', 'action'=>'SEARCH');
	$prueba = 'buscar funcionalidad_accion correcto vacio';
	$codeEsperado = literal['RECORDSET_VACIO'];
	$pruebas->hacerPrueba($POST, $entidad, $funcionalidad, $tipo, $prueba, $codeEsperado);

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//funcionalidad
	$entidad = 'funcionalidad_accion';
	$funcionalidad = 'SEARCH';
	$tipo = 'accion';

//---------------------------------------------------------------------------------------------------------------------

	//buscar funcionalidad correcto
	$POST = array('controlador'=>'funcionalidad_accion', 'action'=>'SEARCH');
	$prueba = 'buscar funcionalidad_accion correcto';
	$codeEsperado = literal['RECORDSET_DATOS'];
	$pruebas->hacerPrueba($POST, $entidad, $funcionalidad, $tipo, $prueba, $codeEsperado);


//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//funcionalidad
	$entidad = 'funcionalidad_accion';
	$funcionalidad = 'DELETE';
	$tipo = 'accion';

//---------------------------------------------------------------------------------------------------------------------

	//borrar funcionalidad correcto
	$POST = array('id_funcionalidad' => 8, 'id_accion' => 8, 'controlador' => 'funcionalidad_accion', 'action' => 'DELETE');
	$prueba = 'borrar funcionalidad_accion correcto';
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $funcionalidad, $tipo, $prueba, $codeEsperado);

	/*borrar funcionalidad que existe en rolfuncionalidadfuncionalidad
	$POST = array('id_funcionalidad' => 1, 'controlador' => 'funcionalidad', 'action' => 'DELETE');
	$prueba = 'borrar funcionalidad que existe en rolfuncionalidadfuncionalidad';
	$codeEsperado = 'id_funcionalidad_EXISTE_en_rolfuncionalidadfuncionalidad_KO';
	$pruebas->hacerPrueba($POST, $entidad, $funcionalidad, $tipo, $prueba, $codeEsperado);
*/
	//borrar funcionalidad que no existe
	$POST = array('id_funcionalidad' => 9999999, 'id_accion' => 999999, 'controlador' => 'funcionalidad_accion', 'action' => 'DELETE');
	$prueba = 'borrar funcionalidad que no existe';
	$codeEsperado = literal['id_funcionalidad_accion_NO_EXISTE_en_funcionalidad_accion_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $funcionalidad, $tipo, $prueba, $codeEsperado);

//--------------------------------------------------------------------------------------------------------------------

	return $pruebas->resultadoTest;

}








?>
