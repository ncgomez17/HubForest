<?php

include_once './Base/ModelBase.php';

class proyecto_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'proyecto';
		$this->clave = array('idproyecto');
		$this->foraneas = array();
		$this->autoincrement = array('idproyecto');
        $this->unicos = array();

	}

}