<?php

include_once './Base/appServiceBase.php';

class funcionalidad_accion_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('id_funcionalidad', 'id_accion');

		$this->listaAtributosSelect = array('id_funcionalidad', 'id_accion');

		$this->notnull = array(
						'ADD'=>array('id_funcionalidad', 'id_accion'),
						'EDIT'=>array(),
						'DELETE'=>array('id_funcionalidad', 'id_accion')
						);

		$this->modelo = $this->crearModelOne('funcionalidad_accion');

	}




}
?>
