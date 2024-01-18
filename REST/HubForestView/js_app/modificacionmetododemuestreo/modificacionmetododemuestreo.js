async function getListModifMetodosMuestreo() {
    return peticionBackGeneral('', 'modificacionmetododemuestreo', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaModifMetodoMuestreo(response['resource']) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamModifMetodosMuestreo(descripcion, fichero) {
    const modificacionmetododemuestreo = {
        descripcion: descripcion,
        fichero: fichero
    };
    return peticionBackGeneral('', 'modificacionmetododemuestreo', 'SEARCH_BY', modificacionmetododemuestreo)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaModifMetodoMuestreo(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamModifMetodosMuestreo_search(descripcion, fichero) {
    const modificacionmetododemuestreo = {
        descripcion: descripcion,
        fichero: fichero
    };
    return peticionBackGeneral('', 'modificacionmetododemuestreo', 'SEARCH', modificacionmetododemuestreo)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaModifMetodoMuestreo(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function addModifMetodoMuestreo(descripcion, fichero) {
    const modificacionmetododemuestreo = {
        descripcion: descripcion,
        fichero: fichero
    };

    return peticionBackGeneral('', 'modificacionmetododemuestreo', 'ADD', modificacionmetododemuestreo)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function editModifMetodoMuestreo(idmmmuestreo, descripcion, fichero) {
    const modificacionmetododemuestreo = {
        idmmmuestreo: idmmmuestreo,
        descripcion: descripcion,
        fichero: fichero
    };

    return peticionBackGeneral('', 'modificacionmetododemuestreo', 'EDIT', modificacionmetododemuestreo)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function deleteModifMetodoMuestreo(idmmmuestreo) {
  
    return peticionBackGeneral('', 'modificacionmetododemuestreo', 'DELETE', {'idmmmuestreo': idmmmuestreo})
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function construyeTablaModifMetodoMuestreo(filas) {
    let filasTabla = '';
    let tipo = "'Editar modificación metodo de muestreo'";
    let element = document.getElementById("datosMMMuestreo");


    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    $("#datosMMMuestreo").html("");

    filas.forEach(fila => {
        let atributosTabla = ["'" + fila.idmmmuestreo + "'", "'" + fila.descripcion + "'", "'" + fila.fichero + "'"];
        let botonEdit='<button class="btn btn-info" id="editarModifMetodoMuestreo" onclick="mostrarModal(' + tipo + ',' + atributosTabla + ')">Editar</button>';

        filasTabla += '<tr> <td>' + fila.idmmmuestreo + 
                    '</td> <td>' + fila.descripcion + 
                    '</td> <td>' + fila.fichero + 
                    '</td> <td class="text-center">' + botonEdit +
                    '</td> <td class="text-center"><button class="btn btn-danger" id="borrarModifMetodoMuestreo" onclick="mostrarBorrar(' + fila.idmmmuestreo + ')">Eliminar</button>'
                    
                    '</td>  </tr>';
    });

    $("#datosMMMuestreo").append(filasTabla);
    cerrarModal()
}

function getAtributos(tipo) {
    let idMMMuestreo = document.getElementById("idMMMuestreo").value
    let descripcion = document.getElementById("descripcion").value
    let fichero = document.getElementById("fichero").value
    
    switch (tipo) {
        case "Editar":
            editModifMetodoMuestreo(idMMMuestreo, descripcion, fichero)
            break;
        case "Añadir":
            addModifMetodoMuestreo(descripcion, fichero)
            break;
        case "Buscar":
            getListByParamModifMetodosMuestreo_search(descripcion, fichero)
            break;
    }
}

function mostrarModal(tipo, idMMMuestreo = null, descripcion = null, fichero = null) {
    // Ventana modal
    document.getElementById("ventanaModal").style.display = "block";
    document.getElementById("Titulo").innerHTML = '<h2>' + tipo + '</h2>';
    document.getElementById("aceptar").innerHTML = tipo;

    if (tipo.includes("Editar")) {
        $("#formMMMuestreo").attr('action', 'javascript:getAtributos("Editar");');
    
        $("#idMMMuestreo").val(idMMMuestreo)
        $("#descripcion").val(descripcion)
        $("#fichero").val(fichero)

    } else {
        if (tipo.includes("Buscar")) {
            document.getElementById("descripcion").required = false;
            document.getElementById("fichero").required = false;

            $("#formMMMuestreo").attr('action', 'javascript:getAtributos("Buscar");')
        } else {
            document.getElementById("descripcion").required = true;
            document.getElementById("fichero").required = true;
            $("#formMMMuestreo").attr('action', 'javascript:getAtributos("Añadir");')
        }

        $("#idMMMuestreo").val('')
        $("#descripcion").val('')
        $("#fichero").val('')

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
    $("#formBorrarMMMuestreo").attr('action' , 'javascript:borrar();');
}

function borrar(){
    let idMMMuestreo = document.getElementById("idBorrar").value;
    deleteModifMetodoMuestreo(idMMMuestreo);
}