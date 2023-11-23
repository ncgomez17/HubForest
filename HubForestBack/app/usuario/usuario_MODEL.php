<?php

include_once './Base/ModelBase.php';

class usuario_MODEL extends ModelBase{


	//METODOS
	// tabla tabla
	// clave array(clavestabla)
	// foraneas array(tablaforanea => clavetablaforanea)
	function __construct(){

		$this->tabla = 'usuario';
		$this->clave = array('dni');
		$this->foraneas = array('rol'=>'id_rol');
		$this->autoincrement = array();
	}

	function cambiar_contrasena(){
		$this->mapping = new mapping($this->tabla);
		$query = "UPDATE usuario SET contrasena = '".$_POST['contrasena']."' WHERE (dni = '".$_POST['dni']."')";
		$result = $this->mapping->lanzarquery($query);
		return $result;
	}



}
?>
