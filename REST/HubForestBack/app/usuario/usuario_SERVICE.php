<?php

include_once './Base/appServiceBase.php';

class usuario_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('id','correo','nombre','password','rol');

		$this->listaAtributosSelect = array('id','correo','nombre','password','rol');

		$this->notnull = array(
						'ADD' => array(),
						'EDIT' => array(),
						'DELETE' => array('id')
						);

		$this->modelo = $this->crearModelOne('usuario');

	}

	function add(){
		if($this->modelo->correo != null && $this->modelo->nombre != null &&
		$this->modelo->password && $this->modelo->rol != null){


			$this->modelo->ADD();

		}
	}
	function delete(){
		if($this->modelo->id != null){
			$this->modelo->DELETE();

		}
	}
	function edit(){
		if($this->modelo->id != null && $this->modelo->correo != null && $this->modelo->nombre != null &&
		$this->modelo->password && $this->modelo->rol != null){
			$this->modelo->EDIT();

		}
	}
	function search(){
		$res = $this->modelo->SEARCH();
		return $res;
	}
	function searchBy(){
    $res = $this->modelo->SEARCH_BY();
		return $res;
	}

}