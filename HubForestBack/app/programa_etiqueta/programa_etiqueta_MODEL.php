<?php

include_once './Base/ModelBase.php';

class programa_etiqueta_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'programa_etiqueta';
		$this->clave = array('id_programa','id_etiqueta');
		$this->foraneas = array();
		$this->autoincrement = array();
        $this->unicos = array();

	}

}