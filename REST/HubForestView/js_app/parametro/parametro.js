async function getListParametros() {
    return peticionBackGeneral('', 'parametro', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaParametro(response['resource']) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamParametros(nombreparametro, analisis) {
    const parametro = {
        nombreparametro: nombreparametro,
        analisis: analisis
    };
    return peticionBackGeneral('', 'parametro', 'SEARCH_BY', parametro)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaParametro(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListByParamParametros_search(nombreparametro, analisis) {
    const parametro = {
        nombreparametro: nombreparametro,
        analisis: analisis
    };
    return peticionBackGeneral('', 'parametro', 'SEARCH', parametro)
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaParametro(response['resource']) :  mostrarErrorBusq())
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function addParametro(nombreparametro, analisis) {
    const parametro = {
        nombreparametro: nombreparametro,
        analisis: analisis
    };

    return peticionBackGeneral('', 'parametro', 'ADD', parametro)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function editParametro(idParametro, nombreparametro, analisis) {
    const parametro = {
        idparametro: idParametro,
        nombreparametro: nombreparametro,
        analisis: analisis
    };
  
    return peticionBackGeneral('', 'parametro', 'EDIT', parametro)
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function deleteParametro(idparametro) {
  
    return peticionBackGeneral('', 'parametro', 'DELETE', {'idparametro': idparametro})
        .then(response => {
            location.reload();
            return { status: 'OK', data: response };
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

async function getListAnalisis(analisis) {
    return peticionBackGeneral('', 'analisis', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? rellenarSelectAnalisis("analisis", response['resource'], analisis) : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function construyeTablaParametro(filas) {

    var filasTabla = ''
  
    var tipo = "'Editar parámetro'"
  
    var element = document.getElementById("datosParametros");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
  
    $("#datosParametros").html("");
    filas.forEach(fila => {
        var atributosTabla = ["'" + fila.idparametro + "'","'" + fila.nombreparametro + "'", "'" + fila.analisis + "'"];
        var botonEdit='<button class="btn btn-info" id="editarParametro" onclick="mostrarModal('+tipo+','+atributosTabla+')">Editar</button>'
  
        filasTabla += '<tr> <td>' + fila.idparametro + 
            '</td> <td>' + fila.nombreparametro + 
            '</td> <td>' + fila.analisis + 
            '</td> <td class="text-center">' + botonEdit +
            '</td> <td class="text-center"><button class="btn btn-danger" id="borrarParametro" onclick="mostrarBorrar(' + fila.idparametro + ')">Eliminar</button>'
            
            '</td>  </tr>';
    });
    
    $("#datosParametros").append(filasTabla);
    cerrarModal()
}

function getAtributos(tipo) {
    let idParametro = document.getElementById("idparametro").value
    let nombreparametro = document.getElementById("nombreparametro").value
    let analisis = document.getElementById("analisis").value

    switch (tipo) {
        case "Editar":
            editParametro(idParametro, nombreparametro, analisis)
            break;
        case "Añadir":
            addParametro(nombreparametro, analisis)
            break;
        case "Buscar":
            getListByParamParametros_search(nombreparametro, analisis)
            break;
    }
}

function mostrarModal(tipo, idParametro=null, nombreparametro=null, analisis=null){
    // Ventana modal
    document.getElementById("ventanaModal").style.display = "block";
    document.getElementById("Titulo").innerHTML = '<h2>'+tipo+'</h2>';
    document.getElementById("aceptar").innerHTML = tipo;

    getListAnalisis(analisis);

    if(tipo.includes("Editar")){
        $("#formParametro").attr('action' , 'javascript:getAtributos("Editar");');
  
        $("#idParametro").val(idParametro);
        $("#nombreparametro").val(nombreparametro);
        $("#analisis").val(analisis);
    }
    else{
        if(tipo.includes("Buscar")){
            document.getElementById("nombreparametro").required = false;
            document.getElementById("analisis").required = false;
            $("#formParametro").attr('action' , 'javascript:getAtributos("Buscar");');
        }
        else{
            document.getElementById("nombreparametro").required = true;
            document.getElementById("analisis").required = true;
            $("#formParametro").attr('action' , 'javascript:getAtributos("Añadir");');
        }
  
        $("#idParametro").val('');
        $("#nombreparametro").val('');
        $("#analisis").val('');
    }
}

function rellenarSelectAnalisis(tipo, filas, analisis) {
    let element = document.getElementById(tipo);
    let option = document.createElement('option');

    option.value = "";
    option.textContent = "-- Selecciona análisis --";
    element.appendChild(option);

    filas.forEach(fila => {
        option = document.createElement('option');
        option.value = fila.idanalisis;
        option.textContent = fila.nombre;
        element.appendChild(option);
    })

    if (analisis != null) element.value = analisis;
}

function cerrarModal(){
    // Ventana modal
    var modal = document.getElementById("ventanaModal");
    modal.style.display = "none"
}
  
function mostrarBorrar(id){
    // Ventana modal
    document.getElementById("comprobarBorrar").style.display = "block";
    $("#idBorrar").val(id)
    $("#formBorrarParametro").attr('action' , 'javascript:borrar();');
}
  
function borrar(){
    var idParametro = document.getElementById("idBorrar").value
    deleteParametro(idParametro)
}