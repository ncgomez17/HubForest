async function getListMuestreosRealizados() {
    return peticionBackGeneral('', 'muestreorealizado', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMuestreoRealizado(response['resource']) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamMuestreosRealizados(fechamuestreo, fichero, usuario, ubicacion, muestreo) {
    const muestreoRealizado = {
        fechamuestreo: fechamuestreo,
        fichero: fichero,
        usuario: usuario,
        ubicacion: ubicacion,
        muestreo: muestreo
    };
    return peticionBackGeneral('', 'muestreorealizado', 'SEARCH_BY', muestreoRealizado)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMuestreoRealizado(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamMuestreosRealizados_search(fechamuestreo, fichero, usuario, ubicacion, muestreo) {
    const muestreoRealizado = {
        fechamuestreo: fechamuestreo,
        fichero: fichero,
        usuario: usuario,
        ubicacion: ubicacion,
        muestreo: muestreo
    };
    return peticionBackGeneral('', 'muestreorealizado', 'SEARCH', muestreoRealizado)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMuestreoRealizado(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function addMuestreoRealizado(fechamuestreo, fichero, usuario, ubicacion, muestreo) {
    const muestreoRealizado = {
        fechamuestreo: fechamuestreo,
        fichero: fichero,
        usuario: usuario,
        ubicacion: ubicacion,
        muestreo: muestreo
    };

    return peticionBackGeneral('', 'muestreorealizado', 'ADD', muestreoRealizado)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function editMuestreoRealizado(idMuestreoRealizado, fechamuestreo, fichero, usuario, ubicacion, muestreo) {
    const muestreoRealizado = {
        idMuestreoRealizado: idMuestreoRealizado,
        fechamuestreo: fechamuestreo,
        fichero: fichero,
        usuario: usuario,
        ubicacion: ubicacion,
        muestreo: muestreo
    };

    return peticionBackGeneral('', 'muestreorealizado', 'EDIT', muestreoRealizado)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function deleteMuestreoRealizado(idMuestreoRealizado) {
  
    return peticionBackGeneral('', 'muestreorealizado', 'DELETE', {'id': idMuestreoRealizado})
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function construyeTablaMuestreoRealizado(filas) {
    let filasTabla = '';
    let tipo = "'Editar muestreo realizado'";
    let element = document.getElementById("datosMuestreosRealizados");

    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    $("#datosMuestreosRealizados").html("");

    filas.forEach(fila => {
        let atributosTabla = ["'" + fila.idMuestreoRealizado + "'", "'" + fila.fechamuestreo + "'", "'" + fila.fichero + "'", "'" + fila.usuario + "'", "'" + fila.ubicacion + "'", "'" + fila.muestreo + "'"];
        let botonEdit='<button class="btn btn-info" id="editarMuestreoRealizado" onclick="mostrarModal(' + tipo + ',' + atributosTabla + ')">Editar</button>';

        filasTabla += '<tr> <td>' + fila.idMuestreoRealizado + 
                    '</td> <td>' + fila.fechamuestreo + 
                    '</td> <td>' + fila.fichero + 
                    '</td> <td>' + fila.usuario +
                    '</td> <td>' + fila.ubicacion +
                    '</td> <td>' + fila.muestreo + 
                    '</td> <td class="text-center">' + botonEdit +
                    '</td> <td class="text-center"><button class="btn btn-danger" id="borrarMuestreoRealizado" onclick="mostrarBorrar(' + fila.idMetodologia + ')">Eliminar</button>'
                    
                    '</td>  </tr>';
    });

    $("#datosMuestreosRealizados").append(filasTabla);
    cerrarModal()
}

function getAtributos(tipo) {
    let idMuestreoRealizado = document.getElementById("idMuestreoRealizado").value
    let fechamuestreo = document.getElementById("fechamuestreo").value
    let fichero = document.getElementById("fichero").value
    let usuario = document.getElementById("usuario").value
    let ubicacion = document.getElementById("ubicacion").value
    let muestreo = document.getElementById("muestreo").value

    switch (tipo) {
        case "Editar":
            editMuestreoRealizado(idMuestreoRealizado, fechamuestreo, fichero, usuario, ubicacion, muestreo)
            break;
        case "Añadir":
            addMuestreoRealizado(fechamuestreo, fichero, usuario, ubicacion, muestreo)
            break;
        case "Buscar":
            getListByParamMuestreosRealizados_search(fechamuestreo, fichero, usuario, ubicacion, muestreo)
            break;
    }
}

function mostrarModal(tipo, idMuestreoRealizado = null, fechamuestreo = null, fichero = null, usuario = null, ubicacion = null, muestreo = null) {
    // Ventana modal
    document.getElementById("ventanaModal").style.display = "block";
    document.getElementById("Titulo").innerHTML = '<h2>' + tipo + '</h2>';
    document.getElementById("aceptar").innerHTML = tipo;

    if (tipo.includes("Editar")) {
        $("#formMuestreoRealizado").attr('action', 'javascript:getAtributos("Editar");');
    
        $("#idMuestreoRealizado").val(idMuestreoRealizado)
        $("#fechamuestreo").val(fechamuestreo)
        $("#fichero").val(fichero)
        $("#usuario").val(usuario)
        $("#ubicacion").val(ubicacion)
        $("#muestreo").val(muestreo)
    } else {
        if (tipo.includes("Buscar")) {
            document.getElementById("fechamuestreo").required = false;
            document.getElementById("fichero").required = false;
            document.getElementById("usuario").required = false;
            document.getElementById("ubicacion").required = false;
            document.getElementById("muestreo").required = false;

            $("#formMuestreoRealizado").attr('action', 'javascript:getAtributos("Buscar");')
        } else {
            $("#formMuestreoRealizado").attr('action', 'javascript:getAtributos("Añadir");')
        }

        $("#idMuestreoRealizado").val('')
        $("#fechamuestreo").val('')
        $("#fichero").val('')
        $("#usuario").val('')
        $("#ubicacion").val('')
        $("#muestreo").val('')
    }
}

function cerrarModal() {
    // Ventana modal
    var modal = document.getElementById("ventanaModal");
    modal.style.display = "none"

    document.getElementById("fechamuestreo").required = true;
    document.getElementById("fichero").required = true;
    document.getElementById("usuario").required = true;
    document.getElementById("ubicacion").required = true;
    document.getElementById("muestreo").required = true;
}

function mostrarBorrar(id){
    // Ventana modal
    document.getElementById("comprobarBorrar").style.display = "block";
    $("#idBorrar").val(id)
    $("#formBorrarMuestreoRealizado").attr('action' , 'javascript:borrar();');
}

function borrar(){
    let idMuestreoRealizado = document.getElementById("idBorrar").value
    deleteMuestreoRealizado(idMuestreoRealizado)
}