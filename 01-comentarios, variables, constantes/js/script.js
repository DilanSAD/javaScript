// ### Comentarios ###
// Comentarios de una línea
/*
    Comentarios de
    múltiples 
    líneas
*/

// ### Variables ###
// Iguales a contenedores de información
// Es recomendado nombrar usando UpperCamelCase, camelCase, snake_case

// var cuando es alterada desde cualquier punto, lo hace a nivel global
var string = "Texto de la variable string";

string = "Nuevo texto de la variable"; // Se puede reasignar el valor a una variable
var number = 1;
var concatenar = string + ' ' + number; // + Para concatenar valores
console.log(string, number, concatenar); // console.log Imprimir por consola

// let se limita a actuar a nivel del bloque. fuera de ese bloque sigue con su valor original
let variable = 2;

variable = 'string';

// const contenedor de datos que son valores fijos y no variables
const ip = "192.254.254.254";


