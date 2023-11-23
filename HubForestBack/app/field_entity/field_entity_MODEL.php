<?php

include_once './Base/ModelBase.php';

class field_entity_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'field_entity';
		$this->clave = array('id_field_entity');
		$this->foraneas = array();
		$this->autoincrement = array('id_field_entity');
        $this->unicos = array();

	}

}