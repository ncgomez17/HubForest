<?php

include_once './Base/appServiceBase.php';

class rolaccionfuncionalidad_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('id_rol', 'id_accion', 'id_funcionalidad');

		$this->listaAtributosSelect = array('id_rol', 'id_accion', 'id_funcionalidad');

		$this->notnull = array(
						'ADD'=>array('id_rol', 'id_accion', 'id_funcionalidad'),
						'DELETE'=>array('id_rol', 'id_accion', 'id_funcionalidad'),
						'EDIT'=>array('id_rol', 'id_accion', 'id_funcionalidad')
						);

		$this->modelo = $this->crearModelOne('rolaccionfuncionalidad');

	}




}
?>
