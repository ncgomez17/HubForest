<?php

include_once './Base/appServiceBase.php';

class rol_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('id_rol', 'rol_name', 'rol_description');

		$this->listaAtributosSelect = array('id_rol', 'rol_name', 'rol_description');

		$this->notnull = array(
						'ADD'=>array('rol_name', 'rol_description'),
						'EDIT'=>array('id_rol','rol_name', 'rol_description'),
						'DELETE'=>array('id_rol')
						);

		$this->modelo = $this->crearModelOne('rol');

	}


}
?>
