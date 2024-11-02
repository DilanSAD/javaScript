var numero = 1;
var texto1 = "texto1  ";
var texto2 = "texto2";

// ### Para texto ###

// .toString para convertir a String
var dato = numero.toString();
// .toUpperCase convertir string en mayuscula
dato = texto1.toUpperCase();
// .toLowerCase convertir string en minuscula
dato = texto2.toLowerCase();

// .repace reemplazar texto
var repace = texto2.replace("texto", "textillo");
console.log("Búsqueda del reemplazo: " + repace);

// .concat para concatenar, incluso Arrays
var textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);

// .trim para quitar espacios al comienzo y al final
var trim = texto1.trim();
console.log("Búsqueda sin espacios al comienzo y final: " + trim);



// .slice Apartir de, me devuelve el string
var slice = texto2.slice(3, 6);
console.log("Búsqueda apartir de: " + slice);

// .length para calcular longitud, contar el tamaño de un Array
var nombre = ["Dilan", "Acosta"]
console.log(nombre.length);


// ### Para búsqueda ###

// .indexOf para encontrar la posición de un elemento dentro de un Array. Si el elemento no existe, entonces retorna -1
var indexOf = texto1.indexOf("1");
console.log("Búsqueda primera coincidencia: " + indexOf);
const emojis = ['✨', '🥑', '😍']
const posicionCorazon = emojis.indexOf('😍')
console.log(posicionCorazon)

// .lastIndexOf para encontrar la última coincidencia
var lastIndexOf = texto1.lastIndexOf("o");
console.log("Búsqueda última coincidencia: " + lastIndexOf);

// .search busca algo para saber qué posición tiene
var search = texto1.search("o");
console.log("Búsqueda posición: " + search);

// match devuelve una colección de coincidencias
var match = texto1.match(/texto/g);
console.log("Búsqueda colección: " + match);

// .substr devuelve un trozo de una búsqueda apartir de la primera, saca tantas
var substr = texto1.substr(2, 4);
console.log("Búsqueda apartir de, dame tanto: " + substr);

// .charAt saca un carácter concreto de un texto según su posición
var charAt = texto1.charAt(5);
console.log("Búsqueda por posición de un carácter: " + charAt);

// .startsWith si el texto comienza con la palabra es true si no false
var startsWith = texto1.startsWith("texto");
console.log("Búsqueda si comienza: " + startsWith);

// .endsWith si el texto termina con la palabra es true si no false
var endsWith = texto1.endsWith("o1  ");
console.log("Búsqueda si termina: " + endsWith);

//  .includes si un Array incluye un determinado elemento,Si existe la palabra exacta true o false según corresponda
var includes = texto1.includes("textO");
console.log("Búsqueda exacta: " + includes);
const tieneCorazon = emojis.includes('😍')
console.log(tieneCorazon)

// groupBy
const number = [1, 2, 3, 4, 5, 6, 7]
const grouped = Object.groupBy(
    number,
    numbers => {
        if(number % 2 === 0) return 'Par'
        return 'Impar'
    }
)

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






