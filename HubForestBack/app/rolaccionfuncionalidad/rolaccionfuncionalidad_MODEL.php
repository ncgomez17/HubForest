<?php

include_once './Base/ModelBase.php';

class rolaccionfuncionalidad_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
	function __construct(){

		$this->tabla = 'rolaccionfuncionalidad';
		$this->clave = array('id_rol','id_accion','id_funcionalidad');
		$this->foraneas = array('rol'=>'id_rol','accion'=>'id_accion','funcionalidad'=>'id_funcionalidad');
		$this->autoincrement = array();
	}





}
?>
