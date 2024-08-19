// Para que el código siga estándares de la mejor manera
'use strict'


// Comentarios de una línea

/*
    Comentario múltiple
*/


// Variables: contenedores de información

/// var cuando es alterada desde cualquier punto lo hace a nivel global
var string = "Texto de la variable string";
var number = 1;
var concatenar = string +' '+number;


// let limita a actuar a nivel del bloque, fuera de ese bloque sigue con su valor original
let variable = 2;

// Volver a asignar un valor a una variable
string = "Nuevo texto de la variable";


// const contenedor de datos que son valores fijos y no variables
const ip = "192.254.254.254";

// Mostrar por consola
console.log(string, number, concatenar);

// Mostrar por pantalla
alert(concatenar);




