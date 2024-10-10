const peliculas = ["Comedy", "Popeye", "XV"];

// .push() para añadir un elemento al final de un array
peliculas.push("Marvel", "DC");
console.log(peliculas);

const frutas = ["plátano", "fresa", "naranja"]
// .length para conocer la longitud de una colección de elementos usando la propiedad
console.log(frutas.length)

//.unshift() añade un elemento al principio de un array
frutas.unshift("manzana")

// .pop() elimina y devuelve el último elemento de un array
peliculas.pop();
console.log(peliculas);

// .shift() elimina y devuelve el primer elemento de un array
const primeraFruta = frutas.shift()

// .join() para convertir Arrays a string separado por comas
var peliculas_string = peliculas.join();
console.log(peliculas_string);

// .split() para convertir de string separado por comas a Array
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);

// .sort() para ordenar Arrays (por orden alfabético)
peliculas.sort();

// Ordenar números de menor a mayor
const ordenarN = [5, 10, 2, 25, 7];
ordenarN.sort(function (a, b) {
  return a - b;
});
console.log(ordenarN);
// Usando una función de flecha
ordenarN.sort((a, b) => a - b);
console.log(ordenarN);

// Ordenar números de mayor a menor
ordenarN.sort(function (a, b) {
  return b - a;
});
console.log(ordenarN);
// Usando una función de flecha
ordenarN.sort((a, b) => b - a);
console.log(ordenarN);

// .reverse() para invertir el orden de un array
peliculas.reverse();


// .concat() para concatenar arrays
const numbers = [1, 2, 3]
const numbers2 = [4, 5]
const allNumbers = numbers.concat(numbers2)
console.log(allNumbers) // [1, 2, 3, 4, 5]

// .splice() para eliminar un elemento de un array
// Ejemplo 1: Eliminar elementos
allNumbers.splice(2, 2) // Elimina 2 elementos a partir del índice 2
console.log(allNumbers) // [1, 2, 5]

// Ejemplo 2: Reemplazar elementos
allNumbers.splice(1, 1, 10, 20) // Reemplaza 1 elemento en el índice 1 con 10 y 20
console.log(allNumbers) // [1, 10, 20, 5]

// Ejemplo 3: Agregar elementos sin eliminar
allNumbers.splice(2, 0, 30, 40) // Agrega 30 y 40 en el índice 2 sin eliminar nada
console.log(allNumbers) // [1, 10, 30, 40, 20, 5]

// Ejemplo 4: Eliminar y agregar al mismo tiempo
allNumbers.splice(1, 2, 50, 60, 70) // Elimina 2 elementos desde el índice 1 y agrega 50, 60 y 70
console.log(allNumbers) // [1, 50, 60, 70, 40, 20, 5]

allNumbers.fill("numeros", 0, 2)
console.log(allNumbers)


// ## Búsquedas

// .indexOf() para buscar un elemento en un array y obtener su índice
var index = peliculas.indexOf("Comedy")
// Es -1 si no lo encuentra
if (index > -1) {
  // Desde el indice elimino 1 posición
  peliculas.splice(index, 1);
}
console.log(peliculas);

/*
  .find permite encontrar el primer elemento que cumple con una condición. devuelve el elemento en sí
  hay que pasarle una función como argumento que retorne un valor booleano
  si no encuentra ningún valor retorna undefined y deja de iterar cuando encuentra un elemento que cumpla la condición
*/
var busqueda = peliculas.find(peliculas => peliculas == "Popeye");
console.log("Búsqueda si existe: " + busqueda);
const numbersN = [13, 27, 44, -10, 81]
const firstNegativeNumber = numbersN.find(number => number < 0)
console.log(firstNegativeNumber) // -> -10

// .findIndex devuelve el índice del primer elemento que cumple con la condición, si no encuentra alguno retorna -1
var busqueda = peliculas.findIndex(peliculas => peliculas == "Popeye");
console.log("Búsqueda por elemento que da el indice: " + busqueda);

// .some busca si algún elemento cumple la condición en un Array, si almenos un elemento cumple retorna true
var precios = [10, 20, 30, 40, 50, 60, 70];
var busqueda = precios.some(precio => precio >= 80);
console.log(busqueda);
// .some deja de iterar sobre el Array en cuanto encuentra un elemento que cumple con la condición.
const names = ['Leo', 'Isa', 'Ían', 'Lea']
const tieneNombreLargo = names.some(name => name.length > 3)
console.log(tieneNombreLargo)



