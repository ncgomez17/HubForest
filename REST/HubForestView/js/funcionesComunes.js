function cargarVista(vista) {
  // Utiliza AJAX para cargar el contenido de la vista
  $.ajax({
      url: vista,
      type: 'GET',
      dataType: 'html',
      success: function(data) {
          // Inserta el contenido en el div con id "contenido"
          $('#contenido').html(data);
      },
      error: function(error) {
          console.error('Error al cargar la vista:', error);
      }
  });
}

/** Añade un header a una vista */
function includeHeader() {
    $("#header").html("");

    let header = '<header class="bg-dark text-white py-3">' +
                '<div class="container">' +
                '<div class="row">' +
                '<div class="col-md-4">' +
                '<img src="img/logo.png" alt="Logo de la Aplicación" class="img-fluid" style="width: 30%">' +
                '</div>' +
                '<div class="col-md-8">' +
                '<nav class="navbar navbar-expand-md navbar-dark">' +
                '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">' +
                '<span class="navbar-toggler-icon"></span>' +
                '</button>' +
                '<div class="collapse navbar-collapse" id="navbarNav">' +
                '<ul class="navbar-nav ml-auto">' +
                '<li class="nav-item active">' +
                '<a class="nav-link" href="index.html">Inicio</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="editUsuarios.html">Editar usuarios</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="listaUsuarios.html">Lista usuarios</a>' +
                '</li>' +
                '</ul>' +
                '</div>' +
                '</nav>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</header>';
    
    $("#header").append(header);
}

/** Añade el footer a una vista */
function includeFooter() {
    $("#footer").html("");
         
    
    let footer = '<footer class="bg-dark text-white py-4 mt-5">' +
                '<div class="container">' +
                '<div class="row">' +
                '<div class="col-md-4">' +
                '<div class="row d-flex align-items-center" style="justify-content: space-evenly">' +
                '<img src="img/logo.png" alt="Logo Pequeño" class="img-fluid" style="width: 50px; height: auto;">' +
                '<div class="row w-50 d-flex justify-content-around">' +
                '<span>Siguenos en:</span>' +
                '<div class="row">' +
                '<a href="https://github.com/ncgomez17/HubForest" target="_blank">' +
                '<img src="img/github-icon.svg" alt="Instagram" width="24" height="24">' +
                '</a>' +
                '<a href="https://www.instagram.com/iagosevic_" target="_blank">' +
                '<img src="img/instagram-icon.svg" alt="Instagram" width="24" height="24">' +
                '</a>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-8">' +
                '<h5>Contacto</h5>' +
                '<div class="row d-flex" style="justify-content: space-evenly">' +
                '<span>Correo: info@hubforest.com</span>' +
                '<span>Teléfono: +123 456 789</span>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</footer>';

    $("#footer").append(footer);
}

function userLoggedIn() {
    // esta función debe comprobar si un usuario está o no logueado. Si hay token o no
}