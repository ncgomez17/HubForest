<?php

class apptestNoRest{

	var $cliente;
	var $resultadoTest;

	function __construct(){

		// inicializar
		$this->cliente = $this->conectarCurl();
		$this->resultadoTest = array();
		include_once './Comun/config.php';

	}

	function conectarCurl(){

		$cliente = curl_init();
		return $cliente;
		
	}

	function desconectarCurl($cliente){

		curl_close($cliente);
		
	}

	function peticionCurl($cliente, $parametros){

		curl_setopt($cliente, CURLOPT_URL, urlnoRest);
		curl_setopt($cliente, CURLOPT_HEADER, 0);
		curl_setopt($cliente, CURLOPT_POST, True);
		curl_setopt($cliente, CURLOPT_POSTFIELDS, $parametros);
		curl_setopt($cliente, CURLOPT_RETURNTRANSFER, True); 

		$result = curl_exec($cliente); // obtengo un json

		if (curl_error($cliente)) { 
			echo 'Error: '.curl_e($cliente); 
		}
		else{
			
			$resp = json_decode($result); // convierto en un stdClass
			$resp = (array)$resp; //convierto en array
			return $resp;

		}	

	}

	function hacerPrueba($POST, $entidad, $accion, $tipo, $prueba, $codeEsperado){


		$resp = $this->peticionCurl($this->cliente, $POST);

		if ($codeEsperado === $resp['code']) { $exito = 1; } else { $exito = 0; }

		$resultadoTestIndividual = array(
			'entidad' => $entidad,
			'accion' => $accion,
			'tipo' => $tipo,
			'prueba' => $prueba,
			'datos' => $POST,
			'RespEsperada' => $codeEsperado,
			'RespObtenida' => $resp['code'],
			'exito' => $exito
		);

		array_push($this->resultadoTest, $resultadoTestIndividual);
	}

	
	function numeroFallosPruebas(){

		$numeroPruebas = count($this->resultadoTest);
		$contadorFallos = 0;
		foreach ($this->resultadoTest as $test){
			if ($test['exito'] === 0){
				$contadorFallos++;
			}
		}

		return $contadorFallos;
	}


	function devolverTestRealizado(){
		return $this->resultadoTest;
	}

}
?>