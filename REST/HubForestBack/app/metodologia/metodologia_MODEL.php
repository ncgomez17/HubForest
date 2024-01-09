<?php

include_once './Base/ModelBase.php';

class metodologia_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'metodologia';
		$this->clave = array('idmetodologia');
		$this->foraneas = array();
		$this->autoincrement = array('idmetodologia');
        $this->unicos = array();

	}

}