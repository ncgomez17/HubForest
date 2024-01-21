<?php

include_once './Base/appServiceBase.php';

class procesadomuestra_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('idpmuestra','descripcion','fichero','muestra','panalisis','nombre');

		$this->listaAtributosSelect = array('idpmuestra','descripcion','fichero','muestra','panalisis','nombre');

		$this->notnull = array(
						'ADD' => array(),
						'EDIT' => array(),
						'DELETE' => array('idpmuestra')
						);

		$this->modelo = $this->crearModelOne('procesadomuestra');

	}

}