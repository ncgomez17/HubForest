<?php

include_once './Base/ModelBase.php';

class muestra_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'muestra';
		$this->clave = array('idmuestra');
		$this->foraneas = array();
		$this->autoincrement = array('idmuestra');
        $this->unicos = array();

	}

}