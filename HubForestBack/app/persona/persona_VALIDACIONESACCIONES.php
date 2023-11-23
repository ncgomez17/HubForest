<?php

	function VALIDACION_ACCION_ADD_persona($valores){

		// dni existe en persona
		$res = devuelvoFalseSicomprobar('existe','persona','dni',$valores,literal['dni_EXISTE_en_persona_KO']);
		if ($res['ok'] === false){
			return $res;
		}

		// email existe en persona
		$res = devuelvoFalseSicomprobar('existe','persona','email_persona',$valores,literal['email_EXISTE_en_persona_KO']);
		if ($res['ok'] === false){
			return $res;
		}

		return true;
	
	}

	function VALIDACION_ACCION_EDIT_persona($valores){

		if ($valores['dni']=='11111111H'){
			$res['ok'] = false;
			$res['code'] = literal['admin_no_se_puede_modificar_KO'];
			return $res; 
		}

		// dni no existe en persona
		$res = devuelvoFalseSicomprobar('noexiste','persona','dni',$valores,literal['dni_NO_EXISTE_en_persona_KO']);
		if ($res['ok'] === false){
			return $res;
		}

		$res = devolver('persona', array('email_persona'=>$valores['email_persona'])); //hacer search_by por email
		if ($res['code'] == 'RECORDSET_DATOS'){ // si existe
			if (!($valores['dni'] === $res['resource'][0]['dni'])){ //comprobar que el dni es distinto al que viene del formulario
				$res['ok'] = false;
				$res['code'] = literal['email_EXISTE_en_persona_KO'];
				return $res; // si es distinto ya existe el email y devolver error
			}
		} // si es igual que el dni que viene se esta modificando la tupla correcta


		return true;

	}

	function VALIDACION_ACCION_DELETE_persona($valores){

		if ($valores['dni']=='11111111H'){
			$res['ok'] = false;
			$res['code'] = literal['admin_no_se_puede_borrar_KO'];
			return $res; 
		}

		// dni no existe en persona
		$res = devuelvoFalseSicomprobar('noexiste','persona','dni',$valores,literal['dni_NO_EXISTE_en_persona_KO']);
		if ($res['ok'] === false){
			return $res;
		}
		
		// dni existe en usuario
		$res = devuelvoFalseSicomprobar('existe','usuario','dni',$valores,literal['dni_EXISTE_en_usuario_KO']);
		if ($res['ok'] === false){
			return $res;
		}
		
		return true;

	}



?>