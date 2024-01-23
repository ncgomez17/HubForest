<?php

include_once './Base/appServiceBase.php';

class modificacionmetodologiaanalisis_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('idmmanalisis','descripcion','fichero','nombre');

		$this->listaAtributosSelect = array('idmmanalisis','descripcion','fichero','nombre');

		$this->notnull = array(
						'ADD' => array(),
						'EDIT' => array(),
						'DELETE' => array('idmmanalisis')
						);

		$this->modelo = $this->crearModelOne('modificacionmetodologiaanalisis');

	}

}