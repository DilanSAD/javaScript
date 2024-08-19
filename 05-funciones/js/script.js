'use strict'

// Funciones: agruparación reutilizable de conjunto de instrucciones

// Definir la función
function funcion() {
    // las variables y el contexto dentro de la función solo existe dentro de la función y no global en el programa
}

// Ejecutar la función
funcion();


// Definir la función con parámetros opcionales
function calculadora(numero1, numero2, imprimir = false) {
    if (imprimir == false) {
        alert("Operación: "+(numero1+numero2));
    } else {
        document.write("Operación: "+(numero1-numero2));
    }
}

// Ejecutar calculadora
calculadora(1, 3);
calculadora(2, 5, true);


// Se puede utilizar una función dentro de otra




