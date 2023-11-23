<?php

	function VALIDACION_ACCION_ADD_usuario($valores){

		// dni no existe en persona
		$res = devuelvoFalseSicomprobar('noexiste','persona','dni',$valores,literal['dni_NO_EXISTE_en_persona_KO']);
		if ($res['ok'] === false){
			return $res;
		}

		// dni ya existe en usuario
		$res = devuelvoFalseSicomprobar('existe','usuario','dni',$valores,literal['dni_EXISTE_en_usuario_KO']);
		if ($res['ok'] === false){
			return $res;
		}

		// usuario existe en usuario
		$res = devuelvoFalseSicomprobar('existe','usuario','usuario',$valores, literal['usuario_EXISTE_en_usuario_KO']);
		if ($res['ok'] === false){
			return $res;
		}	

		// id_rol no existe en rol
		$res = devuelvoFalseSicomprobar('noexiste','rol','id_rol',$valores, literal['id_rol_NO_EXISTE_en_rol_KO']);
		if ($res['ok'] === false){
			return $res;
		}

		return true;
	
	}

	function VALIDACION_ACCION_EDIT_usuario($valores){

		if ($valores['dni']=='11111111H'){
			$res['ok'] = false;
			$res['code'] = literal['admin_no_se_puede_modificar_KO'];
			return $res; 
		}

		$res = devolver('usuario', array('usuario'=>$valores['usuario'])); //hacer search_by por usuario
		if ($res['code'] == 'RECORDSET_DATOS'){ // si existe
			if (!($valores['dni'] === $res['resource'][0]['dni'])){ //comprobar que el dni es distinto al que viene del formulario
				$res['ok'] = false;
				$res['code'] = literal['usuario_EXISTE_en_usuario_KO'];
				return $res; // si es distinto ya existe el usuario y devolver error
			}
		} // si es igual que el dni que viene se esta modificando la tupla correcta
		
		// id_rol no existe en rol
		$res = devuelvoFalseSicomprobar('noexiste','rol','id_rol',$valores, literal['id_rol_NO_EXISTE_en_rol_KO']);
		if ($res['ok'] === false){
			return $res;
		}

		return true;

	}


	function VALIDACION_ACCION_DELETE_usuario($valores){

		if ($valores['dni']=='11111111H'){
			$res['ok'] = false;
			$res['code'] = literal['admin_no_se_puede_borrar_KO'];
			return $res; 
		}
		
		// dni no existe en usuario
		$res = devuelvoFalseSicomprobar('noexiste','usuario','dni',$valores,literal['dni_NO_EXISTE_en_usuario_KO']);
		if ($res['ok'] === false){
			return $res;
		}
		
		return true;

	}



?>