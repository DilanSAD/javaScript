$(document).ready(function () {

    // Load para realizar peticiones y meter el contenido dentro de un elemento
    // $('#datos').load('https://reqres.in/');

    // Get
    $.get('https://reqres.in/api/users', { page: 2 }, function (response) {
        response.data.forEach((element, index) => {
            $('#datos').append("<p>" + element.first_name + "</p>");
        });
    });


    var usuario = {
        name: "Dilan",
        web: "A"
    }

    // Post
    $.post('https://reqres.in/api/users', usuario, function (response) {
        console.log(response);
    });


    // Método $.ajax
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'aplication/json',
        url: $(this).attr("action"),
        data: usuario,
        beforeSend: function() {
            console.log("Enviando usuario");
        },
        success: function(response) {
            console.log(response);
        },
        error: function() {
            console.log("Ha ocurrido un error");
        },
        timeout: 2000
    });


});