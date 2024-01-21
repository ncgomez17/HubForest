async function getListPreparacionAnalisis() {
    return peticionBackGeneral('', 'preparacionanalisis', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaPreparacionAnalisis(response['resource']) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamPreparacionAnalisis(nombre, descripcion, fichero) {
    const preparacionanalisis = {
        nombre: nombre,
        descripcion: descripcion,
        fichero: fichero
    };
    return peticionBackGeneral('', 'preparacionanalisis', 'SEARCH_BY', preparacionanalisis)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaPreparacionAnalisis(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamPreparacionAnalisis_search(nombre, descripcion, fichero) {
    const preparacionanalisis = {
        nombre: nombre,
        descripcion: descripcion,
        fichero: fichero
    };
    return peticionBackGeneral('', 'preparacionanalisis', 'SEARCH', preparacionanalisis)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaPreparacionAnalisis(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function addPreparacionAnalisis(nombre, descripcion, fichero) {
    const preparacionanalisis = {
        nombre: nombre,
        descripcion: descripcion,
        fichero: fichero
    };

    return peticionBackGeneral('', 'preparacionanalisis', 'ADD', preparacionanalisis)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function editPreparacionAnalisis(idpanalisis, nombre, descripcion, fichero) {
    const preparacionanalisis = {
        idpanalisis: idpanalisis,
        nombre: nombre,
        descripcion: descripcion,
        fichero: fichero
    };

    return peticionBackGeneral('', 'preparacionanalisis', 'EDIT', preparacionanalisis)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function deletePreparacionAnalisis(idpanalisis) {
  
    return peticionBackGeneral('', 'preparacionanalisis', 'DELETE', {'idpanalisis': idpanalisis})
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function construyeTablaPreparacionAnalisis(filas) {
    let filasTabla = '';
    let tipo = "'Editar preparacion analisis'";
    let element = document.getElementById("datosPAnalisis");


    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    $("#datosPAnalisis").html("");

    filas.forEach(fila => {
        let atributosTabla = ["'" + fila.idpanalisis + "'", "'" + fila.nombre + "'", "'" + fila.descripcion + "'", "'" + fila.fichero + "'"];
        let botonEdit='<button class="btn btn-info" id="editarPreparacionAnalisis" onclick="mostrarModal(' + tipo + ',' + atributosTabla + ')">Editar</button>';

        filasTabla += '<tr> <td>' + fila.idpanalisis + 
                    '</td> <td>' + fila.nombre + 
                    '</td> <td>' + fila.descripcion + 
                    '</td> <td>' + fila.fichero + 
                    '</td> <td class="text-center">' + botonEdit +
                    '</td> <td class="text-center"><button class="btn btn-danger" id="borrarPreparacionAnalisis" onclick="mostrarBorrar(' + fila.idpanalisis + ')">Eliminar</button>'
                    
                    '</td>  </tr>';
    });

    $("#datosPAnalisis").append(filasTabla);
    cerrarModal()
}

function getAtributos(tipo) {
    let idpanalisis = document.getElementById("idpanalisis").value
    let nombre = document.getElementById("nombre").value
    let descripcion = document.getElementById("descripcion").value
    let fichero = document.getElementById("fichero").value

    
    switch (tipo) {
        case "Editar":
            editPreparacionAnalisis(idpanalisis, nombre, descripcion, fichero)
            break;
        case "Añadir":
            addPreparacionAnalisis(nombre, descripcion, fichero)
            break;
        case "Buscar":
            getListByParamPreparacionAnalisis_search(nombre, descripcion, fichero)
            break;
    }
}

function mostrarModal(tipo, idpanalisis = null, nombre = null, descripcion = null, fichero = null) {
    // Ventana modal
    document.getElementById("ventanaModal").style.display = "block";
    document.getElementById("Titulo").innerHTML = '<h2>' + tipo + '</h2>';
    document.getElementById("aceptar").innerHTML = tipo;

    if (tipo.includes("Editar")) {
        $("#formPAnalisis").attr('action', 'javascript:getAtributos("Editar");');
    
        $("#idpanalisis").val(idpanalisis)
        $("#nombre").val(nombre)
        $("#descripcion").val(descripcion)
        $("#fichero").val(fichero)

    } else {
        if (tipo.includes("Buscar")) {
            document.getElementById("nombre").required = false;
            document.getElementById("descripcion").required = false;
            document.getElementById("fichero").required = false;

            $("#formPAnalisis").attr('action', 'javascript:getAtributos("Buscar");')
        } else {
            document.getElementById("nombre").required = true;
            document.getElementById("descripcion").required = true;
            document.getElementById("fichero").required = true;
            $("#formPAnalisis").attr('action', 'javascript:getAtributos("Añadir");')
        }

        $("#idpanalisis").val('')
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
    $("#formBorrarPAnalisis").attr('action' , 'javascript:borrar();');
}

function borrar(){
    let idpanalisis = document.getElementById("idBorrar").value;
    deletePreparacionAnalisis(idpanalisis);
}