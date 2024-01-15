<?php

include_once './Base/ModelBase.php';

class tipoubicacion_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'tipoubicacion';
		$this->clave = array('idtipoubicacion');
		$this->foraneas = array();
		$this->autoincrement = array('idtipoubicacion');
        $this->unicos = array();

	}

}