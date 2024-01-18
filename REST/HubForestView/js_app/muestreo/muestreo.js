async function getListMuestreos() {
    return peticionBackGeneral('', 'muestreo', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMuestreo(response['resource']) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamMuestreos(nombremuestreo, fichero, tipoubicacion, proyecto, metodologia) {
    const muestreo = {
        nombremuestreo: nombremuestreo,
        fichero: fichero,
        tipoubicacion: tipoubicacion,
        proyecto: proyecto,
        metodologia: metodologia
    };
    return peticionBackGeneral('', 'muestreo', 'SEARCH_BY', muestreo)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMuestreo(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamMuestreos_search(nombremuestreo, fichero, tipoubicacion, proyecto, metodologia) {
    const muestreo = {
        nombremuestreo: nombremuestreo,
        fichero: fichero,
        tipoubicacion: tipoubicacion, 
        proyecto: proyecto,
        metodologia: metodologia
    };
    return peticionBackGeneral('', 'muestreo', 'SEARCH', muestreo)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaMuestreo(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function addMuestreo(nombremuestreo, fichero, tipoubicacion, proyecto, metodologia) {
    const muestreo = {
        nombremuestreo: nombremuestreo,
        fichero: fichero,
        tipoubicacion: parseInt(tipoubicacion),
        proyecto: parseInt(proyecto),
        metodologia: parseInt(metodologia)
    };

    return peticionBackGeneral('', 'muestreo', 'ADD', muestreo)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function editMuestreo(idMuestreo, nombre, fichero, tipoubicacion, proyecto, metodologia) {
    const muestreo = {
        idMuestreo: idMuestreo,
        nombremuestreo: nombre,
        fichero: fichero,
        tipoubicacion: tipoubicacion,
        proyecto: proyecto,
        metodologia: metodologia
    };

    return peticionBackGeneral('', 'muestreo', 'EDIT', muestreo)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function deleteMuestreo(idMuestreo) {
  
    return peticionBackGeneral('', 'muestreo', 'DELETE', {'idmuestreo': idMuestreo})
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function construyeTablaMuestreo(filas) {
    let filasTabla = '';
    let tipo = "'Editar muestreo'";
    let element = document.getElementById("datosMuestreos");

    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    $("#datosMuestreos").html("");

    filas.forEach(fila => {
        let atributosTabla = ["'" + fila.idmuestreo + "'", "'" + fila.nombremuestreo + "'", "'" + fila.fichero + "'", "'" + fila.tipoubicacion + "'", "'" + fila.proyecto + "'", "'" + fila.metodologia + "'"];
        let botonEdit='<button class="btn btn-info" id="editarMuestreo" onclick="mostrarModal(' + tipo + ',' + atributosTabla + ')">Editar</button>';

        filasTabla += '<tr> <td>' + fila.idmuestreo + 
                    '</td> <td>' + fila.nombremuestreo + 
                    '</td> <td>' + fila.fichero + 
                    '</td> <td>' + fila.tipoubicacion + 
                    '</td> <td>' + fila.proyecto + 
                    '</td> <td>' + fila.metodologia + 
                    '</td> <td class="text-center">' + botonEdit +
                    '</td> <td class="text-center"><button class="btn btn-danger" id="borrarMuestreo" onclick="mostrarBorrar(' + fila.idmuestreo + ')">Eliminar</button>'
                    
                    '</td>  </tr>';
    });

    $("#datosMuestreos").append(filasTabla);
    cerrarModal()
}

function getAtributos(tipo) {
    let idMuestreo = document.getElementById("idMuestreo").value
    let nombremuestreo = document.getElementById("nombremuestreo").value
    let fichero = document.getElementById("fichero").value
    let tipoubicacion = document.getElementById("tipoubicacion").value
    let proyecto = document.getElementById("proyecto").value
    let metodologia = document.getElementById("metodologia").value

    switch (tipo) {
        case "Editar":
            editMuestreo(idMuestreo, nombremuestreo, fichero, tipoubicacion, proyecto, metodologia)
            break;
        case "Añadir":
            addMuestreo(nombremuestreo, fichero, tipoubicacion, proyecto, metodologia)
            break;
        case "Buscar":
            getListByParamMuestreos_search(nombremuestreo, fichero, tipoubicacion, proyecto, metodologia)
            break;
    }
}

function mostrarModal(tipo, idMuestreo = null, nombremuestreo = null, fichero = null, tipoubicacion = null, proyecto = null, metodologia = null) {
    // Ventana modal
    document.getElementById("ventanaModal").style.display = "block";
    document.getElementById("Titulo").innerHTML = '<h2>' + tipo + '</h2>';
    document.getElementById("aceptar").innerHTML = tipo;

    if (tipo.includes("Editar")) {
        $("#formMuestreo").attr('action', 'javascript:getAtributos("Editar");');
    
        $("#idMuestreo").val(idMuestreo)
        $("#nombremuestreo").val(nombremuestreo)
        $("#fichero").val(fichero)
        $("#tipoubicacion").val(tipoubicacion)
        $("#proyecto").val(proyecto)
        $("#metodologia").val(metodologia)
    } else {
        if (tipo.includes("Buscar")) {
            document.getElementById("nombremuestreo").required = false;
            document.getElementById("fichero").required = false;
            document.getElementById("tipoubicacion").required = false;
            document.getElementById("proyecto").required = false;
            document.getElementById("metodologia").required = false;

            $("#formMuestreo").attr('action', 'javascript:getAtributos("Buscar");')
        } else {
            document.getElementById("nombremuestreo").required = true;
            document.getElementById("fichero").required = true;
            document.getElementById("tipoubicacion").required = true;
            document.getElementById("proyecto").required = true;
            document.getElementById("metodologia").required = true;
            $("#formMuestreo").attr('action', 'javascript:getAtributos("Añadir");')
        }

        $("#idMuestreo").val('')
        $("#nombremuestreo").val('')
        $("#fichero").val('')
        $("#tipoubicacion").val('')
        $("#proyecto").val('')
        $("#metodologia").val('')
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
    $("#formBorrarMuestreo").attr('action' , 'javascript:borrar();');
}

function borrar(){
    let idMuestreo = document.getElementById("idBorrar").value
    deleteMuestreo(idMuestreo)
}