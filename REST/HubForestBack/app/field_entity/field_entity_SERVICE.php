<?php

include_once './Base/appServiceBase.php';

class field_entity_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('id_form_entity','id_field_entity','name_field_entity','primary_field_entity','autoincrement_field_entity','null_field_entity','type_field_entity','max_length_field_entity','class_field_entity','on_blur_field_entity');

		$this->listaAtributosSelect = array('id_form_entity','id_field_entity','name_field_entity','primary_field_entity','autoincrement_field_entity','null_field_entity','type_field_entity','max_length_field_entity','class_field_entity','on_blur_field_entity');

		$this->notnull = array(
						'ADD' => array('id_form_entity','name_field_entity','primary_field_entity','autoincrement_field_entity','null_field_entity','type_field_entity','max_length_field_entity'),
						'EDIT' => array('id_form_entity','name_field_entity','primary_field_entity','autoincrement_field_entity','null_field_entity','type_field_entity','max_length_field_entity'),
						'DELETE' => array('id_field_entity')
						);

		$this->modelo = $this->crearModelOne('field_entity');

	}

}