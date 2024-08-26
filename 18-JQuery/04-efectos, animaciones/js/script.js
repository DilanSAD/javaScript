$(document).ready(function () {

    var caja = $('#caja');
    /* .hide para ocultar */
    $('#mostrar').hide();

    $('#mostrar').click(function () {
        $(this).hide();

        /* Para realizar efectos tenemos diferentes velocidades fast, normal, slow */

        /* .show realiza un arrastre */
        $('#ocultar').show('fast');

        /* .fadeIn fundido desde el centro
        caja.fadeIn('slow');
        */

        /* .fadeTo de un estado a otro (velocidad, transparencia) */
        caja.fadeTo('slow', 0.9);

        /* .slideDown para mostrar efecto de bajar el slider */
        caja.slideDown('slow');

    });

    $('#ocultar').click(function () {
        $(this).hide();


        $('#mostrar').show('slow');

        /* .fadeOut fundido desde las esquinas 
        caja.fadeOut('slow');
        */

        /* .fadeTo de un estado a otro (velocidad, transparencia)*/
        caja.fadeTo('slow', 0.2);


        /* .slideUp para mostrar efecto de subir el slider */
        caja.slideUp('slow');
    });


    $('#todo').click(function () {

        /* .toggle realiza con un click show con otro hide */
        caja.toggle('fast');

        /* .fadeTogle lo mismo pero con fundido */
        caja.fadeToggle('fast');

        /* .fadeTogle lo mismo pero con slider */
        caja.slideToggle('fast');
    });


    $('#animado').click(function () {

        /*.animate para realizar cualquier animación */
        caja.animate({
            marginLeft: '500px',
            fontSize: '10px'
            }, 'fast')
        .animate({
            borderRadius: '900px',
            height: '120px',
            marginTop: '50px'
        }, 'slow');
    });

});