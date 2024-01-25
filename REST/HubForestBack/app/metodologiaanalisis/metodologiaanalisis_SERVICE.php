<?php

include_once './Base/appServiceBase.php';

class metodologiaanalisis_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('idmanalisis','descripcion','fichero','nombre');

		$this->listaAtributosSelect = array('idmanalisis','descripcion','fichero','nombre');

		$this->notnull = array(
						'ADD' => array(),
						'EDIT' => array(),
						'DELETE' => array('idmanalisis')
						);

		$this->modelo = $this->crearModelOne('metodologiaanalisis');

	}

}