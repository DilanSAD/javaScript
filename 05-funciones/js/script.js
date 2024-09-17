'use strict'

// Funciones: agruparación reutilizable de conjunto de instrucciones

// Declarar de función regular
function funcion() {
    // Cuerpo de la función con el código a ejecutar cuando se llame la función
    // Las variables y el contexto dentro de la función solo existe dentro de la función y no  de forma global
}
// Ejecutar la función
funcion();


// Declarar la función con parámetros, cuando se declara el parámetro
// con alguna expresión si no se ingresa algo toma el valor definido por defecto
function calculadora(numero1, numero2, imprimir = false ) {
    if (imprimir == false) {
        alert("Resultado: "+(numero1+numero2));
    } else {
        document.write("Resultado: "+(numero1-numero2));
    }
}
// Ejecutar la función con los argumentos en el mismo orden que los parámetros
calculadora(1, 3);
calculadora(2, 5, true);



/*
El hoisting es un término que se usa para describir cómo JavaScript parece que mueve las declaraciones
de funciones al principio del código, de forma que las puedes usar incluso antes de declararlas.
*/
resta(1, 2)

function resta(a, b) {
  return a - b
}


// function expresssion 
// Una function expression es una función que se asigna a una variable

// esto es una function expression a la cual no se le aplica hosting
const sum = function (a, b) {
    // Cuando una función no tiene nombre se le llama función anónima.
    return a + b
}
// Con la function expression la función se asigna a la variable sum.
// Esto significa que podemos llamar a la función usando el nombre de la variable
sum(1, 2)








