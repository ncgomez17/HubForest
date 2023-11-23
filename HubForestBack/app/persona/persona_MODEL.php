<?php

include_once './Base/ModelBase.php';

class persona_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
	function __construct(){

		$this->tabla = 'persona';
		$this->clave = array('dni');
		$this->foraneas = array();
		$this->autoincrement = array('');
	}


}
?>
