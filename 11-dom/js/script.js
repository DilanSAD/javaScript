//  ### DOM: Document Object Model ###

// .getElementById seleccionar elementos por Id
var caja = document.getElementById("caja");
// .querySelector se debe ser más especifico
var caja = document.querySelector("#caja");


// .getElementsByTagName seleccionar elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs);

// .getElementsByClassName seleccionar un elemento por su clase
var clase = document.getElementsByClassName("clase1");

// .querySelectorAll seleccionar muchos elementos
elemento = parentNode.querySelectorAll("");


// .textContent es lo mismo que I.nnerHTML pero Inner permite modificar
var contenidoEnTexto = todosLosDivs[0].textContent;
alert(contenidoEnTexto);
// document.createElement
// document.createTextNode
// .append
// .preappend
// .className

// Modificar html
caja.innerHTML = "Caja desde js";

// Añadir atributos html
caja.className = "clase2";

// Modificar css
caja.style.background = "red";
caja.style.padding = "20px";




