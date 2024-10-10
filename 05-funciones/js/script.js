// Funciones: agruparación reutilizable de conjunto de instrucciones

// Declarar una función regular
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

// ## Función de primer orden y orden superior
// # Función de primer orden
function saludar(nombre) {
    return `¡Hola, ${nombre}!`;
}
// # Función de orden superior
function ejecutarSaludo(funcionSaludo, nombre) {
    console.log(funcionSaludo(nombre));
}
// Uso de la función de orden superior
ejecutarSaludo(saludar, "María");



// Arrow function: forma resumida de escribir una función anónima
const funcionConLlaves = (a, b) => {
    // Usa llaves para ejecutar varias instrucciones
    let resultado = a + b;
    return resultado;
};
// No usa llaves cuando es una sola instrucción
const funcionSinLlaves = (a, b) => a + b;
// Ejemplo con un solo parámetro (se omiten los paréntesis)
const cuadrado = x => x * x;
// Uso de las funciones flecha
console.log("Función con llaves:", funcionConLlaves(5, 3));
console.log("Función sin llaves:", funcionSinLlaves(5, 3));
console.log("Función con un parámetro:", cuadrado(4));



// function expresssion 
// Una function expression es una función que se asigna a una variable
// Una fuction expression me retorna algo

// esto es una function expression a la cual no se le aplica hosting
const sum = function (a, b) {
    // Cuando una función no tiene nombre se le llama función anónima.
    return a + b
}
// Con la function expression la función se asigna a la variable sum.
// Esto significa que podemos llamar a la función usando el nombre de la variable
sum(1, 2)


// declaration: si es algo que utilizaremos en un futuro, si no hace nada
/*
    let
    const
    function
    async function
    class
    export
    import
 */

// statements: si solo se usa en ese momento, si permite escribir logica o realizar tareas
/*
    if
    for
    while
    do while
    try catch
    switch
    throw
 */








