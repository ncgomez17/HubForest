<?php

include_once './Base/appServiceBase.php';

class muestra_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('idmuestra','nombre','muestreo','malmacec','mmuestreo','mmmuestreo');

		$this->listaAtributosSelect = array('idmuestra','nombre','muestreo','malmacec','mmuestreo','mmmuestreo');

		$this->notnull = array(
						'ADD' => array(),
						'EDIT' => array(),
						'DELETE' => array('idmuestra')
						);

		$this->modelo = $this->crearModelOne('muestra');

	}

}