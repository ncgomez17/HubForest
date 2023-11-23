<?php

include_once './Base/ModelBase.php';

class funcionalidad_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
	function __construct(){

		$this->tabla = 'funcionalidad';
		$this->clave = array('id_funcionalidad');
		$this->foraneas = array();
		$this->autoincrement = array('id_funcionalidad');
	}





}
?>
