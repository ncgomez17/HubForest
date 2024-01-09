<?php

include_once './Base/appServiceBase.php';

class metodologia_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('idmetodologia','nombre','fichero','descripcion','muestreo');

		$this->listaAtributosSelect = array('idmetodologia','nombre','fichero','descripcion','muestreo');

		$this->notnull = array(
						'ADD' => array(),
						'EDIT' => array(),
						'DELETE' => array('idmetodologia')
						);

		$this->modelo = $this->crearModelOne('metodologia');

	}

}