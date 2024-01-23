async function getListModificacionMetodologiaAnalisis() {
    return peticionBackGeneral('', 'modificacionmetodologiaanalisis', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaModificacionMetodologiaAnalisis(response['resource']) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamModificacionMetodologiaAnalisis(descripcion, fichero, nombre) {
    const modificacionmetodologiaanalisis = {
        descripcion: descripcion,
        fichero: fichero,
        nombre: nombre
    };
    return peticionBackGeneral('', 'modificacionmetodologiaanalisis', 'SEARCH_BY', modificacionmetodologiaanalisis)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaModificacionMetodologiaAnalisis(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamModificacionMetodologiaAnalisis_search(descripcion, fichero, nombre) {
    const modificacionmetodologiaanalisis = {
        descripcion: descripcion,
        fichero: fichero,
        nombre: nombre
    };
    return peticionBackGeneral('', 'modificacionmetodologiaanalisis', 'SEARCH', modificacionmetodologiaanalisis)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaModificacionMetodologiaAnalisis(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function addModificacionMetodologiaAnalisis(descripcion, fichero, nombre) {
    const modificacionmetodologiaanalisis = {
        descripcion: descripcion,
        fichero: fichero,
        nombre: nombre
    };

    return peticionBackGeneral('', 'modificacionmetodologiaanalisis', 'ADD', modificacionmetodologiaanalisis)
        .then(response => {
         
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function editModificacionMetodologiaAnalisis(idmmanalisis, descripcion, fichero, nombre) {
    const modificacionmetodologiaanalisis = {
        idmmanalisis: idmmanalisis,
        descripcion: descripcion,
        fichero: fichero,
        nombre: nombre
    };

    return peticionBackGeneral('', 'modificacionmetodologiaanalisis', 'EDIT', modificacionmetodologiaanalisis)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function deleteModificacionMetodologiaAnalisis(idmmanalisis) {
    console.log(idmmanalisis)
    return peticionBackGeneral('', 'modificacionmetodologiaanalisis', 'DELETE', {'idmmanalisis': idmmanalisis})
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function construyeTablaModificacionMetodologiaAnalisis(filas) {
    let filasTabla = '';
    let tipo = "'Editar modificación metodo de analisis'";
    let element = document.getElementById("datosMMAnalisis");


    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    $("#datosMMAnalisis").html("");

    filas.forEach(fila => {
        let atributosTabla = ["'" + fila.idmmanalisis + "'", "'" + fila.descripcion + "'", "'" + fila.fichero + "'", "'" + fila.nombre + "'"];
        let botonEdit='<button class="btn btn-info" id="editarModificacionMetodologiaAnalisis" onclick="mostrarModal(' + tipo + ',' + atributosTabla + ')">Editar</button>';

        filasTabla += '<tr> <td>' + fila.idmmanalisis + 
                    '</td> <td>' + fila.nombre +
                    '</td> <td>' + fila.descripcion + 
                    '</td> <td>' + fila.fichero +                 
                    '</td> <td class="text-center">' + botonEdit +
                    '</td> <td class="text-center"><button class="btn btn-danger" id="borrarModificacionMetodologiaAnalisis" onclick="mostrarBorrar(' + fila.idmmanalisis + ')">Eliminar</button>'
                    
                    '</td>  </tr>';
    });

    $("#datosMMAnalisis").append(filasTabla);
    cerrarModal()
}

function getAtributos(tipo) {
    let idMMAnalisis = document.getElementById("idMMAnalisis").value
    let descripcion = document.getElementById("descripcion").value
    let fichero = document.getElementById("fichero").value
    let nombre = document.getElementById("nombre").value

    switch (tipo) {
        case "Editar":
            editModificacionMetodologiaAnalisis(idMMAnalisis, descripcion, fichero, nombre)
            break;
        case "Añadir":
            addModificacionMetodologiaAnalisis(descripcion, fichero, nombre)
            break;
        case "Buscar":
            getListByParamModificacionMetodologiaAnalisis_search(descripcion, fichero, nombre)
            break;
    }
}

function mostrarModal(tipo, idMMAnalisis = null, descripcion = null, fichero = null, nombre = null) {
    // Ventana modal
    document.getElementById("ventanaModal").style.display = "block";
    document.getElementById("Titulo").innerHTML = '<h2>' + tipo + '</h2>';
    document.getElementById("aceptar").innerHTML = tipo;

    if (tipo.includes("Editar")) {
        $("#formMMAnalisis").attr('action', 'javascript:getAtributos("Editar");');
    
        $("#idMMAnalisis").val(idMMAnalisis)
        $("#descripcion").val(descripcion)
        $("#fichero").val(fichero)
        $("#nombre").val(nombre)
    } else {
        if (tipo.includes("Buscar")) {
            document.getElementById("descripcion").required = false;
            document.getElementById("fichero").required = false;
            document.getElementById("nombre").required = false;

            $("#formMMAnalisis").attr('action', 'javascript:getAtributos("Buscar");')
        } else {
            document.getElementById("descripcion").required = true;
            document.getElementById("fichero").required = true;
            document.getElementById("nombre").required = true;
            $("#formMMAnalisis").attr('action', 'javascript:getAtributos("Añadir");')
        }

        $("#idMMAnalisis").val('')
        $("#descripcion").val('')
        $("#fichero").val('')
        $("#nombre").val('')
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
    $("#formBorrarMMAnalisis").attr('action' , 'javascript:borrar();');
}

function borrar(){
    let idMMAnalisis = document.getElementById("idBorrar").value;
    deleteModificacionMetodologiaAnalisis(idMMAnalisis);
}