<?php

include_once './Base/ModelBase.php';

class programa_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'programa';
		$this->clave = array('id_programa');
		$this->foraneas = array();
		$this->autoincrement = array('id_programa');
        $this->unicos = array();

	}

}