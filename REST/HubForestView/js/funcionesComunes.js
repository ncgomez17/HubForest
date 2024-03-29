async function cargarRegistro() {
    const resultadoValidacion = await validarUsuario();
    if(resultadoValidacion.data.ok ===false){
        $.ajax({
            url: 'registro.html',
            type: 'GET',
            dataType: 'html',
            success: function(data) {
                // Inserta el contenido en el div con id "contenido"
                $('#contenido').html(data);
                $( "#menu" ).hide();
            },
            error: function(error) {
                console.error('Error al cargar la vista:', error);
            }
        });
}
else{
    $.ajax({
        url: 'home.html',
        type: 'GET',
        dataType: 'html',
        success: function(data) {
            // Inserta el contenido en el div con id "contenido"
            $('#contenido').html(data);
            $( "#menu" ).show();
        },
        error: function(error) {
            console.error('Error al cargar la vista:', error);
        }
    });
}
}

/** Añade un header a una vista */
function includeHeader() {
    $("#header").html("");

    let header = '<header class="bg-dark text-white py-3">' +
                '<div class="container">' +
                // '<div class="row">' +
                '<div class="col-md-1">' +
                '<a href="index.html" class="d-flex justify-content-start">' +
                '<img src="img/logo.png" alt="Logo de la Aplicación" class="img-fluid" style="width: 100%">' +
                '</a>' +
                '</div>' +
                '<div id="menu" class="col-md-11 d-flex justify-content-center">' +
                '<nav class="navbar navbar-expand-md navbar-dark">' +
                '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">' +
                '<span class="navbar-toggler-icon"></span>' +
                '</button>' +
                '<div class="collapse navbar-collapse" id="navbarNav">' +
                '<ul class="navbar-nav ml-auto">' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="index.html">Inicio</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="Usuarios.html">Usuarios</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="proyectos.html">Proyectos</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="muestreos.html">Muestreos</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="metodologias.html">Metodologías</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="muestra.html">Muestras</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="muestreosrealizados.html">Muestreos realizados</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="tipoUbicacion.html">Tipos ubicación</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="ubicacion.html">Ubicaciones</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="metodoalmacenamiento.html">Métodos almacenamiento</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="metodomuestreo.html">Métodos muestreo</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="modificacionmetododemuestreo.html">Modif. métodos muestreo</a>' +                
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="preparacionanalisis.html">Prep. analisis</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="modificacionmetodologiaanalisis.html">Mod. metodologia analisis</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="procesadomuestra.html">Proc. muestra</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="parametros.html">Parámetros</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="unidad.html">Unidades</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="analisis.html">Análisis</a>' +
                '</li>' +
                '<li class="nav-item">' +
                '<a class="nav-link" href="metodologiaanalisis.html">Metod. análisis</a>' +
                '</li>' +
                '</ul>' +
                '</div>' +
                '</nav>' +
                '</div>' +
                // '</div>' +
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

/** Función para establecer el valor de la cookie*/
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

/** Función para obtener el valor de la cookie*/
function getCookie(name) {
    let cookie_name = name + "=";
    let cookie_array = document.cookie.split(';');

    for (let cookie of cookie_array) {
        while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
        if (cookie.indexOf(cookie_name) == 0) return cookie.substring(cookie_name.length, cookie.length);
    }

    return null;
}

/** Comprueba que un usuario esté logueado, obteniendo la cookie 'token'*/
function userLoggedIn() {
    let user_token = getCookie('tokenUsuario');
    return (user_token !== null);
}

/** Muestra un error en la búsqueda en el modal */
function mostrarErrorBusq(){
    // Ventana modal
    document.getElementById("mensajeError").style.display = "block";
}

/** Oculta un error en la búsqueda en el modal */
function cerrarErrorBusq(){
    // Ventana modal
    document.getElementById("mensajeError").style.display = "none";
}

/** Cierra el modal de confirmación de eliminar un elemento */
function cerrarBorrar(){
    // Ventana modal
    var modal = document.getElementById("comprobarBorrar");
    modal.style.display = "none"
}

/**Función para encriptar la pass en md5*/
function encriptar(idElemento){
  	return hex_md5(document.getElementById(idElemento).value);
}

function iniciarSesion() {
    // Obtener los valores de nombre de usuario y contraseña
    var nombreUsuario = $('#correoLogin').val();
    var contrasena = encriptar('passwordLogin');
    // Llamar a la función loginUsuario con los datos del formulario
    loginUsuario(nombreUsuario, contrasena)
      .then(response => {
        if (response.status==="OK") {
            cargarRegistro()
        } else {
          // Mostrar el modal de error en caso de un inicio de sesión fallido
          $('#errorModal').modal('show');
        }
      });
  }
  function submitFormRegistro() {
    const nombre = $('#nombre').val();
    const password = encriptar('password');
    const correo = $('#correo').val();

    registrarUsuario(nombre, correo, password, 'Usuario')
        .then(response => {
            if (response && response.status === 'OK') {
                $('#registroModal').modal('hide');
                cargarRegistro();
            } else {
                $('#registroErrorModal').modal('show');
            }
        })
        .catch(error => {
            console.error('Error en el registro:', error);
            $('#registroErrorModal').modal('show');
        });

    // Evitar que el formulario se envíe de manera tradicional
    return false;
}

