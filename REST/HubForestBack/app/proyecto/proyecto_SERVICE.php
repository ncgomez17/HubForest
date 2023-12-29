<?php

include_once './Base/appServiceBase.php';

class proyecto_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('idproyecto','nombre','fichero','descripcion','encargado');

		$this->listaAtributosSelect = array('idproyecto','nombre','fichero','descripcion','encargado');

		$this->notnull = array(
						'ADD' => array(),
						'EDIT' => array(),
						'DELETE' => array('idproyecto')
						);

		$this->modelo = $this->crearModelOne('proyecto');
		$this->files = array(
			array('nuevo_fichero_proyecto','fichero','./filesuploaded/files_fichero_proyecto/', array('jpg'), 200000)
		);

	}

}