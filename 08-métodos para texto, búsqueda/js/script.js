var numero = 1;
var texto1 = "texto1";
var texto2 = "texto2";

// PARA TEXTO

// Metodos para convertir a String
var dato = numero.toString();
// Mayuscula
dato = texto1.toUpperCase();
// Minuscula
dato = texto2.toLowerCase();

// .repace reemplazar texto
var busqueda = texto2.replace("texto", "textillo");
console.log("Búsqueda del reemplazo: " + busqueda);

// .slice Apartir de, me devuelve el string
var busqueda = texto2.slice(3, 5);
console.log("Búsqueda apartir de: " + busqueda);

// .length para calcular longitud, contar el tamaño de un Array
var nombre = "Dilan";
nombre = ["Acosta", "Durango"]
console.log(nombre.length);

// .concat para concatenar, incluso Arrayss
var textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);

// .thim para quitar espacios al comienzo y al final
var busqueda = texto1.thim();
console.log("Búsqueda sin espacios al comienzo y final: " + busqueda);


// PARA BÚSQUEDA

// .indexOf para encontrar la posición de un elemento dentro de un Array. Si el elemento no existe, entonces retorna -1
var busqueda = texto1.indexOf("1");
console.log("Búsqueda primera coincidencia: " + busqueda);

const emojis = ['✨', '🥑', '😍']
const posicionCorazon = emojis.indexOf('😍')
console.log(posicionCorazon)

// .lastIndexOf para encontrar la última coincidencia
var busqueda = texto1.lastIndexOf("1");
console.log("Búsqueda última coincidencia: " + busqueda);

// .search busca algo para saber qué posición tiene, qué carácter se encuentra
var busqueda = texto1.search("o");
console.log("Búsqueda posición: " + busqueda);

// Devuelve una colección de coincidencias
var busqueda = texto1.match(/1/g);
console.log("Búsqueda colección: " + busqueda);

// .substr devuelve un trozo de una búsqueda apartir de la primera, saca tantas
var busqueda = texto1.substr(2, 2);
console.log("Búsqueda apartir de, dame tanto: " + busqueda);

// .charAt saca un carácter concreto de un texto
var busqueda = texto1.charAt(4);
console.log("Búsqueda longitud de un carácter: " + busqueda);

// .startsWith si el texto comienza con la palabra es true si no false
var busqueda = texto1.startsWith("texto");
console.log("Búsqueda si comienza: " + busqueda);

// .endsWith si el texto termina con la palabra es true si no false
var busqueda = texto1.endsWith("1");
console.log("Búsqueda si termina: " + busqueda);

//  .includes si un Array incluye un determinado elemento,Si existe la palabra exacta true o false según corresponda
var busqueda = texto1.includes("textO");
console.log("Búsqueda exacta: " + busqueda);

const tieneCorazon = emojis.includes('😍')
console.log(tieneCorazon)

/*
    .every verifica si todos los elementos de un array cumplen con una condición
    si todos cumplen retorna true si al menos uno no cumple retorna false
    deja de iterar sobre el array en cuanto encuentra un elemento que no cumple con la condición
*/
// ¿Todos los emojis son felices?
const emojisNuevos = ['😀', '😂', '😍', '😭', '🥺', '😎']
const todosSonFelices = emojisNuevos.every(emoji => emoji === '😀')
console.log(todosSonFelices) // -> false
// ¿Todos los números son pares?
const numbers = [2, 4, 7, 10, 12]
const todosSonPares = numbers.every(number => number % 2 === 0)
console.log(todosSonPares) // -> false
// ¿Todos los strings son mayores a 3 caracteres?
const names = ['Miguel', 'Juan', 'Itziar', 'Isabel']
const todosLosNombresSonLargos = names.every(name => name.length > 3)
console.log(todosLosNombresSonLargos) // -> true






