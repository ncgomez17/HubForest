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