<?php

	function VALIDACION_ACCION_ADD_funcionalidad_accion($valores){

		// id_funcionalidad NO_existe en funcionalidad
		$res = devuelvoFalseSicomprobar('noexiste','funcionalidad','id_funcionalidad',$valores,literal['id_funcionalidad_NO_EXISTE_en_funcionalidad_KO']);
		if ($res['ok'] === false){
			return $res;
		}

		// id_accion NO_existe en accion
		$res = devuelvoFalseSicomprobar('noexiste','accion','id_accion',$valores,literal['id_accion_NO_EXISTE_en_accion_KO']);
		if ($res['ok'] === false){
			return $res;
		}
		
		return true;
	
	}

	function VALIDACION_ACCION_EDIT_funcionalidad_accion($valores){

		return true;

	}

	function VALIDACION_ACCION_DELETE_funcionalidad_accion($valores){

		$misfuncionalidadesprohibidas = array(1,2,3,4,5,6,7);
		if (in_array($valores['id_funcionalidad'],$misfuncionalidadesprohibidas)) {
			$res['ok'] = false;
			$res['code'] = literal['no_puede_borrar_funcionalidades_admin'];
			return $res;
		}

		// no borrar, la funcionalidad_accion existe en rolfuncionalidadaccion
		$res = devuelvoFalseSicomprobar('existe','rolaccionfuncionalidad','',$valores,literal['id_funcionalidad_accion_EXISTE_en_rolaccionfuncionalidad_KO']);
		if ($res['ok'] === false){
			return $res; 
		}
		
		// la funcionalidad_accion no existe en funcionalidad
		$res = devuelvoFalseSicomprobar('noexiste','funcionalidad_accion','',$valores,literal['id_funcionalidad_accion_NO_EXISTE_en_funcionalidad_accion_KO']);
		if ($res['ok'] === false){
			return $res; 
		}
		
		return true;

	}



?>