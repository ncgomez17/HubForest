<?php

include_once './Base/appServiceBase.php';

class programa_SERVICE extends appServiceBase{

	public $modelo;

	//METODOS

	function __construct(){

		parent::__construct();

	}

	function inicializarRest(){

		$this->listaAtributos = array('id_programa','nombre_programa','acronimo_programa','nombre_original_programa','autor_programa','autor_original_programa','ano_programa','ano_original_programa','requisitos_programa','poblacion_desde_programa','poblacion_hasta_programa','unidad_poblacion','tipo_programa','tiempo_aplicacion_programa','descrip_interp_programa','fichero_programa','enlace_programa','formato_programa','modo_correccion_programa','modo_aplicacion_programa','imagen_programa');

		$this->listaAtributosSelect = array('id_programa','nombre_programa','acronimo_programa','nombre_original_programa','autor_programa','autor_original_programa','ano_programa','ano_original_programa','requisitos_programa','poblacion_desde_programa','poblacion_hasta_programa','unidad_poblacion','tipo_programa','tiempo_aplicacion_programa','descrip_interp_programa','fichero_programa','enlace_programa','formato_programa','modo_correccion_programa','modo_aplicacion_programa','imagen_programa');

		$this->notnull = array(
		'ADD' => array('nombre_programa','acronimo_programa','nombre_original_programa','autor_programa','autor_original_programa','ano_programa','ano_original_programa','requisitos_programa','poblacion_desde_programa','poblacion_hasta_programa','unidad_poblacion','tipo_programa','tiempo_aplicacion_programa','descrip_interp_programa',/*'fichero_programa',*/'enlace_programa','formato_programa','modo_correccion_programa','modo_aplicacion_programa'/*,'imagen_programa'*/),
						'EDIT' => array('nombre_programa','acronimo_programa','nombre_original_programa','autor_programa','autor_original_programa','ano_programa','ano_original_programa','requisitos_programa','poblacion_desde_programa','poblacion_hasta_programa','unidad_poblacion','tipo_programa','tiempo_aplicacion_programa','descrip_interp_programa','enlace_programa','formato_programa','modo_correccion_programa','modo_aplicacion_programa'),
						'DELETE' => array('id_programa')
						);

		$this->modelo = $this->crearModelOne('programa');
		//array de arrays(nombrecampo de nuevo fichero, nombrecampo de la bd, directorio, array extensiones, tamaño en bytes)
		$this->files = array(
						array('nuevo_fichero_programa','fichero_programa','./filesuploaded/files_fichero_programa/', array('jpg'), 200000),
						array('nuevo_imagen_programa','imagen_programa','./filesuploaded/files_imagen_programa/', array('jpg'), 200000)
					);

	}

	function ADD(){
		$respuesta = $this->modelo->ADD();
		if ($respuesta['ok']){
			
			$resp = $this->modelo->SEARCH();
			
			include './app/programa_area/programa_area_SERVICE.php';
			$programa_area = new programa_area_SERVICE();
			$programa_area->modelo->id_programa = $resp['resource'][0]['id_programa'];
			$programa_area->modelo->valores['id_programa'] = $resp['resource'][0]['id_programa'];
			foreach($_POST['area'] as $area){
				$programa_area->modelo->id_area = $area;
				$programa_area->modelo->valores['id_area'] = $area;
				$programa_area->modelo->ADD();
			}

			include './app/programa_etiqueta/programa_etiqueta_SERVICE.php';
			$programa_etiqueta = new programa_etiqueta_SERVICE();
			$programa_etiqueta->modelo->id_programa = $resp['resource'][0]['id_programa'];
			$programa_etiqueta->modelo->valores['id_programa'] = $resp['resource'][0]['id_programa'];
			foreach($_POST['etiqueta'] as $etiqueta){
				$programa_etiqueta->modelo->id_etiqueta = $etiqueta;
				$programa_etiqueta->modelo->valores['id_etiqueta'] = $etiqueta;
				$programa_etiqueta->modelo->ADD();
			}

			$respuesta['ok'] = true;
			return $respuesta;
		}
		else{
			return $respuesta;
		}
	}

	function EDIT(){
		
		$respuesta = $this->modelo->EDIT();
		$sqledit = $respuesta['resource'];
		if ($respuesta['ok']){

			include './app/programa_area/programa_area_SERVICE.php';
			$programa_area = new programa_area_SERVICE();
			$programa_area->modelo->id_programa = $_POST['id_programa'];
			$programa_area->modelo->valores['id_programa'] = $_POST['id_programa'];
			// borrar todas la tuplas de area para este programa
			$programa_area->modelo->DELETE();
			// incluir las que vienen del edit
			foreach($_POST['area'] as $area){
				$programa_area->modelo->id_area = $area;
				$programa_area->modelo->valores['id_area'] = $area;
				$programa_area->modelo->ADD();
			}
			
			include './app/programa_etiqueta/programa_etiqueta_SERVICE.php';
			$programa_etiqueta = new programa_etiqueta_SERVICE();
			$programa_etiqueta->modelo->id_programa = $_POST['id_programa'];
			$programa_etiqueta->modelo->valores['id_programa'] = $_POST['id_programa'];
			// borrar todas la tuplas de area para este programa
			$programa_etiqueta->modelo->DELETE();
			// incluir las que vienen del edit
			foreach($_POST['etiqueta'] as $etiqueta){
				$programa_etiqueta->modelo->id_etiqueta = $etiqueta;
				$programa_etiqueta->modelo->valores['id_etiqueta'] = $etiqueta;
				$programa_etiqueta->modelo->ADD();
			}
		}
		else{
			return $respuesta;
		}

		$respuesta['ok'] = true;
		$respuesta['code'] = 'SQL_OK';
		$respuesta['resource'] = $sqledit;
		return $respuesta;
	}

	function DELETE(){

		$this->modelo->DELETE();

		include './app/programa_area/programa_area_SERVICE.php';
		$programa_area = new programa_area_SERVICE();
		$programa_area->modelo->id_programa = $_POST['id_programa'];
		$programa_area->modelo->valores['id_programa'] = $_POST['id_programa'];
		// borrar todas la tuplas de area para este programa
		$programa_area->modelo->DELETE();

		include './app/programa_etiqueta/programa_etiqueta_SERVICE.php';
		$programa_etiqueta = new programa_etiqueta_SERVICE();
		$programa_etiqueta->modelo->id_programa = $_POST['id_programa'];
		$programa_etiqueta->modelo->valores['id_programa'] = $_POST['id_programa'];
		// borrar todas la tuplas de area para este programa
		$programa_etiqueta->modelo->DELETE();

		$respuesta['ok'] = true;
		$respuesta['code'] = 'SQL_OK';
		return $respuesta;
		
	}

}
