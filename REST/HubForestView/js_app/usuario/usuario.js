function getListUsuarios() {
    return peticionBackGeneral('', 'usuario', 'SEARCH')
        .then(response => (response['code'] === 'RECORDSET_DATOS') ? response['resource'] : null)
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function addUsuario(nombre, correo, password, rol) {
    const usuario = {
        nombre: nombre,
        correo: correo,
        password: password,
        rol: rol
    };
    return peticionBackGeneral('', 'usuario', 'ADD', usuario)
        .then(response => console.log("Solicitud con éxito",response))
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
        });
}

function deleteUsuario(idUsuario) {
    return peticionBackGeneral('', 'usuario', 'DELETE', {'id':idUsuario})
        .then(response => console.log("Solicitud con éxito",response))
        .catch(error => {
            console.error('Error en la solicitud:', error);
            return null;
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
