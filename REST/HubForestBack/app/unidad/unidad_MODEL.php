<?php

include_once './Base/ModelBase.php';

class unidad_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'unidad';
		$this->clave = array('idunidad');
		$this->foraneas = array();
		$this->autoincrement = array();
        $this->unicos = array();

	}

}