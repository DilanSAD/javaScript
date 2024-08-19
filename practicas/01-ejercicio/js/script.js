'use strict'

// dos numeros y que nos diga cual es el mayor, el menor y si son iguales
// si no son números o son iguales o menores a cero que los vuelva a pedir

while (numero1 <= 0  || numero2 <= 0 || isNaN(numero1) || isNaN(numero2) ) {
    var numero1 = prompt("Número 1");
    var numero2 = prompt("Número 2");
}

if (numero1 == numero2 ) {
    console.log("Son iguales");
} else if (numero1 > numero2) {
    console.log("Número 1 es mayor");
    console.log("Número 2 es menor");
} else if  (numero1 < numero2) {
    console.log("Número 2 es mayor");
    console.log("Número 1 es menor");
} else {
    alert("Datos invalidos");
}