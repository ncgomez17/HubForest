<?php

include_once './Base/appServiceBase.php';

class muestreo_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('idmuestreo','nombremuestreo','fichero','tipoubicacion','proyecto','metodologia');

		$this->listaAtributosSelect = array('idmuestreo','nombremuestreo','fichero','tipoubicacion','proyecto','metodologia');

		$this->notnull = array(
						'ADD' => array(),
						'EDIT' => array(),
						'DELETE' => array('idmuestreo')
						);

		$this->modelo = $this->crearModelOne('muestreo');

	}

}