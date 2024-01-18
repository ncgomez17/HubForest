<?php

include_once './Base/appServiceBase.php';

class metodoalmacenamiento_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('idmalmac','nombre','descripcion','fichero');

		$this->listaAtributosSelect = array('idmalmac','nombre','descripcion','fichero');

		$this->notnull = array(
						'ADD' => array(),
						'EDIT' => array(),
						'DELETE' => array('idmalmac')
						);

		$this->modelo = $this->crearModelOne('metodoalmacenamiento');

	}

}