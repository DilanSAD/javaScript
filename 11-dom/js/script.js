'use strict'

// DOM: Document Object Model

// Seleccionar elementos por Id
var caja = document.getElementById("caja");
// Se debe ser más especifico
var caja = document.querySelector("#caja");


// Seleccionar elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs);

// TextContent es lo mismo que InnerHTML pero Inner permite modificar
var contenidoEnTexto = todosLosDivs[0].textContent;
alert(contenidoEnTexto);
// document.createElement
// document.createTextNode
// .append
// .preappend
// .className

// Seleccionar un elemento por su clase
var clase = document.getElementsByClassName("clase1");

// Seleccionar muchos elementos
elemento = parentNode.querySelectorAll("");



// Modificar html
caja.innerHTML = "Caja desde js";

// Añadir atributos html
caja.className = "clase2";

// Modificar css
caja.style.background = "red";
caja.style.padding = "20px";




