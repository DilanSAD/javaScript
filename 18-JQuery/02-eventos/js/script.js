$(document).ready(function() {

    var caja = $('#caja');

    /*
    // MouseOver animación al entrar el hover
    caja.mouseover(function() {
        $(this).css("background", "red");
    });

    // mouseOut animación al salir el hover
    caja.mouseout(function() {
        $(this).css("background", "green");
    });
    */
    function cambiaRojo() {
        $(this).css("background", "red");
    }

    function cambiaVerde() {
        $(this).css("background", "green");
    }

    // Hover resume mouseOver y mouseOut
    caja.hover(cambiaRojo, cambiaVerde);


    // Click
    caja.click(function () {
        $(this).css("background", "violet")
            .css("color", "red");
    })

    // Doble click
    caja.dblclick(function () {
        $(this).css("background", "yellow")
            .css("color", "green");
    })


    var nombre = $("#nombre");
    var datos = $("#datos");


    // focus
    nombre.focus(function () {
        $(this).css("border", "4px solid green");
    })

    // blur Al salir del focus
    nombre.blur(function () {
        $(this).css("border", "1px solid red");

        datos.text($(this).val()).show();

    })


    // mouseDown mientras presione el click
    datos.mousedown(function () {
        $(this).css("border-color", "blue");
    })

    // mouseUp cuando se deje de presionar el click
    datos.mouseup(function () {
        $(this).css("border-color", "violet");
    })



    // mouseMove captura el movimiento del mouse
    $(document).mousemove(function () {
        console.log(event.clientX);
        console.log(event.clientY);

        var sigueme = $("#sigueme");

        sigueme.css("left", event.clientX)
            .css("top", event.clientY);
    })

});