<?php

include_once './Base/appServiceBase.php';

class muestreorealizado_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('idmuestreor','fechamuestreo','fichero','usuario','ubicacion','muestreo');

		$this->listaAtributosSelect = array('idmuestreor','fechamuestreo','fichero','usuario','ubicacion','muestreo');

		$this->notnull = array(
						'ADD' => array(),
						'EDIT' => array(),
						'DELETE' => array('idmuestreor')
						);

		$this->modelo = $this->crearModelOne('muestreorealizado');

	}

}