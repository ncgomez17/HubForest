<?php

include_once './Base/appServiceBase.php';

class accion_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('id_accion', 'nombre_accion', 'descrip_accion');

		$this->listaAtributosSelect = array('id_accion', 'nombre_accion', 'descrip_accion');

		$this->notnull = array(
						'ADD'=>array('nombre_accion', 'descrip_accion'),
						'EDIT'=>array('id_accion','nombre_accion', 'descrip_accion'),
						'DELETE'=>array('id_accion')
						);

		$this->modelo = $this->crearModelOne('accion');

	}


}
?>
