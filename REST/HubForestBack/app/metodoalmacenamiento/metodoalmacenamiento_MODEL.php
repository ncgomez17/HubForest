<?php

include_once './Base/ModelBase.php';

class metodoalmacenamiento_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'metodoalmacenamiento';
		$this->clave = array('idmalmac');
		$this->foraneas = array();
		$this->autoincrement = array('idmalmac');
        $this->unicos = array();

	}

}