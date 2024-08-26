$(document).ready(function () {

    // .draggable dar la posibilidad de mover elementos libremente
    $('.elemento').draggable();

    // .resizable dar la posibilidad de redimensionar elementos
    $('.elemento').resizable();

    // .selectable seleccionar elementos
    $('.lista-seleccionable').selectable();

    // .sortable dar la posibilidad de ordenar elementos de el array
    $('.lista-seleccionable').sortable();


    $('#elemento-movido').draggable();
    // .droppable efecto de soltar y arrastra
    $('#area').droppable({
        drop: function () {
            alert("Elemento adentro del area");
        }
    });


    // Efectos
    $('#mostrar').click(function () {
        $('.caja-efectos').toggle("fade");
        $('.caja-efectos').toggle("blind");
        $('.caja-efectos').toggle("slide");
        $('.caja-efectos').toggle("drop");
        $('.caja-efectos').toggle("fold");
        $('.caja-efectos').toggle("puff");
        $('.caja-efectos').toggle("scale");
        $('.caja-efectos').toggle("shake", 4000);
    });


    // ToolTips
    $(document).tooltip();

    // PoopUp
    $('#lanzar-popup').click(function () {
        $('#popup').dialog();
    });


    // Calendario
    $('#calendario').datepicker();


    // Tabs
    $('#pestañas').tabs();
    




});