// Filtrar

// .filter crea un nuevo array con los elementos que cumplan una condición
const numbers1 = [1, 2, 3, 4, 5, 6, 7]
const evenNumbers = numbers1.filter(function (number) {
  return number % 2 === 0
})
console.log(evenNumbers) // [2, 4, 6]


const strings = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato']
// En las cadenas de texto podemos usar el método `includes` para saber si una cadena contiene otra:
const stringsWithA = strings.filter(string => string.includes('a'))
console.log(stringsWithA) // ['hola', 'adiós', 'casa', 'gato']


/*
  .map genera un nuevo array con los elementos transformados
  crea un nuevo array de la misma longitud que el original, 
  pero con los elementos transformados por una función que le pasamos como parámetro.
  Así que la función recibirá cada elemento del array y tendremos que devolver el elemento transformado
*/
const doubleNumbers = numbers1.map((number) => {
  return number * 2
})
console.log(doubleNumbers) // [2, 4, 6 ...]

const strings1 = ['hola', 'javascript', 'midu', 'programación']
const stringsLength = strings1.map((string) => string.length)
console.log(stringsLength) // [4, 10, 4, 12]


// .map + .filter
const numsGreaterThanFive = numbers
  .map(number => number * 2) // [2, 4, 6, 8, 10, 12, 14]
  .filter(number => number > 5) // [6, 8, 10, 12, 14]
console.log(numsGreaterThanFive) // [6, 8, 10, 12, 14]

const doubleEvenNumbers = numbers
  .filter(number => number % 2 === 0) // [2, 4, 6]
  .map(number => number * 2) // [4, 8, 12]
console.log(doubleEvenNumbers) // [4, 8, 12]



// .flat() para aplanar un array dentro de otro
const arrayAnidado = [1, 2, [3, 4], 5, [6, 7, [8, 9]]];
const aplanado = arrayAnidado.flat();
console.log(aplanado); // [1, 2, 3, 4, 5, 6, 7, [8, 9]]

// .flat() con profundidad específica
const arrayMultinivel = [1, [2, [3, [4, 5]]]];
const aplanadoDosNiveles = arrayMultinivel.flat(2);
console.log(aplanadoDosNiveles); // [1, 2, 3, [4, 5]]

// .flatMap() para aplanar y transformar
const usuarios = [
  { id: 1, nombre: 'Ana', mascotas: ['perro', 'gato'] },
  { id: 2, nombre: 'Carlos', mascotas: ['pez'] },
  { id: 3, nombre: 'Elena', mascotas: ['hámster', 'canario'] }
];
const todasLasMascotas = usuarios.flatMap(usuario => usuario.mascotas);
console.log(todasLasMascotas); // ['perro', 'gato', 'pez', 'hámster', 'canario']


/*
  .reduce permite crear un único valor a partir de un array
  Recibe dos parámetros: una función que se ejecutará por cada elemento y un valor inicial, opcional
  que será donde podremos acumular los valores.
  El primer parámetro de reduce, que es la función que se ejecutará por cada elemento, recibe tres parámetros:

  El acumulador: el valor que se va a ir acumulando en cada iteración
  El elemento actual: el elemento del Array que estamos iterando en ese momento.
  El índice: la posición del elemento actual en el Array.
*/
const sum = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber
}, 0) // <- el 0 es el valor inicial

console.log(sum) // la suma de todos los elementos de numbers


const doubleEvenNumbers1 = numbers.reduce((accumulator, currentNumber) => {
  const isEven = currentNumber % 2 === 0
  const doubled = currentNumber * 2
  const isGreaterThanFive = doubled > 5
  // Si es par y mayor que 5, lo añadimos al array
  if (isEven && isGreaterThanFive) {
    // Para ello devolvemos un nuevo array con el valor actual
    return accumulator.concat(doubled)
  } else {
    // Si no, devolvemos lo que ya teníamos
    return accumulator
  }
}, []) // <- el array vacío es el valor inicial
console.log(doubleEvenNumbers1) // [8, 12]
