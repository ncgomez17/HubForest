<?php

include_once 'Base/appServiceBase.php';

class etiqueta_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('id_etiqueta','nombre_etiqueta');

		$this->listaAtributosSelect = array('id_etiqueta','nombre_etiqueta');

		$this->notnull = array(
						'ADD' => array('nombre_etiqueta'),
						'EDIT' => array('nombre_etiqueta'),
						'DELETE' => array('id_etiqueta')
						);

		$this->modelo = $this->crearModelOne('etiqueta');

	}

}