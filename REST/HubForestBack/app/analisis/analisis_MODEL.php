<?php

include_once './Base/ModelBase.php';

class analisis_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'analisis';
		$this->clave = array('idanalisis');
		$this->foraneas = array();
		$this->autoincrement = array('idanalisis');
        $this->unicos = array();

	}

}