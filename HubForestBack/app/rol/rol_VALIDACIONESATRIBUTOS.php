<?php

	function VALIDACION_ATRIBUTOS_ADD_rol($valores){

		return true;
	
	}

	function VALIDACION_ATRIBUTOS_EDIT_rol($valores){

		return true;

	}

	function VALIDACION_ATRIBUTOS_DELETE_rol($valores){

		/*if ($valores['id_rol'] == ''){
			$respuesta['ok'] = false;
			$respuesta['code'] = 'id_rol_es_nulo_KO';
			return $respuesta;
		}*/

		
		return true;

	}



?>