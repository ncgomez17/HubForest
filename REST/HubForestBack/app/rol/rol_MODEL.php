<?php

include_once './Base/ModelBase.php';

class rol_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
	function __construct(){

		$this->tabla = 'rol';
		$this->clave = array('id_rol');
		$this->foraneas = array();
		$this->autoincrement = array('id_rol');
	}





}
?>
