<?php

include_once './Base/appServiceBase.php';

class log_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('usuario','controlador','action','query','codigorespuesta');

		$this->listaAtributosSelect = array('usuario','controlador','action','query','codigorespuesta');

		$this->notnull = array(
						'ADD' => array('usuario','controlador','action','query','codigorespuesta'),
						'EDIT' => array('usuario','controlador','action','query','codigorespuesta'),
						'DELETE' => array()
						);

		$this->modelo = $this->crearModelOne('log');

	}

}