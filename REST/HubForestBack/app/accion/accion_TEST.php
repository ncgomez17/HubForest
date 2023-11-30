<?php

function accion_TEST(){


	include_once './Base/TEST_CLASS_sin_CURL.php';


	$pruebas = new apptestNoRest_sin_CURL();

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//accion
	$entidad = 'accion';
	$accion = 'ADD';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	//insertar accion correcto
	$POST = array('nombre_accion' => 'esteaccion1', 'descrip_accion' => 'descripcion de este accion1','controlador'=>'accion','action'=>'ADD');
	$prueba = 'insertar accion correcto';
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

	
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//accion
	$entidad = 'accion';
	$accion = 'SEARCH';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	//buscar accion correcto vacio
	$POST = array('nombre_accion' => 'AA', 'controlador'=>'accion', 'action'=>'SEARCH');
	$prueba = 'buscar accion correcto vacio';
	$codeEsperado = literal['RECORDSET_VACIO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//accion
	$entidad = 'accion';
	$accion = 'SEARCH';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	//buscar accion correcto
	$POST = array('controlador'=>'accion', 'action'=>'SEARCH');
	$prueba = 'buscar accion correcto';
	$codeEsperado = literal['RECORDSET_DATOS'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);


//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//accion
	$entidad = 'accion';
	$accion = 'EDIT';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	//buscar accion creado
	$res = devolver('accion',array('nombre_accion' => 'esteaccion1'));
	$id_accion=$res['resource'][0]['id_accion'];

	//editar accion correcto
	$POST = array('id_accion' => $id_accion,'nombre_accion' => 'BEA','descrip_accion' => 'descripcion pepito','controlador'=>'accion','action'=>'EDIT');
	$prueba = 'editar accion correcto';
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

	//editar accion correcto
	$POST = array('id_accion' => $id_accion,'nombre_accion' => 'pepito', 'descrip_accion' => 'descripcion pepito','controlador'=>'accion','action'=>'EDIT');
	$prueba = 'editar accion correcto';
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);


//--------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

	//accion
	$entidad = 'accion';
	$accion = 'DELETE';
	$tipo = 'Accion';

//---------------------------------------------------------------------------------------------------------------------

	//borrar accion correcto
	$POST = array('id_accion' => $id_accion, 'controlador' => 'accion', 'action' => 'DELETE');
	$prueba = 'borrar accion correcto';
	$codeEsperado = literal['SQL_OK'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

	/*borrar accion que existe en rolaccionfuncionalidad
	$POST = array('id_accion' => 1, 'controlador' => 'accion', 'action' => 'DELETE');
	$prueba = 'borrar accion que existe en rolaccionfuncionalidad';
	$codeEsperado = 'id_accion_EXISTE_en_rolaccionfuncionalidad_KO';
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);
*/
	//borrar accion que no existe
	$POST = array('id_accion' => 9999999, 'controlador' => 'accion', 'action' => 'DELETE');
	$prueba = 'borrar accion que no existe';
	$codeEsperado = literal['id_accion_NO_EXISTE_en_accion_KO'];
	$pruebas->hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado);

//--------------------------------------------------------------------------------------------------------------------

	return $pruebas->resultadoTest;

}








?>
