<?php

include_once './Base/ModelBase.php';

class metodologiaanalisis_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'metodologiaanalisis';
		$this->clave = array('idmanalisis');
		$this->foraneas = array();
		$this->autoincrement = array('idmanalisis');
        $this->unicos = array();

	}

}