<?php

include_once './Base/ModelBase.php';

class ubicacion_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'ubicacion';
		$this->clave = array('idubicacion');
		$this->foraneas = array();
		$this->autoincrement = array('idubicacion');
        $this->unicos = array();

	}

}