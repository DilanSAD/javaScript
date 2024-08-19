'use strict'

/*
Formulario campos: nombre, apellidos, edad
boton de enviar el formulario con evento submit
*/

window.addEventListener('load', function() {
    console.log("DOM");

    var formulario = document.querySelector("#formulario");

    formulario.addEventListener('submit', function() {
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        console.log(nombre, apellidos, edad);
    });

});
