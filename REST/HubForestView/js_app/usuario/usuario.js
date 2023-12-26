
function getListUsuarios() {
    
    creartablavista("usuario",["id", "correo", "nombre","password" ,"rol"],null);
}

function construyeFilausuario(fila) {
    var filaTabla = '<tr> <td>' + fila.id + 
                '</td> <td>' + fila.nombre + 
                '</td> <td>' + fila.correo + 
                '</td> <td>' + fila.rol + 
                '</td> </tr>';

    return filaTabla;
}
