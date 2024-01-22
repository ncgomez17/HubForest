<?php

include_once './Base/appServiceBase.php';

class parametro_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('idparametro','nombreparametro','analisis');

		$this->listaAtributosSelect = array('idparametro','nombreparametro','analisis');

		$this->notnull = array(
						'ADD' => array('idparametro'),
						'EDIT' => array('idparametro'),
						'DELETE' => array('idparametro')
						);

		$this->modelo = $this->crearModelOne('parametro');

	}

}