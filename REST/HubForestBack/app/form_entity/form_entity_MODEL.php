<?php

include_once './Base/ModelBase.php';

class form_entity_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'form_entity';
		$this->clave = array('id_form_entity');
		$this->foraneas = array();
		$this->autoincrement = array('id_form_entity');
        $this->unicos = array();

	}

}