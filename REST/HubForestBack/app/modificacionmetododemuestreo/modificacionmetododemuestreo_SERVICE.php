<?php

include_once './Base/appServiceBase.php';

class modificacionmetododemuestreo_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('idmmmuestreo','descripcion','fichero');

		$this->listaAtributosSelect = array('idmmmuestreo','descripcion','fichero');

		$this->notnull = array(
						'ADD' => array(),
						'EDIT' => array(),
						'DELETE' => array('idmmmuestreo')
						);

		$this->modelo = $this->crearModelOne('modificacionmetododemuestreo');

	}

}