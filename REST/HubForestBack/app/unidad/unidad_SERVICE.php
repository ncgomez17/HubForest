<?php

include_once './Base/appServiceBase.php';

class unidad_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('idunidad','nombreunidad','descripcion','parametro');

		$this->listaAtributosSelect = array('idunidad','nombreunidad','descripcion','parametro');

		$this->notnull = array(
						'ADD' => array('idunidad'),
						'EDIT' => array('idunidad'),
						'DELETE' => array('idunidad')
						);

		$this->modelo = $this->crearModelOne('unidad');

	}

}