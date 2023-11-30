<?php

include_once 'Base/ModelBase.php';

class etiqueta_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
    // autoincrement array(atributos autoincrementales)
    // unicos array(atributos unique)
	function __construct(){

		$this->tabla = 'etiqueta';
		$this->clave = array('id_etiqueta');
		$this->foraneas = array();
		$this->autoincrement = array('id_etiqueta');
        $this->unicos = array();

	}

}