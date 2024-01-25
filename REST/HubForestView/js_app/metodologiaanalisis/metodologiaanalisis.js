async function getListMetodAnalisis() {
    return peticionBackGeneral('', 'metodologiaanalisis', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMetodologiaAnalisis(response['resource']) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamMetodologiaAnalisis(descripcion, fichero, nombre) {
    const metodologiaanalisis = {
        descripcion: descripcion,
        fichero: fichero,
        nombre: nombre
    };
    return peticionBackGeneral('', 'metodologiaanalisis', 'SEARCH_BY', metodologiaanalisis)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMetodologiaAnalisis(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamMetodologiaAnalisis_search(descripcion, fichero, nombre) {
    const metodologiaanalisis = {
        descripcion: descripcion,
        fichero: fichero,
        nombre: nombre
    };
    return peticionBackGeneral('', 'metodologiaanalisis', 'SEARCH', metodologiaanalisis)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMetodologiaAnalisis(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function addMetodologiaAnalisis(descripcion, fichero, nombre) {
    const metodologiaanalisis = {
        descripcion: descripcion,
        fichero: fichero,
        nombre: nombre
    };

    return peticionBackGeneral('', 'metodologiaanalisis', 'ADD', metodologiaanalisis)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function editMetodologiaAnalisis(idmanalisis, descripcion, fichero, nombre) {
    const metodologiaanalisis = {
        idmanalisis: idmanalisis,
        descripcion: descripcion,
        fichero: fichero,
        nombre: nombre
    };

    return peticionBackGeneral('', 'metodologiaanalisis', 'EDIT', metodologiaanalisis)
        .then(response => {
            location.reload();
            
            return { status: 'OK', data: response }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function deleteMetodologiaAnalisis(idmanalisis) {
  
    return peticionBackGeneral('', 'metodologiaanalisis', 'DELETE', {'idmanalisis': idmanalisis})
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function construyeTablaMetodologiaAnalisis(filas) {
    let filasTabla = '';
    let tipo = "'Editar metodologia analisis'";
    let element = document.getElementById("datosmetodologiaanalisis");


    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    $("#datosmetodologiaanalisis").html("");

    filas.forEach(fila => {
        let atributosTabla = ["'" + fila.idmanalisis + "'", "'" + fila.descripcion + "'", "'" + fila.fichero + "'", "'" + fila.nombre + "'"];
        let botonEdit='<button class="btn btn-info" id="editarMetodologiaAnalisis" onclick="mostrarModal(' + tipo + ',' + atributosTabla + ')">Editar</button>';

        filasTabla += '<tr> <td>' + fila.idmanalisis + 
                    '</td> <td>' + fila.descripcion + 
                    '</td> <td>' + fila.fichero + 
                    '</td> <td>' + fila.nombre + 
                    '</td> <td class="text-center">' + botonEdit +
                    '</td> <td class="text-center"><button class="btn btn-danger" id="borrarMetodologiaAnalisis" onclick="mostrarBorrar(' + fila.idmanalisis + ')">Eliminar</button>'
                    '</td>  </tr>';
    });

    $("#datosmetodologiaanalisis").append(filasTabla);
    cerrarModal()
}

function getAtributos(tipo) {
    let idmanalisis = document.getElementById("idmanalisis").value
    let descripcion = document.getElementById("descripcion").value
    let fichero = document.getElementById("fichero").value
    let nombre = document.getElementById("nombre").value
    
    switch (tipo) {
        case "Editar":
            editMetodologiaAnalisis(idmanalisis, descripcion, fichero, nombre)
            break;
        case "Añadir":
            addMetodologiaAnalisis(descripcion, fichero, nombre)
            break;
        case "Buscar":
            getListByParamMetodologiaAnalisis_search(descripcion, fichero, nombre)
            break;
    }
}

function mostrarModal(tipo, idmanalisis = null, descripcion = null, fichero = null, nombre = null) {
    // Ventana modal
    document.getElementById("ventanaModal").style.display = "block";
    document.getElementById("Titulo").innerHTML = '<h2>' + tipo + '</h2>';
    document.getElementById("aceptar").innerHTML = tipo;

    if (tipo.includes("Editar")) {
        $("#formmetodologiaanalisis").attr('action', 'javascript:getAtributos("Editar");');
    
        $("#idmanalisis").val(idmanalisis)
        $("#descripcion").val(descripcion)
        $("#fichero").val(fichero)
        $("#nombre").val(nombre)
    } else {
        if (tipo.includes("Buscar")) {
            document.getElementById("descripcion").required = false;
            document.getElementById("fichero").required = false;
            document.getElementById("nombre").required = false;
            $("#formmetodologiaanalisis").attr('action', 'javascript:getAtributos("Buscar");')
        } else {
            document.getElementById("descripcion").required = true;
            document.getElementById("fichero").required = true;
            document.getElementById("nombre").required = true;
            $("#formmetodologiaanalisis").attr('action', 'javascript:getAtributos("Añadir");')
        }

        $("#idmanalisis").val('')
        $("#descripcion").val('')
        $("#fichero").val('')
        $("#nombre").val('')
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
    $("#formBorrarmetodologiaanalisis").attr('action' , 'javascript:borrar();');
}

function borrar(){
    let idmanalisis = document.getElementById("idBorrar").value
    deleteAnalisis(idmanalisis)
}