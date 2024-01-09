async function getListMetodologias() {
    return peticionBackGeneral('', 'metodologia', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMetodologia(response['resource']) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamMetodologias(nombre, fichero, descripcion, muestreo) {
    const metodologia = {
        nombre: nombre,
        fichero: fichero,
        descripcion: descripcion,
        muestreo: muestreo
    };
    return peticionBackGeneral('', 'metodologia', 'SEARCH_BY', metodologia)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMetodologia(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamMetodologias_search(nombre, fichero, descripcion, muestreo) {
    const metodologia = {
        nombre: nombre,
        fichero: fichero,
        descripcion: descripcion,
        muestreo: muestreo
    };
    return peticionBackGeneral('', 'metodologia', 'SEARCH', metodologia)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMetodologia(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function addMetodologia(nombre, fichero, descripcion, muestreo) {
    const metodologia = {
        nombre: nombre,
        fichero: fichero,
        descripcion: descripcion,
        muestreo: muestreo
    };

    return peticionBackGeneral('', 'metodologia', 'ADD', metodologia)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function editMetodologia(idMetodologia, nombre, fichero, descripcion, muestreo) {
    const metodologia = {
        idMetodologia: idMetodologia,
        nombre: nombre,
        fichero: fichero,
        descripcion: descripcion,
        muestreo: muestreo
    };

    return peticionBackGeneral('', 'metodologia', 'EDIT', metodologia)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function deleteMetodologia(idMetodologia) {
  
    return peticionBackGeneral('', 'metodologia', 'DELETE', {'id': idMetodologia})
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function construyeTablaMetodologia(filas) {
    let filasTabla = '';
    let tipo = "'Editar metodologia'";
    let element = document.getElementById("datosMetodologias");

    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    $("#datosMetodologias").html("");

    filas.forEach(fila => {
        let atributosTabla = ["'" + fila.idMetodologia + "'", "'" + fila.nombre + "'", "'" + fila.fichero + "'", "'" + fila.descripcion + "'", "'" + fila.muestreo + "'"];
        let botonEdit='<button class="btn btn-info" id="editarMetodologia" onclick="mostrarModal(' + tipo + ',' + atributosTabla + ')">Editar</button>';

        filasTabla += '<tr> <td>' + fila.idMetodologia + 
                    '</td> <td>' + fila.nombre + 
                    '</td> <td>' + fila.fichero + 
                    '</td> <td>' + fila.descripcion + 
                    '</td> <td>' + fila.muestreo + 
                    '</td> <td class="text-center">' + botonEdit +
                    '</td> <td class="text-center"><button class="btn btn-danger" id="borrarMetodologia" onclick="mostrarBorrar(' + fila.idMetodologia + ')">Eliminar</button>'
                    
                    '</td>  </tr>';
    });

    $("#datosMetodologias").append(filasTabla);
    cerrarModal()
}

function getAtributos(tipo) {
    let idMetodologia = document.getElementById("idMetodologia").value
    let nombre = document.getElementById("nombre").value
    let fichero = document.getElementById("fichero").value
    let descripcion = document.getElementById("descripcion").value
    let muestreo = document.getElementById("muestreo").value

    switch (tipo) {
        case "Editar":
            editMetodologia(idMetodologia, nombre, fichero, descripcion, muestreo)
            break;
        case "Añadir":
            addMetodologia(nombre, fichero, descripcion, muestreo)
            break;
        case "Buscar":
            getListByParamMetodologias_search(nombre, fichero, descripcion, muestreo)
            break;
    }
}

function mostrarModal(tipo, idMetodologia = null, nombre = null, fichero = null, descripcion = null, muestreo = null) {
    // Ventana modal
    document.getElementById("ventanaModal").style.display = "block";
    document.getElementById("Titulo").innerHTML = '<h2>' + tipo + '</h2>';
    document.getElementById("aceptar").innerHTML = tipo;

    if (tipo.includes("Editar")) {
        $("#formMetodologia").attr('action', 'javascript:getAtributos("Editar");');
    
        $("#idMetodologia").val(idMetodologia)
        $("#nombre").val(nombre)
        $("#fichero").val(fichero)
        $("#descripcion").val(descripcion)
        $("#muestreo").val(muestreo)
    } else {
        if (tipo.includes("Buscar")) {
            document.getElementById("nombre").required = false;
            document.getElementById("fichero").required = false;
            document.getElementById("descripcion").required = false;
            document.getElementById("muestreo").required = false;

            $("#formMetodologia").attr('action', 'javascript:getAtributos("Buscar");')
        } else {
            $("#formMetodologia").attr('action', 'javascript:getAtributos("Añadir");')
        }

        $("#idMetodologia").val('')
        $("#nombre").val('')
        $("#fichero").val('')
        $("#descripcion").val('')
        $("#muestreo").val('')
    }
}

function cerrarModal() {
    // Ventana modal
    var modal = document.getElementById("ventanaModal");
    modal.style.display = "none"

    document.getElementById("nombre").required = true;
    document.getElementById("fichero").required = true;
    document.getElementById("descripcion").required = true;
    document.getElementById("muestreo").required = true;
}

function mostrarBorrar(id){
    // Ventana modal
    document.getElementById("comprobarBorrar").style.display = "block";
    $("#idBorrar").val(id)
    $("#formBorrarMetodologia").attr('action' , 'javascript:borrar();');
}

function borrar(){
    let idMetodologia = document.getElementById("idBorrar").value
    deleteMetodologia(idMetodologia)
}