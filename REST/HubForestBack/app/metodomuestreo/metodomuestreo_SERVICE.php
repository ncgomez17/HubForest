<?php

include_once './Base/appServiceBase.php';

class metodomuestreo_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('idmmuestreo','nombre','descripcion','fichero');

		$this->listaAtributosSelect = array('idmmuestreo','nombre','descripcion','fichero');

		$this->notnull = array(
						'ADD' => array(),
						'EDIT' => array(),
						'DELETE' => array('idmmuestreo')
						);

		$this->modelo = $this->crearModelOne('metodomuestreo');

	}

}