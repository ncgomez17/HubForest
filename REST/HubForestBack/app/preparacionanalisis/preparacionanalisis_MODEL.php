<?php

include_once './Base/ModelBase.php';

class preparacionanalisis_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'preparacionanalisis';
		$this->clave = array('idpanalisis');
		$this->foraneas = array();
		$this->autoincrement = array('idpanalisis');
        $this->unicos = array();

	}

}