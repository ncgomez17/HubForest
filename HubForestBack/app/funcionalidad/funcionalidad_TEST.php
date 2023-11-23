<?php

function funcionalidad_TEST(){


	include_once './Base/TEST_CLASS_sin_CURL.php';


	$pruebas = new apptestNoRest_sin_CURL();

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//funcionalidad
	$entidad = 'funcionalidad';
	$funcionalidad = 'ADD';
	$tipo = 'accion';

//---------------------------------------------------------------------------------------------------------------------

	//insertar funcionalidad correcto
	$POST = array('nombre_funcionalidad' => 'estefuncionalidad1', 'descrip_funcionalidad' => 'descripcion de este funcionalidad1','controlador'=>'funcionalidad','action'=>'ADD');
	$prueba = 'insertar funcionalidad correcto';
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $funcionalidad, $tipo, $prueba, $codeEsperado);

	
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//funcionalidad
	$entidad = 'funcionalidad';
	$funcionalidad = 'SEARCH';
	$tipo = 'accion';

//---------------------------------------------------------------------------------------------------------------------

	//buscar funcionalidad correcto vacio
	$POST = array('nombre_funcionalidad' => 'AA', 'controlador'=>'funcionalidad', 'action'=>'SEARCH');
	$prueba = 'buscar funcionalidad correcto vacio';
	$codeEsperado = literal['RECORDSET_VACIO'];
	$pruebas->hacerPrueba($POST, $entidad, $funcionalidad, $tipo, $prueba, $codeEsperado);

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//funcionalidad
	$entidad = 'funcionalidad';
	$funcionalidad = 'SEARCH';
	$tipo = 'accion';

//---------------------------------------------------------------------------------------------------------------------

	//buscar funcionalidad correcto
	$POST = array('controlador'=>'funcionalidad', 'action'=>'SEARCH');
	$prueba = 'buscar funcionalidad correcto';
	$codeEsperado = literal['RECORDSET_DATOS'];
	$pruebas->hacerPrueba($POST, $entidad, $funcionalidad, $tipo, $prueba, $codeEsperado);


//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//funcionalidad
	$entidad = 'funcionalidad';
	$funcionalidad = 'EDIT';
	$tipo = 'accion';

//---------------------------------------------------------------------------------------------------------------------

	//buscar funcionalidad creado
	$res = devolver('funcionalidad',array('nombre_funcionalidad' => 'estefuncionalidad1'));
	$id_funcionalidad=$res['resource'][0]['id_funcionalidad'];

	//editar funcionalidad correcto
	$POST = array('id_funcionalidad' => $id_funcionalidad,'nombre_funcionalidad' => 'BEA','descrip_funcionalidad' => 'descripcion pepito','controlador'=>'funcionalidad','action'=>'EDIT');
	$prueba = 'editar funcionalidad correcto';
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $funcionalidad, $tipo, $prueba, $codeEsperado);

	//editar funcionalidad correcto
	$POST = array('id_funcionalidad' => $id_funcionalidad,'nombre_funcionalidad' => 'pepito', 'descrip_funcionalidad' => 'descripcion pepito','controlador'=>'funcionalidad','action'=>'EDIT');
	$prueba = 'editar funcionalidad correcto';
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $funcionalidad, $tipo, $prueba, $codeEsperado);


//--------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//funcionalidad
	$entidad = 'funcionalidad';
	$funcionalidad = 'DELETE';
	$tipo = 'accion';

//---------------------------------------------------------------------------------------------------------------------

	//borrar funcionalidad correcto
	$POST = array('id_funcionalidad' => $id_funcionalidad, 'controlador' => 'funcionalidad', 'action' => 'DELETE');
	$prueba = 'borrar funcionalidad correcto';
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $funcionalidad, $tipo, $prueba, $codeEsperado);

	/*borrar funcionalidad que existe en rolfuncionalidadfuncionalidad
	$POST = array('id_funcionalidad' => 1, 'controlador' => 'funcionalidad', 'action' => 'DELETE');
	$prueba = 'borrar funcionalidad que existe en rolfuncionalidadfuncionalidad';
	$codeEsperado = 'id_funcionalidad_EXISTE_en_rolfuncionalidadfuncionalidad_KO';
	$pruebas->hacerPrueba($POST, $entidad, $funcionalidad, $tipo, $prueba, $codeEsperado);
*/
	//borrar funcionalidad que no existe
	$POST = array('id_funcionalidad' => 9999999, 'controlador' => 'funcionalidad', 'action' => 'DELETE');
	$prueba = 'borrar funcionalidad que no existe';
	$codeEsperado = literal['id_funcionalidad_NO_EXISTE_en_funcionalidad_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $funcionalidad, $tipo, $prueba, $codeEsperado);

//--------------------------------------------------------------------------------------------------------------------

	return $pruebas->resultadoTest;

}








?>
