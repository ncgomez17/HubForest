<?php

include_once './Base/ModelBase.php';

class funcionalidad_accion_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
	function __construct(){

		$this->tabla = 'funcionalidad_accion';
		$this->clave = array('id_funcionalidad','id_accion');
		$this->foraneas = array('funcionalidad'=>'id_funcionalidad', 'accion'=>'id_accion');
		$this->autoincrement = array();
	}

	function ADD(){

		$res = array();
		$res['ok'] = false;
		$res['code'] = literal['funcionalidad_accion_ADD_forbidden_KO'];
		return $res;

	}

	function EDIT(){

		$res = array();
		$res['ok'] = false;
		$res['code'] = literal['funcionalidad_accion_EDIT_forbbiden_KO'];
		return $res;

	}



}
?>
