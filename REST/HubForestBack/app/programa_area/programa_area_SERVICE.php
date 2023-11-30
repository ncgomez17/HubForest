<?php

include_once './Base/appServiceBase.php';

class programa_area_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('id_programa','id_area');

		$this->listaAtributosSelect = array('id_programa','id_area');

		$this->notnull = array(
						'ADD' => array('id_programa','id_area'),
						'EDIT' => array('id_programa','id_area'),
						'DELETE' => array('id_programa','id_area')
						);

		$this->modelo = $this->crearModelOne('programa_area');

		$this->files = '';
	}

}