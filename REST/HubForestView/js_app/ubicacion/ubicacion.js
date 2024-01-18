async function getListUbicaciones() {
    return peticionBackGeneral('', 'ubicacion', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaUbicacion(response['resource']) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamUbicaciones(latitud, longitud) {
    const ubicacion = {
        latitud: latitud,
        longitud: longitud,
    };
    return peticionBackGeneral('', 'ubicacion', 'SEARCH_BY', ubicacion)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaUbicacion(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamUbicaciones_search(latitud, longitud) {
    const ubicacion = {
        latitud: latitud,
        longitud: longitud
    };
    return peticionBackGeneral('', 'ubicacion', 'SEARCH', ubicacion)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaUbicacion(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function addUbicacion(latitud, longitud) {
    const ubicacion = {
        latitud: latitud,
        longitud: longitud
    };

    return peticionBackGeneral('', 'ubicacion', 'ADD', ubicacion)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function editUbicacion(idubicacion, latitud, longitud) {
    
    const ubicacion = {
        latitud: latitud,
        longitud: longitud
    };


    return peticionBackGeneral('', 'ubicacion', 'EDIT', ubicacion)
        .then(response => {
            location.reload();
            
            return { status: 'OK', data: response }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function deleteUbicacion(idubicacion) {
  
    return peticionBackGeneral('', 'ubicacion', 'DELETE', {'idubicacion': idubicacion})
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function construyeTablaUbicacion(filas) {
    let filasTabla = '';
    let tipo = "'Editar ubicación'";
    let element = document.getElementById("datosUbicaciones");


    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    $("#datosUbicaciones").html("");

    filas.forEach(fila => {
        let atributosTabla = ["'" + fila.idubicacion + "'", "'" + fila.latitud + "'", "'" + fila.longitud + "'"];
        let botonEdit='<button class="btn btn-info" id="editarubicacion" onclick="mostrarModal(' + tipo + ',' + atributosTabla + ')">Editar</button>';

        filasTabla += '<tr> <td>' + fila.idubicacion + 
                    '</td> <td>' + fila.latitud + 
                    '</td> <td>' + fila.longitud +
                    '</td> <td class="text-center">' + botonEdit +
                    '</td> <td class="text-center"><button class="btn btn-danger" id="borrarubicacion" onclick="mostrarBorrar(' + fila.idubicacion + ')">Eliminar</button>'
                    
                    '</td>  </tr>';
    });

    $("#datosUbicaciones").append(filasTabla);
    cerrarModal()
}

function getAtributos(tipo) {
    let idUbicacion = document.getElementById("idUbicacion").value
    let latitud = document.getElementById("latitud").value
    let longitud = document.getElementById("longitud").value
    
    switch (tipo) {
        case "Editar":
            editMetodologia(idUbicacion, latitud, longitud)
            break;
        case "Añadir":
            addMetodologia(latitud, longitud)
            break;
        case "Buscar":
            getListByParamMetodologias_search(latitud, longitud)
            break;
    }
}

function mostrarModal(tipo, idUbicacion = null, latitud = null, longitud = null) {
    // Ventana modal
    document.getElementById("ventanaModal").style.display = "block";
    document.getElementById("Titulo").innerHTML = '<h2>' + tipo + '</h2>';
    document.getElementById("aceptar").innerHTML = tipo;

    if (tipo.includes("Editar")) {
        $("#formUbicacion").attr('action', 'javascript:getAtributos("Editar");');
    
        $("#idUbicacion").val(idUbicacion)
        $("#latitud").val(latitud)
        $("#longitud").val(longitud)
    } else {
        if (tipo.includes("Buscar")) {
            document.getElementById("latitud").required = false;
            document.getElementById("longitud").required = false;


            $("#formUbicacion").attr('action', 'javascript:getAtributos("Buscar");')
        } else {
            document.getElementById("latitud").required = true;
            document.getElementById("longitud").required = true;
            $("#formUbicacion").attr('action', 'javascript:getAtributos("Añadir");')
        }

        $("#idUbicacion").val('')
        $("#latitud").val('')
        $("#longitud").val('')

    }
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
    $("#formBorrarUbicacion").attr('action' , 'javascript:borrar();');
}

function borrar(){
    let idUbicacion = document.getElementById("idBorrar").value;
    deleteUbicacion(idUbicacion);
}