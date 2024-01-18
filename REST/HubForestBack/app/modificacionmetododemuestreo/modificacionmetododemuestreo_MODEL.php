<?php

include_once './Base/ModelBase.php';

class modificacionmetododemuestreo_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'modificacionmetododemuestreo';
		$this->clave = array('idmmmuestreo');
		$this->foraneas = array();
		$this->autoincrement = array('idmmmuestreo');
        $this->unicos = array();

	}

}