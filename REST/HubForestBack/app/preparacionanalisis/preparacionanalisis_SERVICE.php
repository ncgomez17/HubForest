<?php

include_once './Base/appServiceBase.php';

class preparacionanalisis_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('idpanalisis','descripcion','fichero','nombre');

		$this->listaAtributosSelect = array('idpanalisis','descripcion','fichero','nombre');

		$this->notnull = array(
						'ADD' => array(),
						'EDIT' => array(),
						'DELETE' => array('idpanalisis')
						);

		$this->modelo = $this->crearModelOne('preparacionanalisis');

	}

}