<?php

	function VALIDACION_ACCION_ADD_accion($valores){

		//TONTERIA: ES AUTOINCREMENTAL
		/* id_accion existe en accion
		$res = devuelvoFalseSicomprobar('existe','accion','id_accion',$valores, literal['id_accion_EXISTE_en_accion_KO']);
		if ($res['ok'] === false){
			return $res;
		}*/
		
		return true;
	
	}

	function VALIDACION_ACCION_EDIT_accion($valores){

		$misaccionesprohibidas = array(1,2,3,4,5,6,7);
		if (in_array($valores['id_accion'],$misaccionesprohibidas)) {
			$res['ok'] = false;
			$res['code'] = literal['no_puede_editar_acciones_admin'];
			return $res;
		}

		// el id_accion no existe en accion
		$res = devuelvoFalseSicomprobar('noexiste','accion','id_accion',$valores,literal['id_accion_NO_EXISTE_en_accion_KO']);
		if ($res['ok'] === false){
			return $res; 
		}

		return true;

	}

	function VALIDACION_ACCION_DELETE_accion($valores){

		// no borrar, el accion existe en rolfuncionalidadaccion
		$res = devuelvoFalseSicomprobar('existe','rolaccionfuncionalidad','id_accion',$valores,'id_accion_EXISTE_en_rolaccionfuncionalidad_KO');
		if ($res['ok'] === false){
			return $res; 
		}
		
		// el id_accion no existe en accion
		$res = devuelvoFalseSicomprobar('noexiste','accion','id_accion',$valores,literal['id_accion_NO_EXISTE_en_accion_KO']);
		if ($res['ok'] === false){
			return $res; 
		}
		
		return true;

	}



?>