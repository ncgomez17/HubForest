<?php

include_once './Base/appServiceBase.php';

class funcionalidad_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('id_funcionalidad', 'nombre_funcionalidad', 'descrip_funcionalidad');

		$this->listaAtributosSelect = array('id_funcionalidad', 'nombre_funcionalidad', 'descrip_funcionalidad');

		$this->notnull = array(
						'ADD'=>array('nombre_funcionalidad', 'descrip_funcionalidad'),
						'EDIT'=>array('id_funcionalidad','nombre_funcionalidad', 'descrip_funcionalidad'),
						'DELETE'=>array('id_funcionalidad')
						);

		$this->modelo = $this->crearModelOne('funcionalidad');

	}


}
?>
