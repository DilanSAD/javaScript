'use strict'

// Programa que pida 6 números por pantalla y los guarde en un Array
// Mostrar el Array en la consola
// Ordernarlo y mostrarlo
// Invertir su orden y mostrarlo
// Mostrar cuantos elementos tiene el Array
// Buscar por un valor introducido si está en el Array, dar indice

var numeros = [];

for(var i = 0; i <= 5; i++) {
    numeros.push(parseInt(prompt("Introducir número", 0)));
}


numeros.forEach((numeros, index) => {
    console.log(numeros);
});
console.log(numeros);

numeros.sort();
console.log(numeros);

numeros.reverse();
console.log(numeros);

console.log(numeros.length);

var busqueda = parseInt(prompt("Introducir número", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion != -1) {
    console.log(posicion);
} else {
    console.log("No se encontro");
}

