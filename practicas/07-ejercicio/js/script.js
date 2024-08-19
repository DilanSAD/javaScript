'use strict'

// Programa que realice las tablas de multiplicar de cualquier número ingresado

var numero = parseInt(prompt("¿De qué número quiere tabla?", 1));


document.write("<h1>Tabla del " + numero + "<h1/>");

for (var i = 1; i <= 10; i++) {
    document.write(i + " x " + numero + " = " + (i * numero) + "<br/>");
}


for (var c = 1; c <= 15; c++) {
    document.write("<h1>Tabla del " + c + "<h1/>");

    for (var i = 1; i <= 10; i++) {
        document.write(i + " x " + c + " = " + (i * c) + "<br/>");
    }
}





