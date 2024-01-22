<?php

include_once './Base/ModelBase.php';

class parametro_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'parametro';
		$this->clave = array('idparametro');
		$this->foraneas = array();
		$this->autoincrement = array();
        $this->unicos = array();

	}

}