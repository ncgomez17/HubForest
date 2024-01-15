<?php

include_once './Base/appServiceBase.php';

class tipoubicacion_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('idtipoubicacion','tipoubicacion');

		$this->listaAtributosSelect = array('idtipoubicacion','tipoubicacion');

		$this->notnull = array(
						'ADD' => array(),
						'EDIT' => array(),
						'DELETE' => array('idtipoubicacion')
						);

		$this->modelo = $this->crearModelOne('tipoubicacion');

	}

}