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
        idmuestreor: idMuestreoRealizado,
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
  
    return peticionBackGeneral('', 'muestreorealizado', 'DELETE', {'idmuestreor': idMuestreoRealizado})
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListUsuarios(usuario) {
    return peticionBackGeneral('', 'usuario', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? rellenarSelectUsuarios("usuario", response['resource'], usuario) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListUbicacion(ubicacion) {
    return peticionBackGeneral('', 'ubicacion', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? rellenarSelectUbicacion("ubicacion", response['resource'], ubicacion) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListMuestreo(muestreo) {
    return peticionBackGeneral('', 'muestreo', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? rellenarSelectMuestreo("muestreo", response['resource'], muestreo) : null)
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
        let atributosTabla = ["'" + fila.idmuestreor + "'", "'" + fila.fechamuestreo + "'", "'" + fila.fichero + "'", "'" + fila.usuario + "'", "'" + fila.ubicacion + "'", "'" + fila.muestreo + "'"];
        let botonEdit='<button class="btn btn-info" id="editarMuestreoRealizado" onclick="mostrarModal(' + tipo + ',' + atributosTabla + ')">Editar</button>';

        filasTabla += '<tr> <td>' + fila.idmuestreor + 
                    '</td> <td>' + fila.fechamuestreo + 
                    '</td> <td>' + fila.fichero + 
                    '</td> <td>' + fila.usuario +
                    '</td> <td>' + fila.ubicacion +
                    '</td> <td>' + fila.muestreo + 
                    '</td> <td class="text-center">' + botonEdit +
                    '</td> <td class="text-center"><button class="btn btn-danger" id="borrarMuestreoRealizado" onclick="mostrarBorrar(' + fila.idmuestreor + ')">Eliminar</button>'
                    
                    '</td>  </tr>';
    });

    $("#datosMuestreosRealizados").append(filasTabla);
    cerrarModal()
}

function getAtributos(tipo) {
    let idMuestreoRealizado = document.getElementById("idmuestreor").value
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

    getListUsuarios(usuario);
    getListUbicacion(ubicacion);
    getListMuestreo(muestreo);

    if (tipo.includes("Editar")) {
        $("#formMuestreoRealizado").attr('action', 'javascript:getAtributos("Editar");');
    
        $("#idmuestreor").val(idMuestreoRealizado)
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
            document.getElementById("fechamuestreo").required = true;
            document.getElementById("fichero").required = true;
            document.getElementById("usuario").required = true;
            document.getElementById("ubicacion").required = true;
            document.getElementById("muestreo").required = true;
            $("#formMuestreoRealizado").attr('action', 'javascript:getAtributos("Añadir");')
        }

        $("#idmuestreor").val('')
        $("#fechamuestreo").val('')
        $("#fichero").val('')
        $("#usuario").val('')
        $("#ubicacion").val('')
        $("#muestreo").val('')
    }
}

function rellenarSelectUsuarios(tipo, filas, usuario) {
    let element = document.getElementById(tipo);
    let option = document.createElement('option');

    option.value = "";
    option.textContent = "-- Selecciona usuario --";
    element.appendChild(option);

    filas.forEach(fila => {
        option = document.createElement('option');
        option.value = fila.id;
        option.textContent = fila.nombre;
        element.appendChild(option);
    })

    if (usuario != null) element.value = usuario;
}

function rellenarSelectUbicacion(tipo, filas, ubicacion) {
    let element = document.getElementById(tipo);
    let option = document.createElement('option');

    option.value = "";
    option.textContent = "-- Selecciona ubicación --";
    element.appendChild(option);

    filas.forEach(fila => {
        option = document.createElement('option');
        option.value = fila.idubicacion;
        option.textContent = "Latitud: " + fila.latitud + " - Longitud: " + fila.longitud;
        element.appendChild(option);
    })

    if (ubicacion != null) element.value = ubicacion;
}

function rellenarSelectMuestreo(tipo, filas, muestreo) {
    let element = document.getElementById(tipo);
    let option = document.createElement('option');

    option.value = "";
    option.textContent = "-- Selecciona muestreo --";
    element.appendChild(option);

    filas.forEach(fila => {
        option = document.createElement('option');
        option.value = fila.idmuestreo;
        option.textContent = fila.nombremuestreo;
        element.appendChild(option);
    })

    if (muestreo != null) element.value = muestreo;
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
    $("#formBorrarMuestreoRealizado").attr('action' , 'javascript:borrar();');
}

function borrar(){
    let idMuestreoRealizado = document.getElementById("idBorrar").value
    deleteMuestreoRealizado(idMuestreoRealizado)
}