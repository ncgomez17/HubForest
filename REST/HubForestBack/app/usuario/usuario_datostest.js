const usuario_datostest= {
		0:{
			valores : {'controlador':'usuario','action':'ADD','dni' : '11111111B','usuario':'usuario999','id_rol':'0'},
			condicion : {'valor':'dni_NO_EXISTE_en_persona_KO'}
		},
		1:{
			valores : {'controlador':'usuario','action':'ADD','dni' : '99','usuario':'usuario99','id_rol':'0'},
			condicion : {'valor':'dni_EXISTE_EN_usuario_KO'}
		},
		2:{
			valores : {'controlador':'usuario','action':'SEARCH'},
			condicion : {'valor':'RECORDSET_DATOS'}
		},
		3:{
			valores : {'controlador':'usuario','action':'SEARCH','usuario':'9999'},
			condicion : {'valor':'RECORDSET_VACIO'}
		},
		4:{
			valores : {'controlador':'usuario','action':'DELETE','dni':'99'},
			condicion : {'valor':'SQL_OK'}
		}
	}