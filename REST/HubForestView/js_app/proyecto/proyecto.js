
function getListProyectos() {

  return peticionBackGeneral('', 'proyecto', 'SEARCH')
      .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaProyecto(response['resource']) : null)
      .catch(error => {
          console.error('Error en la solicitud:', error);
          return null;
      });
      
}


function getListByParamProyectos(nombre, fichero, descripcion) {
  const proyecto = {
      nombre: nombre,
      fichero: fichero,
      descripcion: descripcion
  };
  return peticionBackGeneral('', 'proyecto', 'SEARCH_BY', proyecto)
      .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaProyecto(response['resource']) :  mostrarErrorBusq())
      .catch(error => {
          console.error('Error en la solicitud:', error);
          return null;
      });
}

function getListByParamProyectos_search(nombre, fichero, descripcion) {
  const proyecto = {
      nombre: nombre,
      fichero: fichero,
      descripcion: descripcion
  };
  return peticionBackGeneral('', 'proyecto', 'SEARCH', proyecto)
      .then(response => (response['code'] === 'RECORDSET_DATOS') ? construyeTablaProyecto(response['resource']) :  mostrarErrorBusq())
      .catch(error => {
          console.error('Error en la solicitud:', error);
          return null;
      });
}

function addProyecto(nombre, fichero, descripcion, encargado) {
  const proyecto = {
    nombre: nombre,
    fichero: fichero,
    descripcion: descripcion,
    encargado: encargado
  };

  return peticionBackGeneral('', 'proyecto', 'ADD', proyecto)
      .then(response => {
          location.reload();
          return { status: 'OK', data: response };
      })
      .catch(error => {
          console.error('Error en la solicitud:', error);
          return null;
      });
}

function editProyecto(idProyecto, nombre, fichero, descripcion, encargado) {
  const proyecto = {
    idProyecto: idProyecto,
    nombre: nombre,
    fichero: fichero,
    descripcion: descripcion,
    encargado: encargado
};

  return peticionBackGeneral('', 'proyecto', 'EDIT', proyecto)
      .then(response => {
          location.reload();
          return { status: 'OK', data: response };
      })
      .catch(error => {
          console.error('Error en la solicitud:', error);
          return null;
      });
}

function deleteProyecto(idProyecto) {
  
  return peticionBackGeneral('', 'proyecto', 'DELETE', {'id': idProyecto})
      .then(response => {
          location.reload();
          return { status: 'OK', data: response };
      })
      .catch(error => {
          console.error('Error en la solicitud:', error);
          return null;
      });
}

function construyeTablaProyecto(filas) {

  var filasTabla = ''

  var tipo = "'Editar proyecto'"

  var element = document.getElementById("datosProyectos");
  while (element.firstChild) {
      element.removeChild(element.firstChild);
  }

  $("#datosProyectos").html("");
  filas.forEach(fila => {
      var atributosTabla = ["'" + fila.idProyecto + "'","'" + fila.nombre + "'", "'" + fila.fichero + "'", "'" + fila.descripcion + "'", "'" + fila.encargado + "'"];
      var botonEdit='<button class="btn btn-info" id="editarProyecto" onclick="mostrarModal('+tipo+','+atributosTabla+')">Editar</button>'

      filasTabla += '<tr> <td>' + fila.idProyecto + 
              '</td> <td>' + fila.nombre + 
              '</td> <td>' + fila.fichero + 
              '</td> <td>' + fila.descripcion + 
              '</td> <td>' + fila.encargado + 
              '</td> <td class="text-center">' + botonEdit +
              '</td> <td class="text-center"><button class="btn btn-danger" id="borrarProyecto" onclick="mostrarBorrar('+fila.id+')">Eliminar</button>'
              
              '</td>  </tr>';
  });
  
  $("#datosProyectos").append(filasTabla);
  cerrarModal()
}

function getAtributos(tipo){
  var idProyecto = document.getElementById("idProyecto").value
  var nombre = document.getElementById("nombre").value
  var fichero = document.getElementById("fichero").value
  var descripcion = document.getElementById("descripcion").value
  var encargado = document.getElementById("encargado").value
   switch(tipo){
      case "Editar":
          editProyecto(idProyecto,nombre,fichero,descripcion,encargado)
          break;
      case "Añadir":
          addProyecto(nombre,fichero, descripcion, encargado)
          break;
      case "Buscar":
          getListByParamProyectos_search(nombre,fichero,descripcion, encargado)
          break;
   }
 /* if(tipo.includes("Editar")){
      
  }
  else{
     
      
  }*/
}

function mostrarModal(tipo, idProyecto=null, nombre=null, fichero=null, descripcion=null, encargado=null){
  // Ventana modal
  document.getElementById("ventanaModal").style.display = "block";
  document.getElementById("Titulo").innerHTML = '<h2>'+tipo+'</h2>';
  document.getElementById("aceptar").innerHTML = tipo;
  if(tipo.includes("Editar")){
      $("#formProyecto").attr('action' , 'javascript:getAtributos("Editar");');

      $("#idProyecto").val(idProyecto);
      $("#nombre").val(nombre);
      $("#fichero").val(fichero);
      $("#descripcion").val(descripcion);
      $("#encargado").val(encargado);
  }
  else{
      if(tipo.includes("Buscar")){
          document.getElementById("nombre").required = false;
          document.getElementById("fichero").required = false;
          document.getElementById("descripcion").required = false;
          document.getElementById("encargado").required = false;
          $("#formProyecto").attr('action' , 'javascript:getAtributos("Buscar");');
      }
      else{
          $("#formProyecto").attr('action' , 'javascript:getAtributos("Añadir");');
      }

      $("#idProyecto").val('');
      $("#nombre").val('');
      $("#fichero").val('');
      $("#descripcion").val('');
      $("#encargado").val('');
  }
}


function cerrarModal(){
  // Ventana modal
  var modal = document.getElementById("ventanaModal");
  modal.style.display = "none"

  document.getElementById("nombre").required = true;
  document.getElementById("fichero").required = true;
  document.getElementById("descripcion").required = true;
  document.getElementById("encargado").required = true;

}

function mostrarBorrar(id){
  // Ventana modal
  document.getElementById("comprobarBorrar").style.display = "block";
  $("#idBorrar").val(id)
  $("#formBorrarProyecto").attr('action' , 'javascript:borrar();');
}

function borrar(){
  var id = document.getElementById("idBorrar").value
  deleteProyecto(id)
}