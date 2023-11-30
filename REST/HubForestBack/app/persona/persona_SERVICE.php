<?php

include_once './Base/appServiceBase.php';

class persona_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('dni', 'nombre_persona', 'apellidos_persona','fechaNacimiento_persona', 'direccion_persona','telefono_persona','email_persona','foto_persona');

		$this->listaAtributosSelect = array('dni', 'nombre_persona', 'apellidos_persona','fechaNacimiento_persona', 'direccion_persona','telefono_persona','email_persona','foto_persona');

		$this->notnull =array(
						'ADD'=>array('dni', 'nombre_persona', 'apellidos_persona','fechaNacimiento_persona', 'direccion_persona','telefono_persona','email_persona'),
						'EDIT'=>array('dni', 'nombre_persona', 'apellidos_persona','fechaNacimiento_persona', 'direccion_persona','telefono_persona','email_persona'),
						'DELETE'=>array('dni')
					);

		$this->modelo = $this->crearModelOne('persona');


	}

	function modificacion_atributos(){

		if ((isset($_POST['fechaNacimiento_persona'])) && ($_POST['fechaNacimiento_persona'] != '')){
			$_POST['fechaNacimiento_persona'] = date("Y-m-d", strtotime($_POST['fechaNacimiento_persona']));
		}
		
	}

/*

	function uploadFoto(){

		if ((isset($_FILES)) && (count($_FILES)>0)){
			
	    	$code = '';
	    	$file_name = $_FILES['name'];
	    	$file_size =$_FILES['size'];
		    $file_tmp =$_FILES['tmp_name'];
		    $file_type=$_FILES['type'];
		    $file_ext = explode('.',$file_name);
			$file_ext = end($file_ext);
		    $file_ext = strtolower($file_ext);
			      
	      	$extensions= array("jpg","png");
	      
	    	if(in_array($file_ext,$extensions)=== false){
		    	$code="foto_personaExtensionError";
		    }
		      
		    if($file_size > 2097152){
		    	$code='foto_personaSizeError';
		    }
	      
		    if($code==''){
		    	move_uploaded_file($file_tmp,"images/".$file_name);
		    	$this->modelo->foto_persona = $file_name;
		    	return true;
		    }else{
		    	$this->feedback['ok'] = false;
				$this->feedback['code'] = $code; //error upload foto
				$this->feedback['resource'] = $_POST;	
				return false;
	    	}
   		}
   		else{
   			return true;
   		}
	}


	
	function ADD(){

		if ($this->existe_dni_en_persona()){ //existe el usuario
			$this->feedback['ok'] = false;
			$this->feedback['code'] = 'DNI_PERSONA_YA_EXISTE'; //usuario ya existe
			$this->feedback['resource'] = $_POST;
		}
		else{
			if ($this->existe_email_en_persona()){ //el email ya existe
				$this->feedback['ok'] = false;
				$this->feedback['code'] = 'EMAIL_PERSONA_YA_EXISTE'; //email ya existe
				$this->feedback['resource'] = $_POST;
			}
			else{
				if ($this->uploadFoto()){
					$this->modelo->ADD();
					if ($this->modelo->feedback['ok']){
						$this->feedback['ok'] = true;
						$this->feedback['code'] = 'PERSONA_INSERTAR_OK'; //insertado con exito
					}
					else{
						if ($this->modelo->feedback['code'] != '00000') //sino es fallo conexion gestor
							$this->feedback['ok'] = false;
							$this->feedback['code'] = 'ERROR_INSERTAR_PERSONA'; //insercion fallida
							$this->feedback['resource'] = $_POST;
					}
				}
			}
		}
		return $this->feedback;

	}

*/	


}
?>
