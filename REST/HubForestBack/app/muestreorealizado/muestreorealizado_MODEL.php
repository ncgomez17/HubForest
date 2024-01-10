<?php

include_once './Base/ModelBase.php';

class muestreorealizado_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'muestreorealizado';
		$this->clave = array('idmuestreor');
		$this->foraneas = array();
		$this->autoincrement = array('idmuestreor');
        $this->unicos = array();

	}

}