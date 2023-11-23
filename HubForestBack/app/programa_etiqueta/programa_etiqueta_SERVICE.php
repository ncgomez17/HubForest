<?php

include_once './Base/appServiceBase.php';

class programa_etiqueta_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('id_programa','id_etiqueta');

		$this->listaAtributosSelect = array('id_programa','id_etiqueta');

		$this->notnull = array(
						'ADD' => array('id_programa','id_etiqueta'),
						'EDIT' => array('id_programa','id_etiqueta'),
						'DELETE' => array('id_programa','id_etiqueta')
						);

		$this->modelo = $this->crearModelOne('programa_etiqueta');

		$this->files = '';

	}

}