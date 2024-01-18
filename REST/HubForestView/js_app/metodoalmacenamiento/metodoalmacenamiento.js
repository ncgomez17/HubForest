async function getListMetodosAlmacenamiento() {
    return peticionBackGeneral('', 'metodoalmacenamiento', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMetodoAlmacenamiento(response['resource']) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamMetodosAlmacenamiento(nombre, descripcion, fichero) {
    const metodoalmacenamiento = {
        nombre: nombre,
        descripcion: descripcion,
        fichero: fichero
    };
    return peticionBackGeneral('', 'metodoalmacenamiento', 'SEARCH_BY', metodoalmacenamiento)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMetodoAlmacenamiento(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamMetodosAlmacenamiento_search(nombre, descripcion, fichero) {
    const metodoalmacenamiento = {
        nombre: nombre,
        descripcion: descripcion,
        fichero: fichero
    };
    return peticionBackGeneral('', 'metodoalmacenamiento', 'SEARCH', metodoalmacenamiento)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMetodoAlmacenamiento(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function addMetodoAlmacenamiento(nombre, descripcion, fichero) {
    const metodoalmacenamiento = {
        nombre: nombre,
        descripcion: descripcion,
        fichero: fichero

    };

    return peticionBackGeneral('', 'metodoalmacenamiento', 'ADD', metodoalmacenamiento)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function editMetodoAlmacenamiento(idmalmac, nombre, descripcion, fichero) {
    const metodoalmacenamiento = {
        idmalmac: idmalmac,
        nombre: nombre,
        descripcion: descripcion,
        fichero: fichero
    };

    return peticionBackGeneral('', 'metodoalmacenamiento', 'EDIT', metodoalmacenamiento)
        .then(response => {
            location.reload();
            
            return { status: 'OK', data: response }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function deleteMetodoAlmacenamiento(idmalmac) {
  
    return peticionBackGeneral('', 'metodoalmacenamiento', 'DELETE', {'idmalmac': idmalmac})
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function construyeTablaMetodoAlmacenamiento(filas) {
    let filasTabla = '';
    let tipo = "'Editar metodo de almacenamiento'";
    let element = document.getElementById("datosMAlmac");


    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    $("#datosMAlmac").html("");

    filas.forEach(fila => {
        let atributosTabla = ["'" + fila.idmalmac + "'", "'" + fila.nombre + "'", "'" + fila.descripcion + "'", "'" + fila.fichero + "'"];
        let botonEdit='<button class="btn btn-info" id="editarMetodoAlmac" onclick="mostrarModal(' + tipo + ',' + atributosTabla + ')">Editar</button>';

        filasTabla += '<tr> <td>' + fila.idmalmac + 
                    '</td> <td>' + fila.nombre + 
                    '</td> <td>' + fila.descripcion + 
                    '</td> <td>' + fila.fichero + 
                    '</td> <td class="text-center">' + botonEdit +
                    '</td> <td class="text-center"><button class="btn btn-danger" id="borrarMetodoAlmac" onclick="mostrarBorrar(' + fila.idmalmac + ')">Eliminar</button>'
                    
                    '</td>  </tr>';
    });

    $("#datosMAlmac").append(filasTabla);
    cerrarModal()
}

function getAtributos(tipo) {
    let idMAlmac = document.getElementById("idMAlmac").value
    let nombre = document.getElementById("nombre").value
    let descripcion = document.getElementById("descripcion").value
    let fichero = document.getElementById("fichero").value
    
    switch (tipo) {
        case "Editar":
            editMetodoAlmacenamiento(idMAlmac, nombre, descripcion, fichero)
            break;
        case "Añadir":
            addMetodoAlmacenamiento(nombre, descripcion, fichero)
            break;
        case "Buscar":
            getListByParamMetodosAlmacenamiento_search(nombre, descripcion, fichero)
            break;
    }
}

function mostrarModal(tipo, idMAlmac = null, nombre = null, descripcion = null, fichero = null) {
    // Ventana modal
    document.getElementById("ventanaModal").style.display = "block";
    document.getElementById("Titulo").innerHTML = '<h2>' + tipo + '</h2>';
    document.getElementById("aceptar").innerHTML = tipo;

    if (tipo.includes("Editar")) {
        $("#formMAlmac").attr('action', 'javascript:getAtributos("Editar");');
    
        $("#idMAlmac").val(idMAlmac)
        $("#nombre").val(nombre)
        $("#descripcion").val(descripcion)
        $("#fichero").val(fichero)

    } else {
        if (tipo.includes("Buscar")) {
            document.getElementById("nombre").required = false;
            document.getElementById("descripcion").required = false;
            document.getElementById("fichero").required = false;

            $("#formMAlmac").attr('action', 'javascript:getAtributos("Buscar");')
        } else {
            document.getElementById("nombre").required = true;
            document.getElementById("descripcion").required = true;
            document.getElementById("fichero").required = true;
            $("#formMAlmac").attr('action', 'javascript:getAtributos("Añadir");')
        }

        $("#idMAlmac").val('')
        $("#nombre").val('')
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
    $("#formBorrarMAlmac").attr('action' , 'javascript:borrar();');
}

function borrar(){
    let idMAlmac = document.getElementById("idBorrar").value;
    deleteMetodoAlmacenamiento(idMAlmac);
}