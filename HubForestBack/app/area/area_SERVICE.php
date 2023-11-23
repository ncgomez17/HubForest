<?php

include_once 'Base/appServiceBase.php';

class area_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('id_area','nombre_area');

		$this->listaAtributosSelect = array('id_area','nombre_area');

		$this->notnull = array(
						'ADD' => array('nombre_area'),
						'EDIT' => array('nombre_area'),
						'DELETE' => array('id_area')
						);

		$this->modelo = $this->crearModelOne('area');

		$this->files = '';

	}

}