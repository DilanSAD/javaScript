// Rest captura el resto de elementos en un array
function list (item1, item2, ...rest) {
    console.log("item 1", item1);
    console.log("item 2", item2);
    console.log(rest);
}
list ("item1","item2","item3","item4","item5","item6",)


// Spread toma el array y lo usa 1 a 1 para los parámetros
var items = ["item1","item2"];
list (...items, "item3", "item4")
const numbers = [1, 2, 3]
const numbers2 = [4, 5]                 
const allNumbers = [...numbers, ...numbers2]
console.log(allNumbers)


const copy = [...numbers] // Crear una copia
copy[1] = 5

const copyR = numbers.with(1, 5) // Lo mismo en una línea