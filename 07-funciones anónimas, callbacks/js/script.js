'use strict'

// fuction expression
var variable = function (parametro) {
    // Funciones anónimas: no tienen nombre
    return "return: " + parametro;
}

/*
    Funciones flecha // arrow function 
    Siempre son anónimas y siempre son expresiones
    Es decir no tienen nombre y se deben asignar con variable
*/
const saludar = () => {
    // Código a ejecutar
}


// Función flecha
const sumarFlecha = (a, b) => {
    return a + b
}
  
/* 
    Función flecha con return implícito
    el return implícito sólo funciona si no usas las llaves
    Al usar llaves, debes usar el return para indicar lo que quieres devolver
*/
const restarFlecha = (a, b) => a - b


// Callbacks
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var suma = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}
// No sé como se llama el parametro solo se que debo pasar un dato y uso una función anónima para eso
sumame(5, 7, function(dato) {
    alert("Suma: "+ dato);
},

function(dato) {
    alert("Suma x 2: "+ dato);
})

sumame(5, 7, dato => {
    alert("Suma: "+ dato);
},
dato => {
    alert("Suma x 2: "+ (dato*2));
})


// Funciones recursivas
// Una técnica de programación que consiste en que una función se llame a sí misma
function cuentaAtras(numero) {
    // Condición base, condición que permite evitar que una función se llame infinitamente
    if (numero < 0) { return }
  
    console.log(numero)
  
    // Y llamamos a la función con el número anterior
    cuentaAtras(numero - 1)
}

function factorial(n) {
    // Condición base: Si el número es 0 o 1, devolvemos 1
    // y no llamamos a la función de nuevo
    if (n === 0 || n === 1) {
      return 1
    } else {
      // Si el número es mayor que 1, llamamos a la función
      return n * factorial(n - 1)
    }
  }
  
  console.log(factorial(5)) // Resultado: 120
  console.log(factorial(3)) // Resultado: 6