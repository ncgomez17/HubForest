<?php

include_once './Base/ModelBase.php';

class procesadomuestra_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'procesadomuestra';
		$this->clave = array('idpmuestra');
		$this->foraneas = array();
		$this->autoincrement = array('idpmuestra');
        $this->unicos = array();

	}

}