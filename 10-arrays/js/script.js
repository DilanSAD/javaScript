'use strict'

// Arrays, arreglos matrices
var items = new Array("item1", "item2", "item3")

var elemento = parseInt(prompt("¿Qué elemento desea?"), 0);
alert(items[elemento]);

// Reccorrer con forEach
items.forEach((elemento, index, array) => {
    console.log(elemento+" "+index+" "+array);
});

// Recorrer con For in
for(let item in items) {
    console.log(items[item]);
}

// Arrays multidimensionales
var categorias = ["acción","Terror","Suspenso","Comedia"];
var peliculas = ["Comedy", "Popeye","XV"];

var cine = [categorias, peliculas];

// Primero fila luego columna
console.log(cine[1][2]);



// Para añadir un elemento a un Array
peliculas.push("Marvel");
console.log(peliculas);

// Eliminar el último elemento de un Array
peliculas.pop();
console.log(peliculas);


// Eliminar un elemento
var index = peliculas.indexOf("Comedy")
// Es -1 si no lo encuentra
if (index > -1) {
    // Desde el indice elimino 1 posición
    peliculas.splice(index, 1);
}
console.log(peliculas);

// Join para convertir Arrays a string separado por comas
var peliculas_string = peliculas.join();
console.log(peliculas_string);


// Convertir de string a Array
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);


// Ordernar Arrays (por orden alfabético)
peliculas.sort();
// Ordernar números de menor a mayor
peliculas.sort(function(a, b) {return a-b});


// Reversar el orden del Arrays
peliculas.reverse();



// Búsquedas

// Si un elemento existe dentro de un Array
var busqueda = peliculas.find(peliculas => peliculas == "Popeye");
console.log("Búsqueda si existe: "+busqueda);

// Sacar el indice en el lugar que se encuentra un elemento
var busqueda = peliculas.findIndex(peliculas => peliculas == "Popeye");
console.log("Búsqueda por elemento que da el indice: "+busqueda);


// Buscar si algún elemento cumple la condición en un array de números
var precios = [10, 20, 30, 40, 50, 60, 70];
var busqueda = precios.some(precio => precio >= 80);
console.log(busqueda);







