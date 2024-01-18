<?php

include_once './Base/ModelBase.php';

class metodomuestreo_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'metodomuestreo';
		$this->clave = array('idmmuestreo');
		$this->foraneas = array();
		$this->autoincrement = array('idmmuestreo');
        $this->unicos = array();

	}

}