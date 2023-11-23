<?php

	function VALIDACION_ACCION_ADD_rolaccionfuncionalidad($valores){

		// id_rol, id_accion, id_funcionalidad juntos ya existen 
		$res = devuelvoFalseSicomprobar('existe','rolaccionfuncionalidad','',$valores,literal['permiso_EXISTE_en_rolaccionfuncionalidad_KO']);
		if ($res['ok'] === false){
			return $res;
		}

		// id_rol no existe en rol
		$res = devuelvoFalseSicomprobar('noexiste','rol','id_rol',$valores,literal['id_rol_NO_EXISTE_en_rol_KO']);
		if ($res['ok'] === false){
			return $res;
		}

		// id_accion no existe en accion
		$res = devuelvoFalseSicomprobar('noexiste','accion','id_accion',$valores,literal['id_accion_NO_EXISTE_en_accion_KO']);
		if ($res['ok'] === false){
			return $res;
		}

		// id_funcionalidad no existe en funcionalidad
		$res = devuelvoFalseSicomprobar('noexiste','funcionalidad','id_funcionalidad',$valores,literal['id_funcionalidad_NO_EXISTE_en_funcionalidad_KO']);
		if ($res['ok'] === false){
			return $res;
		}

		return true;
	
	}

	function VALIDACION_ACCION_EDIT_rolaccionfuncionalidad($valores){

		// no se permite edit de rolaccionfuncionalidad
		//
			$res['ok'] = false;
			$res['code'] = literal['prohibido_edit_rolaccionfuncionalidad'];
			return $res;
		//
		//

		// error intentar editar admin
		if ($valores['id_rol'] == 0){
			$res['ok'] = false;
			$res['code'] = literal['no_puede_editar_permiso_admin'];
			return $res;
		}

		return true;

	}

	function VALIDACION_ACCION_DELETE_rolaccionfuncionalidad($valores){

		// error intentar borrar admin
		if ($valores['id_rol'] == 0){
			$res['ok'] = false;
			$res['code'] = literal['no_puede_borrar_permiso_admin'];
			return $res;
		}

		// id_rol, id_accion, id_funcionalidad juntos no existen 
		$res = devuelvoFalseSicomprobar('noexiste','rolaccionfuncionalidad','',$valores,literal['permiso_NO_EXISTE_en_rolaccionfuncionalidad_KO']);
		if ($res['ok'] === false){
			return $res;
		}


		return true;

	}



?>