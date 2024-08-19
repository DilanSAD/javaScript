// El $ es el objeto jQuery y le sigue el selector

// Método que hace referencia a un evento
$(document).ready(function () {


    // Selector de id
    var id = $('#id');

    // Con el método css puedo agregar propiedades de css por parámetro(llave, valor)
    var id = $('#id').css("background", "red")
        .css("color", "white");


    // Sector de clase
    var id = $('.clase');

    // Selector de etiqueta
    var id = $('p').css("cursor", "pointer");

    parrafos.click(function() {
        var that = $(this);

        if (!that.hasClass('grande')) {
            that.addClass('grande');
        } else {
            that.removeClass('grande');
        }
    });

});