
function getListUsuarios() {

    $.ajax({
        method: "POST",
        url: "http://localhost:8080/HubForestBack/",
        data: {controlador:"usuario", action:"SEARCH"}
        
    }).done(function( response ) {
        if (response.ok == true) {

            $("#datosUsuarios").html("");

            var arrayUsuarios = response.resource;


            for (var i = 0; i <arrayUsuarios.length; i++) {

                var linea = arrayUsuarios[i];
                var tr = construyeFilaUsuario(linea);
                $("#datosUsuarios").append(tr);
            }   
            return response.resource;

        }
    });
}

function construyeFilausuario(fila) {
    var filaTabla = '<tr> <td>' + fila.id + 
                '</td> <td>' + fila.nombre + 
                '</td> <td>' + fila.correo + 
                '</td> <td>' + fila.rol + 
                '</td> </tr>';

    return filaTabla;
}
