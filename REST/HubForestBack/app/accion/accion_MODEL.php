<?php

include_once './Base/ModelBase.php';

class accion_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
	function __construct(){

		$this->tabla = 'accion';
		$this->clave = array('id_accion');
		$this->foraneas = array();
		$this->autoincrement = array('id_accion');
	}





}
?>
