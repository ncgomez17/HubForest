<?php

include_once './Base/appServiceBase.php';

class analisis_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('idanalisis','nombre','pmuestra','manalisis','mmanalisis');

		$this->listaAtributosSelect = array('idanalisis','nombre','pmuestra','manalisis','mmanalisis');

		$this->notnull = array(
						'ADD' => array(),
						'EDIT' => array(),
						'DELETE' => array('idanalisis')
						);

		$this->modelo = $this->crearModelOne('analisis');

	}

}