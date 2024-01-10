<?php

include_once './Base/appServiceBase.php';

class ubicacion_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('idubicacion','latitud','longitud');

		$this->listaAtributosSelect = array('idubicacion','latitud','longitud');

		$this->notnull = array(
						'ADD' => array(),
						'EDIT' => array(),
						'DELETE' => array('idubicacion')
						);

		$this->modelo = $this->crearModelOne('ubicacion');

	}

}