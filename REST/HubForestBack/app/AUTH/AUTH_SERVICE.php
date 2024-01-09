<?php

include_once './Base/appServiceBase.php';

class AUTH_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('id','correo','nombre','password','rol');

		$this->listaAtributosSelect = array('id','correo','nombre','password','rol');

		$this->notnull = array(
						'LOGIN'=>array('nombre', 'password'),
						'DESCONECTAR'=>array('nombre'),
						'CAMBIAR_CONTRASENA'=>array('nombre','password'),
						'REGISTRAR'=>array('correo','nombre','password','rol')
						);

		$this->modelo = $this->crearModelOne('usuario');

	}


	function cargarTokenCabecera(){

		$tokenFront = '';	

		foreach(apache_request_headers() as $header =>$value){
			if($header == 'Authorization')
				$tokenFront = $value;
		}	
		
		return $tokenFront;

	}

	function LOGIN(){
		include_once './app/usuario/usuario_SERVICE.php';
		$_POST['controlador'] = 'usuario';
		$_POST['action'] = 'SEARCH_BY'; 
		$usuario = new usuario_SERVICE;
		$respuesta = $usuario->ejecutar();

		if (!(empty($respuesta['resource']))){

			$fila = $respuesta['resource'][0];
			if ($fila['password'] == $_POST['password']){

				//$usuarioDatos = ['usuario' => $_POST['usuario'],'contrasena' => $_POST['contrasena']];
				include_once "./Base/JWT/token.php";
				$token = MiToken::creaToken($_POST['nombre'],$_POST['password'] );

				$feedback['ok'] = true;
				$feedback['code'] = literal['LOGIN_OK'];
				$feedback['resource'] = $token;

			}
			else{
				$feedback['ok'] = false;
				$feedback['code'] = literal['USUARIO_PASS_KO'];
				$feedback['resource'] = array($_POST['nombre'],$_POST['password']);
			}
		}
		else{
			$feedback['ok'] = false;
			$feedback['code'] = literal['USUARIO_LOGIN_KO'];
			$feedback['resource'] = array($_POST['nombre'],$_POST['password']);
		}


		return $feedback;

	}

	function REGISTRAR(){
			include_once './app/usuario/usuario_SERVICE.php';
			$_POST['controlador'] = 'usuario';
			$_POST['action'] = 'ADD';
			$_POST['rol'] = 'Usuario';
			$usuario = new usuario_SERVICE;
			$res = $usuario->ejecutar();

			if ($res['ok'] === true){ // no hay error insertando usuario
				$res = $usuario->cambiar_contrasena();
				if ($res['ok'] === true){ // no hay error cambiando la contraseña
					$res['code'] = literal['REGISTRAR_OK'];
				}
				else //error cambiando contraseña
				{
					$res['code'] = literal['CAMBIAR_contrasena_KO'];
				}
			}
			else{ //hay error insertando usuario
				$_POST['action'] = 'DELETE';
				$persona->ejecutar();
			}

		$res['resource'] = '';
		return $res;
	}

	function CAMBIAR_CONTRASENA(){
		
		include_once './app/usuario/usuario_SERVICE.php';
		$_POST['controlador'] = 'usuario';
		$usuario = new usuario_SERVICE;
		$res = $usuario->cambiar_contrasena();
		if ($res['ok'] === true){ // no hay error cambiando la contraseña
			$res['code'] = literal['CAMBIAR_contrasena_OK'];
		}
		else //error cambiando contraseña
		{
			$res['code'] = literal['CAMBIAR_contrasena_KO'];
		}
		return $res;
	
	}

	function validar_token(){

		include_once "./Base/JWT/token.php";
		$current_token = $this->cargarTokenCabecera();
		$resultado = MiToken::devuelveToken($current_token);
		$password = $resultado->data->id;
		$login = $resultado->data->name;
		//echo 'comprobar en la bd si son correctos';
	}

}

?>
