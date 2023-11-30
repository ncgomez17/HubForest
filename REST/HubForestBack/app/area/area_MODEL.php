<?php

include_once 'Base/ModelBase.php';

class area_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'area';
		$this->clave = array('id_area');
		$this->foraneas = array();
		$this->autoincrement = array('id_area');
        $this->unicos = array();

	}

}