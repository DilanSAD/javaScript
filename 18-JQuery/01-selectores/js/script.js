// El $ es el objeto jQuery y le sigue el selector

// Método que hace referencia a un evento
$(document).ready(function() {


    // Selector de id
    var id = $('#id');

    // Con el método .css puedo agregar propiedades de css por parámetro(llave, valor)
    var id = $('#id').css("background", "red")
        .css("color", "green");

    // Selector de clase
    var clase = $('.clase');

    // Selector de etiqueta
    var etiqueta = $('p').css("cursor", "pointer");

    parrafos.click(function () {
        var that = $(this);

        if (!that.hasClass('grande')) {
            that.addClass('grande');
        } else {
            that.removeClass('grande');
        }
    });

    // Selector de atributo
    var atributo = $('[title="item1"]').css('color', 'red')
        .css('list-style', 'none');


    // Buscar elementos, etiquetas
    var busqueda = $('#caja'.find(',resultado'));
    var busqueda = $('#caja.resultado');

    // .parent para salir del bloque

});