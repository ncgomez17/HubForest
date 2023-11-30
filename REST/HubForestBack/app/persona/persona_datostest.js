const persona_datostest= {
		0:{
			valores : {'controlador':'persona','action':'ADD',
				'dni': '99', 
				'nombre_persona': 'Nombre9', 
				'apellidos_persona': 'Apellidos9',
				'fechaNacimiento_persona': '09/09/9999', 
				'direccion_persona': 'Direccion9',
				'telefono_persona': '999999999',
				'email_persona': '99@99.99',
				'foto_persona': 'Foto9.png'
			},
			condicion : {'valor':'dni_EXISTE_en_persona_KO'}
		},
		1:{
			valores : {'controlador':'persona','action':'ADD',
				'dni': '88', 
				'nombre_persona': 'Nombre9', 
				'apellidos_persona': 'Apellidos9',
				'fechaNacimiento_persona': '09/09/9999', 
				'direccion_persona': 'Direccion9',
				'telefono_persona': '999999999',
				'email_persona': '88@88.88',
				'foto_persona': 'Foto9.png'
			},
			condicion : {'valor':'SQL_OK'}
		},
		2:{
			valores : {'controlador':'persona','action':'DELETE','dni': '88'},
			condicion : {'valor':'SQL_OK'}
		},
		3:{
			valores : {'controlador':'persona','action':'DELETE','dni': '99'},
			condicion : {'valor':'SQL_OK'}
		}
}

