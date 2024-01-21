async function getListProcesadoMuestra() {
    return peticionBackGeneral('', 'procesadomuestra', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaProcesadoMuestra(response['resource']) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamProcesadoMuestra(nombre, descripcion, muestra, panalisis, fichero) {
    const procesadomuestra = {
        nombre: nombre,
        descripcion: descripcion,
        muestra: muestra,
        panalisis: panalisis,
        fichero: fichero
    };
    return peticionBackGeneral('', 'procesadomuestra', 'SEARCH_BY', procesadomuestra)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaProcesadoMuestra(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamProcesadoMuestra_search(nombre, descripcion, muestra, panalisis, fichero) {
    const procesadomuestra = {
        nombre: nombre,
        descripcion: descripcion,
        muestra: muestra,
        panalisis: panalisis,
        fichero: fichero
    };
    return peticionBackGeneral('', 'procesadomuestra', 'SEARCH', procesadomuestra)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaProcesadoMuestra(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function addProcesadoMuestra(nombre, descripcion, muestra, panalisis, fichero) {
    const procesadomuestra = {
        nombre: nombre,
        descripcion: descripcion,
        muestra: muestra,
        panalisis: panalisis,
        fichero: fichero
    };

    return peticionBackGeneral('', 'procesadomuestra', 'ADD', procesadomuestra)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function editProcesadoMuestra(idpmuestra, nombre, descripcion, muestra, panalisis, fichero) {
    const procesadomuestra = {
        idpmuestra: idpmuestra,
        nombre: nombre,
        descripcion: descripcion,
        muestra: muestra,
        panalisis: panalisis,
        fichero: fichero
    };

    return peticionBackGeneral('', 'procesadomuestra', 'EDIT', procesadomuestra)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function deleteProcesadoMuestra(idpmuestra) {
  
    return peticionBackGeneral('', 'procesadomuestra', 'DELETE', {'idpmuestra': idpmuestra})
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListPreparacionAnalisis(panalisis) {
    return peticionBackGeneral('', 'preparacionanalisis', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? rellenarSelectPA("panalisis", response['resource'], panalisis) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListMuestra(muestra) {
    return peticionBackGeneral('', 'muestra', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? rellenarSelectM("muestra", response['resource'], muestra) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}


function construyeTablaProcesadoMuestra(filas) {
    let filasTabla = '';
    let tipo = "'Editar procesado muestra'";
    let element = document.getElementById("datosPMuestra");


    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    $("#datosPMuestra").html("");

    filas.forEach(fila => {
        let atributosTabla = ["'" + fila.idpmuestra + "'", "'" + fila.nombre + "'", "'" + fila.descripcion + "'", "'" + fila.muestra + "'", "'"+ fila.panalisis + "'", "'" + fila.fichero + "'"];
        let botonEdit='<button class="btn btn-info" id="editarProcesadoMuestra" onclick="mostrarModal(' + tipo + ',' + atributosTabla + ')">Editar</button>';

        filasTabla += '<tr> <td>' + fila.idpmuestra + 
                    '</td> <td>' + fila.nombre + 
                    '</td> <td>' + fila.descripcion + 
                    '</td> <td>' + fila.muestra + 
                    '</td> <td>' + fila.panalisis + 
                    '</td> <td>' + fila.fichero + 
                    '</td> <td class="text-center">' + botonEdit +
                    '</td> <td class="text-center"><button class="btn btn-danger" id="borrarProcesadoMuestra" onclick="mostrarBorrar(' + fila.idpmuestra + ')">Eliminar</button>'
                    
                    '</td>  </tr>';
    });

    $("#datosPMuestra").append(filasTabla);
    cerrarModal()
}

function getAtributos(tipo) {
    let idpmuestra = document.getElementById("idpmuestra").value
    let nombre = document.getElementById("nombre").value
    let descripcion = document.getElementById("descripcion").value
    let muestra = document.getElementById("muestra").value
    let panalisis = document.getElementById("panalisis").value
    let fichero = document.getElementById("fichero").value

    switch (tipo) {
        case "Editar":
            editProcesadoMuestra(idpmuestra, nombre, descripcion, muestra, panalisis, fichero)
            break;
        case "Añadir":
            addProcesadoMuestra(nombre, descripcion, muestra, panalisis, fichero)
            break;
        case "Buscar":
            getListByParamProcesadoMuestra_search(nombre, descripcion, muestra, panalisis, fichero)
            break;
    }
}

function mostrarModal(tipo, idpmuestra = null, nombre = null, descripcion = null,muestra = null , panalisis = null, fichero = null) {
    // Ventana modal
    document.getElementById("ventanaModal").style.display = "block";
    document.getElementById("Titulo").innerHTML = '<h2>' + tipo + '</h2>';
    document.getElementById("aceptar").innerHTML = tipo;

    getListPreparacionAnalisis(panalisis)

    getListMuestra(muestra)

    if (tipo.includes("Editar")) {
        $("#formPMuestra").attr('action', 'javascript:getAtributos("Editar");');
    
        $("#idpmuestra").val(idpmuestra)
        $("#nombre").val(nombre)
        $("#descripcion").val(descripcion)
        $("#fichero").val(fichero)

    } else {
        if (tipo.includes("Buscar")) {
            document.getElementById("nombre").required = false;
            document.getElementById("descripcion").required = false;
            document.getElementById("muestra").required = false;
            document.getElementById("panalisis").required = false;
            document.getElementById("fichero").required = false;

            $("#formPMuestra").attr('action', 'javascript:getAtributos("Buscar");')
        } else {
            document.getElementById("nombre").required = true;
            document.getElementById("descripcion").required = true;
            document.getElementById("muestra").required = true;
            document.getElementById("panalisis").required = true;
            document.getElementById("fichero").required = true;
            $("#formPMuestra").attr('action', 'javascript:getAtributos("Añadir");')
        }

        $("#idpmuestra").val('')
        $("#nombre").val('')
        $("#descripcion").val('')
        $("#muestra").val('')
        $("#panalisis").val('')
        $("#fichero").val('')

    }
}

function rellenarSelectM(tipo, filas, muestra){
    let element = document.getElementById(tipo);

    let option = document.createElement( 'option' );

    option.value = ""
    option.textContent = "-- Selecciona "+ tipo +" --";

    element.appendChild( option );


    filas.forEach(fila => {
        option = document.createElement( 'option' );

        option.value = fila.idmuestra
        option.textContent = fila.nombre;

        element.appendChild( option );
    })

    if(muestra != null)
        element.value = muestra

}

function rellenarSelectPA(tipo, filas, panalisis){
    let element = document.getElementById(tipo);

    let option = document.createElement( 'option' );

    option.value = ""
    option.textContent = "-- Selecciona preparación análisis --";

    element.appendChild( option );


    filas.forEach(fila => {
        option = document.createElement( 'option' );

        option.value = fila.idpanalisis
        option.textContent = fila.nombre;

        element.appendChild( option );
    })

    if(panalisis != null)
        element.value = panalisis
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
    $("#formBorrarPMuestra").attr('action' , 'javascript:borrar();');
}

function borrar(){
    let idpmuestra = document.getElementById("idBorrar").value;
    deleteProcesadoMuestra(idpmuestra);
}