'use strict'

// Mostrar todos los números divisores de un número introducido

var numero = parseInt(prompt("Número:", 1));

for (var i = 1; i <= numero; i++ ) {

    if (numero%i == 0) {
        console.log(i);
    }
}



