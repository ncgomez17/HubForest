<?php

include_once './Base/appServiceBase.php';

class usuario_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('dni_usuario','usuario','passwd_usuario','borrado_usuario','id_rol');

		$this->listaAtributosSelect = array('dni_usuario','usuario','passwd_usuario','borrado_usuario','id_rol');

		$this->notnull = array(
						'ADD' => array('dni_usuario','usuario','passwd_usuario','borrado_usuario','id_rol'),
						'EDIT' => array('dni_usuario','usuario','passwd_usuario','borrado_usuario','id_rol'),
						'DELETE' => array('dni_usuario')
						);

		$this->modelo = $this->crearModelOne('usuario');

	}

}