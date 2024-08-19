'use strict'

// Parámetro REST captura el resto de elementos en un array
function list (item1, item2, ...rest) {
    console.log("item 1", item1);
    console.log("item 2", item2);
    console.log(rest);
}

list ("item1","item2","item3","item4","item5","item6",)


// Parámetro SPREAD toma el array y lo usa 1 a 1 para los parámetros
var items = ["item1","item2"];
list (...items, "item3", "item4")

