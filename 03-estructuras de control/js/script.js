'use strict'

var menor = 17;
var mayor = 18;

// Condicionales

if (menor > mayor) {
    console.log("Sigue siendo muy joven");
} else if (menor == mayor) {
    console.log("Mejor ponte aprender ingles");
} else {
    console.log("Siempre menor");
}

/* Operadores relacionales
    >= mayor o igual
    > mayor
    <= menor o igual
    < menor
    == igual
    != distinto
 */

/* Operadores lógicos
    && and
    || or
    ! negación
 */

var edad = 18;
var imprime = "";

// Condicional Switch
switch(edad) {
    case 18:
        imprime = "Es la mayoria de edad";
    break;
    case 25:
        imprime = "Ya eres Sr";
    break;
    default:
        imprime = "No esta en el rango";
    break;
}

console.log(imprime);


// Bucles

// for
var numero = 100;
// inicialización de contador, condición, incremento
for(var i = 1; i <= numero; i++) {
    console.log(i);

    // Para ver incremento 1 a 1 por Sources
    // debugger
}

//while
var year = 2050;
// Mientras la condición se cumpla
while(year >= 2025) {
    console.log(year);
    year--;
}

// Do White
var years = 20;
// Primero ejecutamos y luego comprobamos
do {
    alert("years");
    years++;

    // Dentro de cualquier bucle puedo tener un break;
    if (years ==22) {
        break;
    }
    
} while(years < 25)












