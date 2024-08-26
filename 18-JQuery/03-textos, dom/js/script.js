$(document).ready(function() {

    reloadLinks();

    $('#add_button').click(function() {
        /* Con html puedo incrustar html */

        /* append para añadir */
        $('#menu').append('<li><a href="'+$("#add_link").val()+'"></a></li>');

        $("#add_link").val('');
        /* prepend para añadir al principio de la lista */
        reloadLinks();

        /* before añade antes de ese elemento que se selecciona, en este caso #menu */
        /* after añade después de ese elemento que se selecciona */

    });


});



function reloadLinks() {
    $('a').each(function(index) {
        var that = $(this);
        /* attr para añadir atributos */
        var enlace = that.attr('href');
        that.attr('target', '_blank');

        /* Para eliminar atributos */
        that.removeAttr()

        that.text(enlace);
    });
}