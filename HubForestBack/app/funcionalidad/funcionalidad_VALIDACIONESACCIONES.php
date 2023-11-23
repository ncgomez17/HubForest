<?php

	function VALIDACION_ACCION_ADD_funcionalidad($valores){

		/* id_accion existe en funcionalidad
		$res = devuelvoFalseSicomprobar('existe','funcionalidad','id_funcionalidad',$valores,literal['id_funcionalidad_EXISTE_en_funcionalidad_KO']);
		if ($res['ok'] === false){
			return $res;
		}*/
		
		return true;
	
	}

	function VALIDACION_ACCION_EDIT_funcionalidad($valores){

		$misfuncionalidadesprohibidas = array(1,2,3,4,5,6,7);
		if (in_array($valores['id_funcionalidad'],$misfuncionalidadesprohibidas)) {
			$res['ok'] = false;
			$res['code'] = literal['no_puede_editar_funcionalidades_admin'];
			return $res;
		}

		// el id_funcionalidad no existe en funcionalidad
		$res = devuelvoFalseSicomprobar('noexiste','funcionalidad','id_funcionalidad',$valores,literal['id_funcionalidad_NO_EXISTE_en_funcionalidad_KO']);
		if ($res['ok'] === false){
			return $res; 
		}

		return true;

	}

	function VALIDACION_ACCION_DELETE_funcionalidad($valores){

		$misfuncionalidadesprohibidas = array(1,2,3,4,5,6,7);
		if (in_array($valores['id_funcionalidad'],$misfuncionalidadesprohibidas)) {
			$res['ok'] = false;
			$res['code'] = literal['no_puede_borrar_funcionalidades_admin'];
			return $res;
		}

		// no borrar, el funcionalidad existe en rolfuncionalidadaccion
		$res = devuelvoFalseSicomprobar('existe','rolaccionfuncionalidad','id_funcionalidad',$valores,literal['id_funcionalidad_EXISTE_en_rolaccionfuncionalidad_KO']);
		if ($res['ok'] === false){
			return $res; 
		}
		
		// el id_funcionalidad no existe en funcionalidad
		$res = devuelvoFalseSicomprobar('noexiste','funcionalidad','id_funcionalidad',$valores,literal['id_funcionalidad_NO_EXISTE_en_funcionalidad_KO']);
		if ($res['ok'] === false){
			return $res; 
		}
		
		return true;

	}



?>