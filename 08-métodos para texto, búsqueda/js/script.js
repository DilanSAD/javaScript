'use strict'

var numero = 1;
var texto1 = "texto1";
var texto2 = "texto2";

// PARA TEXTO

// Metodos para convertir a String, M y m
var dato = numero.toString();
dato = texto1.toUpperCase();
dato = texto2.toLowerCase();

// Reemplazar texto
var busqueda = texto2.replace("texto", "textillo");
console.log("Búsqueda del reemplazo: " + busqueda);

// Apartir de me devuelve el string
var busqueda = texto2.slice(3, 5);
console.log("Búsqueda apartir de: " + busqueda);

// Calcular longitud, contar
var nombre = "Dilan";
nombre = ["Acosta", "Durango"]
console.log(nombre.length);

// Concatenar
var textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);

// Quitar espacios al comienzo y al final
var busqueda = texto1.thim();
console.log("Búsqueda sin espacios al comienzo y final: " + busqueda);


// PARA BÚSQUEDA

// Encontrar la primera coincidencia
var busqueda = texto1.indexOf("1");
console.log("Búsqueda primera coincidencia: " + busqueda);

// Encontrar la última coincidencia
var busqueda = texto1.lastIndexOf("1");
console.log("Búsqueda última coincidencia: " + busqueda);

// Buscar algo para saber qué posición tiene, qué carácter se encuentra
var busqueda = texto1.search("o");
console.log("Búsqueda posición: " + busqueda);

// Devuelve una colección de coincidencias
var busqueda = texto1.match(/1/g);
console.log("Búsqueda colección: " + busqueda);

// Devuelve un trozo de una búsqueda apartir de la primera, saca tantas
var busqueda = texto1.substr(2, 2);
console.log("Búsqueda apartir de, dame tanto: " + busqueda);

// Sacar un carácter concreto de un texto
var busqueda = texto1.charAt(4);
console.log("Búsqueda longitud de un carácter: " + busqueda);

// Si el texto comienza con la palabra es true si no false
var busqueda = texto1.startsWith("texto");
console.log("Búsqueda si comienza: " + busqueda);

// Si el texto termina con la palabra es true si no false
var busqueda = texto1.endsWith("1");
console.log("Búsqueda si termina: " + busqueda);

// Si existe la palabra exacta true si no false
var busqueda = texto1.includes("textO");
console.log("Búsqueda exacta: " + busqueda);







