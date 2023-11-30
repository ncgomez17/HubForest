<?php

include_once './Base/appServiceBase.php';

class form_entity_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('id_form_entity','name_entity');

		$this->listaAtributosSelect = array('id_form_entity','name_entity');

		$this->notnull = array(
						'ADD' => array('name_entity'),
						'EDIT' => array('name_entity'),
						'DELETE' => array('id_form_entity')
						);

		$this->modelo = $this->crearModelOne('form_entity');

	}

}