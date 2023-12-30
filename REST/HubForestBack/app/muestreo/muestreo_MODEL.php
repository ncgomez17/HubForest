<?php

include_once './Base/ModelBase.php';

class muestreo_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'muestreo';
		$this->clave = array('idmuestreo');
		$this->foraneas = array();
		$this->autoincrement = array('idmuestreo');
        $this->unicos = array();

	}

}