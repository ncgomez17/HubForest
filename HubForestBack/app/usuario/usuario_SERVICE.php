<?php

include_once './Base/appServiceBase.php';

class usuario_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('dni', 'usuario', 'id_rol');

		$this->listaAtributosSelect = array('dni', 'usuario', 'id_rol');

		$this->notnull = array(
						'ADD'=>array('dni','usuario', 'id_rol'),
						'EDIT'=>array('dni','usuario', 'id_rol'),
						'DELETE'=>array('dni'),
						'CAMBIAR_CONTRASENA'=>array('dni','contrasena')
						);

		$this->modelo = $this->crearModelOne('usuario');



	}

	function cambiar_contrasena(){
		$res = $this->modelo->cambiar_contrasena();
		return $res;
	}
	


}
?>
