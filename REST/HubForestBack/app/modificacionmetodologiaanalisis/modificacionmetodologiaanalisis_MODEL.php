<?php

include_once './Base/ModelBase.php';

class modificacionmetodologiaanalisis_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'modificacionmetodologiaanalisis';
		$this->clave = array('idmmanalisis');
		$this->foraneas = array();
		$this->autoincrement = array('idmmanalisis');
        $this->unicos = array();

	}

}