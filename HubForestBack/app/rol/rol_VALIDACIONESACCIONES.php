<?php

	function VALIDACION_ACCION_ADD_rol($valores){

		/* id_rol existe en rol
		$res = devuelvoFalseSicomprobar('existe','rol','id_rol',$valores,literal['id_rol_EXISTE_en_rol_KO']);
		if ($res['ok'] === false){
			return $res;
		}*/
		
		return true;
	
	}

	function VALIDACION_ACCION_EDIT_rol($valores){

		if (($valores['id_rol'] == 0) || ($valores['id_rol'] == 1)){
			$res['ok'] = false;
			$res['code'] = literal['no_puede_editar_rol_adminybasico'];
			return $res;
		}

		// el id_rol no existe en rol
		$res = devuelvoFalseSicomprobar('noexiste','rol','id_rol',$valores,literal['id_rol_NO_EXISTE_en_rol_KO']);
		if ($res['ok'] === false){
			return $res; 
		}

		return true;

	}

	function VALIDACION_ACCION_DELETE_rol($valores){

		if (($valores['id_rol'] == 0) || ($valores['id_rol'] == 1)){
			$res['ok'] = false;
			$res['code'] = literal['no_puede_borrar_rol_adminybasico'];
			return $res;
		}

		// no borrar, el rol existe en usuario
		$res = devuelvoFalseSicomprobar('existe','usuario','id_rol',$valores,literal['id_rol_EXISTE_en_usuario_KO']);
		if ($res['ok'] === false){
			return $res; 
		}
		
		// el id_rol no existe en rol
		$res = devuelvoFalseSicomprobar('noexiste','rol','id_rol',$valores,literal['id_rol_NO_EXISTE_en_rol_KO']);
		if ($res['ok'] === false){
			return $res; 
		}

		// no borrar, el rol existe en rolaccionfuncionalidad
		$res = devuelvoFalseSicomprobar('existe','rolaccionfuncionalidad','id_rol',$valores,literal['id_rol_EXISTE_en_rolaccionfuncionalidad_KO']);
		if ($res['ok'] === false){
			return $res; 
		}
		
		return true;

	}



?>