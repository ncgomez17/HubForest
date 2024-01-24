function getListUnidades() {
    return peticionBackGeneral('', 'unidad', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaUnidad(response['resource']) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });       
}

function getListByParamUnidades(nombre, descripcion) {
    const unidad = {
        nombreunidad: nombre,
        descripcion: descripcion,
    };
    return peticionBackGeneral('', 'unidad', 'SEARCH_BY', unidad)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaUnidad(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}
  
function getListByParamUnidades_search(nombre, descripcion) {
    const unidad = {
        nombreunidad: nombre,
        descripcion: descripcion,
    };
    return peticionBackGeneral('', 'unidad', 'SEARCH', unidad)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaUnidad(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function addUnidad(nombre, descripcion, parametro) {
    const unidad = {
        nombreunidad: nombre,
        descripcion: descripcion,
        parametro: parametro
    };
  
    return peticionBackGeneral('', 'unidad', 'ADD', unidad)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function editUnidad(idUnidad, nombre, descripcion, parametro) {
    const unidad = {
        idunidad: idUnidad,
        nombreunidad: nombre,
        descripcion: descripcion,
        parametro: parametro
    };
  
    return peticionBackGeneral('', 'unidad', 'EDIT', unidad)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}
  
function deleteUnidad(idUnidad) {
    
    return peticionBackGeneral('', 'unidad', 'DELETE', {'idunidad': idUnidad})
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListParametros(parametro) {
    return peticionBackGeneral('', 'parametro', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? rellenarSelectParametro("parametro", response['resource'], parametro) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function construyeTablaUnidad(filas) {
    let filasTabla = ''
    let tipo = "'Editar unidad'"
    let element = document.getElementById("datosUnidades");
    
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
  
    $("#datosUnidades").html("");

    filas.forEach(fila => {
        var atributosTabla = ["'" + fila.idunidad + "'","'" + fila.nombreunidad + "'", "'" + fila.descripcion + "'", "'" + fila.parametro + "'"];
        var botonEdit='<button class="btn btn-info" id="editarUnidad" onclick="mostrarModal('+tipo+','+atributosTabla+')">Editar</button>'
  
        filasTabla += '<tr> <td>' + fila.idunidad + 
                '</td> <td>' + fila.nombreunidad + 
                '</td> <td>' + fila.descripcion + 
                '</td> <td>' + fila.parametro + 
                '</td> <td class="text-center">' + botonEdit +
                '</td> <td class="text-center"><button class="btn btn-danger" id="borrarUnidad" onclick="mostrarBorrar(' + fila.idunidad + ')">Eliminar</button>'
                
                '</td>  </tr>';
    });
    
    $("#datosUnidades").append(filasTabla);
    cerrarModal()
}
  
function getAtributos(tipo) {
    let idUnidad = document.getElementById("idUnidad").value
    let nombreunidad = document.getElementById("nombreunidad").value
    let descripcion = document.getElementById("descripcion").value
    let parametro = document.getElementById("parametro").value
    
    switch (tipo) {
        case "Editar":
            editUnidad(idUnidad, nombreunidad, descripcion, parametro)
            break;
        case "Añadir":
            addUnidad(nombreunidad, descripcion, parametro)
            break;
        case "Buscar":
            getListByParamUnidades_search(nombreunidad, descripcion)
            break;
    }
}

function mostrarModal(tipo, idUnidad = null, nombreunidad = null, descripcion = null, parametro = null) {
    // Ventana modal
    document.getElementById("ventanaModal").style.display = "block";
    document.getElementById("Titulo").innerHTML = '<h2>' + tipo + '</h2>';
    document.getElementById("aceptar").innerHTML = tipo;

    getListParametros(parametro)

    if (tipo.includes("Editar")) {
        $("#formUnidad").attr('action', 'javascript:getAtributos("Editar");');
    
        $("#idUnidad").val(idUnidad)
        $("#nombreunidad").val(nombreunidad)
        $("#descripcion").val(descripcion)
        $("#parametro").val(parametro)
    } else {
        if (tipo.includes("Buscar")) {
            document.getElementById("nombreunidad").required = false;
            document.getElementById("descripcion").required = false;
            document.getElementById("parametro").required = false;

            $("#formUnidad").attr('action', 'javascript:getAtributos("Buscar");')
        } else {
            document.getElementById("nombreunidad").required = true;
            document.getElementById("descripcion").required = true;
            document.getElementById("parametro").required = true;
            $("#formUnidad").attr('action', 'javascript:getAtributos("Añadir");')
        }

        $("#idUnidad").val('')
        $("#nombreunidad").val('')
        $("#descripcion").val('')
        $("#parametro").val('')
    }
}

function rellenarSelectParametro(tipo, filas, parametro) {
    let element = document.getElementById(tipo);
    let option = document.createElement('option');

    option.value = "";
    option.textContent = "-- Selecciona parámetro --";
    element.appendChild(option);

    filas.forEach(fila => {
        option = document.createElement('option');
        option.value = fila.idparametro;
        option.textContent = fila.nombreparametro;
        element.appendChild(option);
    })

    if (parametro != null) element.value = parametro;
}

function cerrarModal() {
    // Ventana modal
    var modal = document.getElementById("ventanaModal");
    modal.style.display = "none";
}

function mostrarBorrar(id){
    // Ventana modal
    document.getElementById("comprobarBorrar").style.display = "block";
    $("#idBorrar").val(id);
    $("#formBorrarUnidad").attr('action' , 'javascript:borrar();');
}

function borrar(){
    let idUnidad = document.getElementById("idBorrar").value;
    deleteUnidad(idUnidad);
}