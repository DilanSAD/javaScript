'use strict'

// Hacer un programa que muestre todos los números entre dos números introducidos

var numero1 = parseInt(prompt("Número de contador", 0));
var numero2 = parseInt(prompt("Número final", 0));

document.write("<h1>Del "+numero1+" al "+numero2+" están estos números: </h1>")
for (var i = numero1; i <= numero2; i++) {
    document.write(i+"<br/>")
}





