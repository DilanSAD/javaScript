// ### fuction expression ###
// Es una función que se asigna a una variable, a la cual no se le aplica hosting y me retorna algo
const sum = function (a, b) {
    // Cuando una función no tiene nombre se le llama función anónima.
    return a + b
}
// Con la function expression la función se asigna a la variable sum.
// Esto significa que podemos llamar a la función usando el nombre de la variable
sum(1, 2)


// ### Arrow function ###
// Forma resumida de escribir una función anónima, siempre son anónimas y siempre son expresiones
// es decir no tienen nombre y se deben asignar con variable
const saludar = () => {
    // Código a ejecutar
}
// Función flecha
const sumarFlecha = (a, b) => {
    return a + b
}
const restarFlecha = (a, b) => a - b;

const funcionConLlaves = (a, b) => { // Usa llaves para ejecutar varias instrucciones
    let resultado = a + b;
    return resultado;
};
console.log("Función con llaves:", funcionConLlaves(5, 3));
/* 
    Función flecha con return implícito
    el return implícito sólo funciona si no usas las llaves
    Al usar llaves, debes usar el return para indicar lo que quieres devolver
*/
const funcionSinLlaves = (a, b) => a + b; // No usa llaves cuando es una sola instrucción
console.log("Función sin llaves:", funcionSinLlaves(5, 3));

const cuadrado = x => x * x; // Ejemplo con un solo parámetro (se omiten los paréntesis)
console.log("Función con un parámetro:", cuadrado(4));


// ### Callbacks ###
// Un callback es una función que se pasa como argumento a otra función
// y se ejecuta después de que la función principal haya terminado
function sumame(numero1, numero2, mostrarResultado, mostrarDoble) {
    // Realizamos la operación principal
    var suma = numero1 + numero2;
    // Ejecutamos los callbacks pasándoles el resultado
    mostrarResultado(suma);
    mostrarDoble(suma);
    return suma;
}
// Ejemplo usando funciones anónimas tradicionales como callbacks
sumame(5, 7, 
    function(resultado) {
        alert("La suma es: " + resultado);
    },
    function(resultado) {
        alert("El doble de la suma es: " + (resultado * 2));
    }
);
// El mismo ejemplo pero usando arrow functions como callbacks
// Las arrow functions hacen el código más conciso
sumame(5, 7,
    resultado => alert("La suma es: " + resultado),
    resultado => alert("El doble de la suma es: " + (resultado * 2))
);


// ### Funciones recursivas ###
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