// Funciones: agruparación reutilizable de conjunto de instrucciones

// Declarar una función regular
function funcion() {
    // Cuerpo de la función con el código a ejecutar cuando se llame la función
    // Las variables y el contexto dentro de la función solo existe dentro de la función y no  de forma global
}
// Ejecutar la función
funcion();


// Declarar la función con parámetros, cuando se declara el parámetro con alguna expresión
// si no se ingresa algo toma el valor definido por defecto
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

// Funciones de primer orden y orden superior
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

// statements: si solo se usa en ese momento, si permite escribir lógica o realizar tareas
/*
    if
    for
    while
    do while
    try catch
    switch
    throw
 */








