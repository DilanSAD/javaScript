'use strict'

// Utilizar un bucle, mostrar la suma y la media de los números introducidos
// hasta introducir un número negativo para mostrar el resultado


var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Números hasta el negativo", 0));

    if (isNaN(numero)) {
        numero = 0
        
    } else if (numero >= 0) {
        suma += numero;

        contador++;
    }
}while (numero >= 0)


alert(suma);
alert(suma/contador);



