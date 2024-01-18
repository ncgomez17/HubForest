async function getListMetodosMuestreo() {
    return peticionBackGeneral('', 'metodomuestreo', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMetodoMuestreo(response['resource']) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamMetodosMuestreo(nombre, descripcion, fichero) {
    const metodomuestreo = {
        nombre: nombre,
        descripcion: descripcion,
        fichero: fichero
    };
    return peticionBackGeneral('', 'metodomuestreo', 'SEARCH_BY', metodomuestreo)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMetodoMuestreo(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamMetodosMuestreo_search(nombre, descripcion, fichero) {
    const metodomuestreo = {
        nombre: nombre,
        descripcion: descripcion,
        fichero: fichero
    };
    return peticionBackGeneral('', 'metodomuestreo', 'SEARCH', metodomuestreo)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMetodoMuestreo(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function addMetodoMuestreo(nombre, descripcion, fichero) {
    const metodomuestreo = {
        nombre: nombre,
        descripcion: descripcion,
        fichero: fichero
    };

    return peticionBackGeneral('', 'metodomuestreo', 'ADD', metodomuestreo)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function editMetodoMuestreo(idmmuestreo, nombre, descripcion, fichero) {
    const metodomuestreo = {
        idmmuestreo: idmmuestreo,
        nombre: nombre,
        descripcion: descripcion,
        fichero: fichero
    };

    return peticionBackGeneral('', 'metodomuestreo', 'EDIT', metodomuestreo)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function deleteMetodoMuestreo(idmmuestreo) {
  
    return peticionBackGeneral('', 'metodomuestreo', 'DELETE', {'idmmuestreo': idmmuestreo})
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function construyeTablaMetodoMuestreo(filas) {
    let filasTabla = '';
    let tipo = "'Editar metodo de muestreo'";
    let element = document.getElementById("datosMMuestreo");


    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    $("#datosMMuestreo").html("");

    filas.forEach(fila => {
        let atributosTabla = ["'" + fila.idmmuestreo + "'", "'" + fila.nombre + "'", "'" + fila.descripcion + "'", "'" + fila.fichero + "'"];
        let botonEdit='<button class="btn btn-info" id="editarMetodoMuestreo" onclick="mostrarModal(' + tipo + ',' + atributosTabla + ')">Editar</button>';

        filasTabla += '<tr> <td>' + fila.idmmuestreo + 
                    '</td> <td>' + fila.nombre + 
                    '</td> <td>' + fila.descripcion + 
                    '</td> <td>' + fila.fichero + 
                    '</td> <td class="text-center">' + botonEdit +
                    '</td> <td class="text-center"><button class="btn btn-danger" id="borrarMetodoMuestreo" onclick="mostrarBorrar(' + fila.idmmuestreo + ')">Eliminar</button>'
                    
                    '</td>  </tr>';
    });

    $("#datosMMuestreo").append(filasTabla);
    cerrarModal()
}

function getAtributos(tipo) {
    let idMMuestreo = document.getElementById("idMMuestreo").value
    let nombre = document.getElementById("nombre").value
    let descripcion = document.getElementById("descripcion").value
    let fichero = document.getElementById("fichero").value
    
    switch (tipo) {
        case "Editar":
            editMetodoMuestreo(idMMuestreo, nombre, descripcion, fichero)
            break;
        case "Añadir":
            addMetodoMuestreo(nombre, descripcion, fichero)
            break;
        case "Buscar":
            getListByParamMetodosMuestreo_search(nombre, descripcion, fichero)
            break;
    }
}

function mostrarModal(tipo, idMMuestreo = null, nombre = null, descripcion = null, fichero = null) {
    // Ventana modal
    document.getElementById("ventanaModal").style.display = "block";
    document.getElementById("Titulo").innerHTML = '<h2>' + tipo + '</h2>';
    document.getElementById("aceptar").innerHTML = tipo;

    if (tipo.includes("Editar")) {
        $("#formMMuestreo").attr('action', 'javascript:getAtributos("Editar");');
    
        $("#idMMuestreo").val(idMMuestreo)
        $("#nombre").val(nombre)
        $("#descripcion").val(descripcion)
        $("#fichero").val(fichero)

    } else {
        if (tipo.includes("Buscar")) {
            document.getElementById("nombre").required = false;
            document.getElementById("descripcion").required = false;
            document.getElementById("fichero").required = false;

            $("#formMMuestreo").attr('action', 'javascript:getAtributos("Buscar");')
        } else {
            document.getElementById("nombre").required = true;
            document.getElementById("descripcion").required = true;
            document.getElementById("fichero").required = true;
            $("#formMMuestreo").attr('action', 'javascript:getAtributos("Añadir");')
        }

        $("#idMMuestreo").val('')
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
    $("#formBorrarMMuestreo").attr('action' , 'javascript:borrar();');
}

function borrar(){
    let idMMuestreo = document.getElementById("idBorrar").value;
    deleteMetodoMuestreo(idMMuestreo);
}