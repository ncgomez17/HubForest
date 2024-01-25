async function getListAnalisis() {
    return peticionBackGeneral('', 'analisis', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaAnalisis(response['resource']) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamAnalisis(nombre, pmuestra, manalisis, mmanalisis) {
    const analisis = {
        nombre: nombre,
        pmuestra: pmuestra,
        manalisis: manalisis,
        mmanalisis: mmanalisis
    };
    return peticionBackGeneral('', 'analisis', 'SEARCH_BY', analisis)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaAnalisis(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamAnalisis_search(nombre, pmuestra, manalisis, mmanalisis) {
    const analisis = {
        nombre: nombre,
        pmuestra: pmuestra,
        manalisis: manalisis,
        mmanalisis: mmanalisis
    };
    return peticionBackGeneral('', 'analisis', 'SEARCH', analisis)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaAnalisis(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function addAnalisis(nombre, pmuestra, manalisis, mmanalisis) {
    const analisis = {
        nombre: nombre,
        pmuestra: pmuestra,
        manalisis: manalisis,
        mmanalisis: mmanalisis
    };

    return peticionBackGeneral('', 'analisis', 'ADD', analisis)
        .then(response => {
            console.log('response', response)
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function editAnalisis(nombre, pmuestra, manalisis, mmanalisis) {
    const analisis = {
        nombre: nombre,
        pmuestra: pmuestra,
        manalisis: manalisis,
        mmanalisis: mmanalisis
    };

    return peticionBackGeneral('', 'analisis', 'EDIT', analisis)
        .then(response => {
            location.reload();
            
            return { status: 'OK', data: response }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function deleteAnalisis(idanalisis) {
  
    return peticionBackGeneral('', 'analisis', 'DELETE', {'idanalisis': idanalisis})
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListProcMuestra(pmuestra) {
    return peticionBackGeneral('', 'procesadomuestra', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? rellenarSelectProcMuestra("pmuestra", response['resource'], pmuestra) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListMetodAnalisis(manalisis) {
    return peticionBackGeneral('', 'metodologiaanalisis', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? rellenarSelectMetodAnalisis("manalisis", response['resource'], manalisis) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListModifMetodAnalisis(mmanalisis) {
    return peticionBackGeneral('', 'modificacionmetodologiaanalisis', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? rellenarSelectModifMetodAnalisis("mmanalisis", response['resource'], mmanalisis) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function construyeTablaAnalisis(filas) {
    let filasTabla = '';
    let tipo = "'Editar analisis'";
    let element = document.getElementById("datosAnalisis");


    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    $("#datosAnalisis").html("");

    filas.forEach(fila => {
        let atributosTabla = ["'" + fila.idanalisis + "'", "'" + fila.nombre + "'", "'" + fila.pmuestra + "'", "'" + fila.manalisis + "'", "'" + fila.mmanalisis + "'"];
        let botonEdit='<button class="btn btn-info" id="editarAnalisis" onclick="mostrarModal(' + tipo + ',' + atributosTabla + ')">Editar</button>';

        filasTabla += '<tr> <td>' + fila.idanalisis + 
                    '</td> <td>' + fila.nombre + 
                    '</td> <td>' + fila.pmuestra + 
                    '</td> <td>' + fila.manalisis + 
                    '</td> <td>' + fila.mmanalisis +
                    '</td> <td class="text-center">' + botonEdit +
                    '</td> <td class="text-center"><button class="btn btn-danger" id="borrarAnalisis" onclick="mostrarBorrar(' + fila.idanalisis + ')">Eliminar</button>'
                    '</td>  </tr>';
    });

    $("#datosAnalisis").append(filasTabla);
    cerrarModal()
}

function getAtributos(tipo) {
    let idanalisis = document.getElementById("idanalisis").value
    let nombre = document.getElementById("nombre").value
    let pmuestra = document.getElementById("pmuestra").value
    let manalisis = document.getElementById("manalisis").value
    let mmanalisis = document.getElementById("mmanalisis").value
    
    switch (tipo) {
        case "Editar":
            editAnalisis(idanalisis, nombre, pmuestra, manalisis, mmanalisis)
            break;
        case "Añadir":
            addAnalisis(nombre, pmuestra, manalisis, mmanalisis)
            break;
        case "Buscar":
            getListByParamAnalisis_search(nombre, pmuestra, manalisis, mmanalisis)
            break;
    }
}

function mostrarModal(tipo, idanalisis = null, nombre = null, pmuestra = null, manalisis = null, mmanalisis = null) {
    // Ventana modal
    document.getElementById("ventanaModal").style.display = "block";
    document.getElementById("Titulo").innerHTML = '<h2>' + tipo + '</h2>';
    document.getElementById("aceptar").innerHTML = tipo;

    getListProcMuestra(pmuestra);
    getListMetodAnalisis(manalisis);
    getListModifMetodAnalisis(mmanalisis);

    if (tipo.includes("Editar")) {
        $("#formAnalisis").attr('action', 'javascript:getAtributos("Editar");');
    
        $("#idanalisis").val(idanalisis)
        $("#nombre").val(nombre)
        $("#pmuestra").val(pmuestra)
        $("#manalisis").val(manalisis)
        $("#mmanalisis").val(mmanalisis)

    } else {
        if (tipo.includes("Buscar")) {
            document.getElementById("nombre").required = false;
            document.getElementById("pmuestra").required = false;
            document.getElementById("manalisis").required = false;
            document.getElementById("mmanalisis").required = false;
            $("#formAnalisis").attr('action', 'javascript:getAtributos("Buscar");')
        } else {
            document.getElementById("nombre").required = true;
            document.getElementById("pmuestra").required = true;
            document.getElementById("manalisis").required = true;
            document.getElementById("mmanalisis").required = true;
            $("#formAnalisis").attr('action', 'javascript:getAtributos("Añadir");')
        }

        $("#idanalisis").val('')
        $("#nombre").val('')
        $("#pmuestra").val('')
        $("#manalisis").val('')
        $("#mmanalisis").val('')
    }
}

function rellenarSelectProcMuestra(tipo, filas, pmuestra) {
    let element = document.getElementById(tipo);
    let option = document.createElement('option');

    option.value = "";
    option.textContent = "-- Selecciona procesado muestra --";
    element.appendChild(option);

    filas.forEach(fila => {
        option = document.createElement('option');
        option.value = fila.idpmuestra;
        option.textContent = fila.nombre;
        element.appendChild(option);
    })

    if (pmuestra != null) element.value = pmuestra;
}

function rellenarSelectMetodAnalisis(tipo, filas, manalisis) {
    let element = document.getElementById(tipo);
    let option = document.createElement('option');

    option.value = "";
    option.textContent = "-- Selecciona metodología análisis --";
    element.appendChild(option);

    filas.forEach(fila => {
        option = document.createElement('option');
        option.value = fila.idmanalisis;
        option.textContent = fila.nombre;
        element.appendChild(option);
    })

    if (manalisis != null) element.value = manalisis;
}

function rellenarSelectModifMetodAnalisis(tipo, filas, mmanalisis) {
    let element = document.getElementById(tipo);
    let option = document.createElement('option');

    option.value = "";
    option.textContent = "-- Selecciona modif. metodología análisis --";
    element.appendChild(option);

    filas.forEach(fila => {
        option = document.createElement('option');
        option.value = fila.idmmanalisis;
        option.textContent = fila.nombre;
        element.appendChild(option);
    })

    if (mmanalisis != null) element.value = mmanalisis;
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
    $("#formBorrarAnalisis").attr('action' , 'javascript:borrar();');
}

function borrar(){
    let idanalisis = document.getElementById("idBorrar").value
    deleteAnalisis(idanalisis)
}