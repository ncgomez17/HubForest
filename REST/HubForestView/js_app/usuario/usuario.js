
async function getListUsuarios() {
    const response = await peticionBackGeneral('', 'usuario', 'SEARCH', null);
    return response;
}

function construyeFilausuario(fila) {
    var filaTabla = '<tr> <td>' + fila.id + 
                '</td> <td>' + fila.nombre + 
                '</td> <td>' + fila.correo + 
                '</td> <td>' + fila.rol + 
                '</td> </tr>';

    return filaTabla;
}
