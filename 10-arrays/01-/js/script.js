// Array: para guardar una colección de datos
// Array literal
var items = [];
// Array una lista de un solo tipo
var items = [3, 4, 5, 6, 7, 8, 9, 10];
// Mostrar un valor de un array
console.log(items[0]);
// .at() Mostrar un valor de un array
console.log(items.at(1));
// Si es negativo empieza a contar desde el final
console.log(items.at(-2));

// .length() para contar los elementos de un array
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}
// Array una lista de diferentes tipos
var items = ["item1", "item2", "item3", 50, true];
// Reasginar un valor de un array
items[0] = "item1 modificado";
// Agregar un valor a un array
items[5] = "item5";
// 
var items = new Array("item1", "item2", "item3")
{
  "clave" = valor
}


// Arrays colección de elementos
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
// for of para recorrer
for(let item of items) {
    console.log(item);
}

// Ejemplo de array de funciones
// Definimos un array de funciones
var funcionesMatematicas = [
    function(a, b) { return a + b; },
    function(a, b) { return a - b; },
    function(a, b) { return a * b; },
    function(a, b) { return a / b; }
];
// Usamos las funciones del array
console.log("Suma: " + funcionesMatematicas[0](5, 3));
console.log("Resta: " + funcionesMatematicas[1](10, 4));
console.log("Multiplicación: " + funcionesMatematicas[2](6, 2));
console.log("División: " + funcionesMatematicas[3](15, 3));
// Iteramos sobre el array de funciones
funcionesMatematicas.forEach(function(operacion, indice) {
    console.log("Resultado de la operación " + indice + ": " + operacion(10, 5));
});


// Arrays multidimensionales
var categorias = ["acción","Terror","Suspenso","Comedia"];
var peliculas = ["Comedy", "Popeye","XV"];
var cine = [categorias, peliculas];
// Primero fila luego columna
console.log(cine[1][2]);

//Arays de objetos
var items = [
    {nombre: "item1", precio: 10},
    {nombre: "item2", precio: 20},
    {nombre: "item3", precio: 30}
]
console.log(items[0].nombre);
