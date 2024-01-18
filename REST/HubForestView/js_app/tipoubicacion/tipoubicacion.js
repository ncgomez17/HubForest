async function getListTipoUbicacion() {
    return peticionBackGeneral('', 'tipoubicacion', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaTipoUbicacion(response['resource']) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamTipoUbicacion(tipoubicacion) {
    const tUbicacion = {
        tipoubicacion: tipoubicacion,
    };
    return peticionBackGeneral('', 'tipoubicacion', 'SEARCH_BY', tUbicacion)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaTipoUbicacion(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamTipoUbicacion_search(tipoubicacion) {
    const tUbicacion = {
        tipoubicacion: tipoubicacion
    };
    return peticionBackGeneral('', 'tipoubicacion', 'SEARCH', tUbicacion)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaTipoUbicacion(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function addTipoUbicacion(tipoubicacion) {
    const tUbicacion = {
        tipoubicacion: tipoubicacion
    };

    return peticionBackGeneral('', 'tipoubicacion', 'ADD', tUbicacion)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function editTipoUbicacion(idtipoubicacion, tipoubicacion) {
    const tUbicacion = {
        idtipoubicacion: idtipoubicacion,
        tipoubicacion: tipoubicacion
    };

    return peticionBackGeneral('', 'tipoubicacion', 'EDIT', tUbicacion)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function deleteTipoUbicacion(tipoubicacion) {
  
    return peticionBackGeneral('', 'tipoubicacion', 'DELETE', {'idtipoubicacion': tipoubicacion})
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function construyeTablaTipoUbicacion(filas) {
    let filasTabla = '';
    let tipo = "'Editar tipo ubicación'";
    let element = document.getElementById("datosTipoUbicacion");

    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    $("#datosTipoUbicacion").html("");

    filas.forEach(fila => {
        let atributosTabla = ["'" + fila.idtipoubicacion + "'", "'" + fila.tipoubicacion +"'"];
        let botonEdit='<button class="btn btn-info" id="editarTipoUbicacion" onclick="mostrarModal(' + tipo + ',' + atributosTabla + ')">Editar</button>';

        filasTabla += '<tr> <td>' + fila.idtipoubicacion +
                    '</td> <td>' + fila.tipoubicacion + 
                    '</td> <td class="text-center">' + botonEdit +
                    '</td> <td class="text-center"><button class="btn btn-danger" id="borrarTipoUbicacion" onclick="mostrarBorrar(' + fila.idtipoubicacion + ')">Eliminar</button>'
                    
                    '</td>  </tr>';
    });

    $("#datosTipoUbicacion").append(filasTabla);
    cerrarModal()
}

function getAtributos(tipo) {
    let idtipoubicacion = document.getElementById("idtipoubicacion").value
    let tipoubicacion = document.getElementById("tipoubicacion").value


    switch (tipo) {
        case "Editar":
            editTipoUbicacion(idtipoubicacion, tipoubicacion)
            break;
        case "Añadir":
            addTipoUbicacion(tipoubicacion)
            break;
        case "Buscar":
            getListByParamTipoUbicacion_search(tipoubicacion)
            break;
    }
}

function mostrarModal(tipo, idTipoUbicacion = null, tipoubicacion = null) {
    // Ventana modal
    document.getElementById("ventanaModal").style.display = "block";
    document.getElementById("Titulo").innerHTML = '<h2>' + tipo + '</h2>';
    document.getElementById("aceptar").innerHTML = tipo;

    if (tipo.includes("Editar")) {
        $("#formTipoUbicacion").attr('action', 'javascript:getAtributos("Editar");');
    
        $("#idtipoubicacion").val(idTipoUbicacion)
        $("#tipoubicacion").val(tipoubicacion)

    } else {
        if (tipo.includes("Buscar")) {
            document.getElementById("tipoubicacion").required = false;

            $("#formTipoUbicacion").attr('action', 'javascript:getAtributos("Buscar");')
        } else {
            document.getElementById("tipoubicacion").required = true;
            $("#formTipoUbicacion").attr('action', 'javascript:getAtributos("Añadir");')
        }

        $("#idtipoubicacion").val('')
        $("#tipoubicacion").val('')
    }
}

function cerrarModal() {
    // Ventana modal
    var modal = document.getElementById("ventanaModal");
    modal.style.display = "none"

    
}

function mostrarBorrar(id){
    // Ventana modal
    document.getElementById("comprobarBorrar").style.display = "block";
    $("#idBorrar").val(id)
    $("#formBorrarTipoUbicacion").attr('action' , 'javascript:borrar();');
}

function borrar(){
    let idTipoUbicacion = document.getElementById("idBorrar").value
    deleteTipoUbicacion(idTipoUbicacion)
}