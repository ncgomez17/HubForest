async function getListMuestra() {
    return peticionBackGeneral('', 'muestra', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMuestra(response['resource']) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamMuestra(nombre, muestreo, malmacec, mmuestreo, mmmuestreo) {
    const muestra = {
        nombre: nombre,
        muestreo: muestreo,
        malmacec: malmacec,
        mmuestreo: mmuestreo,
        mmmuestreo: mmmuestreo
    };
    return peticionBackGeneral('', 'muestra', 'SEARCH_BY', muestra)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMuestra(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamMuestra_search(nombre, muestreo, malmacec, mmuestreo, mmmuestreo) {
    const muestra = {
        nombre: nombre,
        muestreo: muestreo,
        malmacec: malmacec,
        mmuestreo: mmuestreo,
        mmmuestreo: mmmuestreo
    };
    return peticionBackGeneral('', 'muestra', 'SEARCH', muestra)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMuestra(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function addMuestra(nombre, muestreo, malmacec, mmuestreo, mmmuestreo) {
    const muestra = {
        nombre: nombre,
        muestreo: muestreo,
        malmacec: malmacec,
        mmuestreo: mmuestreo,
        mmmuestreo: mmmuestreo
    };

    return peticionBackGeneral('', 'muestra', 'ADD', muestra)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function editMuestra(idmuestra, nombre, muestreo, malmacec, mmuestreo, mmmuestreo) {
    const muestra = {
        idmuestra: idmuestra,
        nombre: nombre,
        muestreo: muestreo,
        malmacec: malmacec,
        mmuestreo: mmuestreo,
        mmmuestreo: mmmuestreo
    };

    return peticionBackGeneral('', 'muestra', 'EDIT', muestra)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function deleteMuestra(idMuestra) {
  
    return peticionBackGeneral('', 'muestra', 'DELETE', {'idmuestra': idMuestra})
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function construyeTablaMuestra(filas) {
    let filasTabla = '';
    let tipo = "'Editar muestra'";
    let element = document.getElementById("datosMuestras");

    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    $("#datosMuestras").html("");

    filas.forEach(fila => {
        let atributosTabla = ["'" + fila.idmuestra + "'", "'" + fila.nombre + "'", "'" + fila.muestreo + "'", "'" + fila.malmacec + "'", "'" + fila.mmuestreo + "'", "'" + fila.mmmuestreo + "'"];
        let botonEdit='<button class="btn btn-info" id="editarMuestra" onclick="mostrarModal(' + tipo + ',' + atributosTabla + ')">Editar</button>';

        filasTabla += '<tr> <td>' + fila.idmuestra + 
                    '</td> <td>' + fila.nombre + 
                    '</td> <td>' + fila.muestreo + 
                    '</td> <td>' + fila.malmacec + 
                    '</td> <td>' + fila.mmuestreo + 
                    '</td> <td>' + fila.mmmuestreo + 
                    '</td> <td class="text-center">' + botonEdit +
                    '</td> <td class="text-center"><button class="btn btn-danger" id="borrarMuestra" onclick="mostrarBorrar(' + fila.idmuestra + ')">Eliminar</button>'
                    
                    '</td>  </tr>';
    });

    $("#datosMuestras").append(filasTabla);
    cerrarModal()
}

function getAtributos(tipo) {
    let idMuestra = document.getElementById("idmuestra").value
    let nombre = document.getElementById("nombre").value
    let muestreo = document.getElementById("muestreo").value
    let malmacec = document.getElementById("malmacec").value
    let mmuestreo = document.getElementById("mmuestreo").value
    let mmmuestreo = document.getElementById("mmmuestreo").value

    switch (tipo) {
        case "Editar":
            editMuestra(idMuestra, nombre, muestreo, malmacec, mmuestreo, mmmuestreo)
            break;
        case "Añadir":            
            addMuestra(nombre, muestreo, malmacec, mmuestreo, mmmuestreo)
            break;
        case "Buscar":
            getListByParamMuestras_search(nombre, muestreo, malmacec, mmuestreo, mmmuestreo)
            break;
    }
}

function mostrarModal(tipo, idMuestra = null, nombre = null, muestreo = null, malmacec = null, mmuestreo = null, mmmuestreo = null) {
    // Ventana modal
    document.getElementById("ventanaModal").style.display = "block";
    document.getElementById("Titulo").innerHTML = '<h2>' + tipo + '</h2>';
    document.getElementById("aceptar").innerHTML = tipo;

    if (tipo.includes("Editar")) {
        $("#formMuestra").attr('action', 'javascript:getAtributos("Editar");');
    
        $("#idMuestra").val(idMuestra)
        $("#nombre").val(nombre)
        $("#muestreo").val(muestreo)
        $("#malmacec").val(malmacec)
        $("#mmuestreo").val(mmuestreo)
        $("#mmmuestreo").val(mmmuestreo)
    } else {
        if (tipo.includes("Buscar")) {
            document.getElementById("nombre").required = false;
            document.getElementById("muestreo").required = false;
            document.getElementById("malmacec").required = false;
            document.getElementById("mmuestreo").required = false;
            document.getElementById("mmmuestreo").required = false;

            $("#formMuestra").attr('action', 'javascript:getAtributos("Buscar");')
        } else {
            $("#formMuestra").attr('action', 'javascript:getAtributos("Añadir");')
        }

        $("#idMuestra").val('')
        $("#nombre").val('')
        $("#muestreo").val('')
        $("#malmacec").val('')
        $("#mmuestreo").val('')
        $("#mmmuestreo").val('')
    }
}

function cerrarModal() {
    // Ventana modal
    var modal = document.getElementById("ventanaModal");
    modal.style.display = "none"

    document.getElementById("nombre").required = true;
    document.getElementById("muestreo").required = true;
    document.getElementById("malmacec").required = true;
    document.getElementById("mmuestreo").required = true;
    document.getElementById("mmmuestreo").required = true;
}

function mostrarBorrar(id){
    // Ventana modal
    document.getElementById("comprobarBorrar").style.display = "block";
    $("#idBorrar").val(id)
    $("#formBorrarMuestra").attr('action' , 'javascript:borrar();');
}

function borrar(){
    let idMuestra = document.getElementById("idBorrar").value
    deleteMuestra(idMuestra)
}