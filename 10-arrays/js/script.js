'use strict'

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

// Arrays multidimensionales
var categorias = ["acción","Terror","Suspenso","Comedia"];
var peliculas = ["Comedy", "Popeye","XV"];
var cine = [categorias, peliculas];
// Primero fila luego columna
console.log(cine[1][2]);

// .push() para añadir un elemento al final de un Array
peliculas.push("Marvel", "DC");
console.log(peliculas);

const frutas = ["plátano", "fresa", "naranja"]
// .length para conocer la longitud de una colección de elementos usando la propiedad
console.log(frutas.length)

//.unshift() añade un elemento al principio de un array. 
frutas.unshift("manzana")

// .pop() elimina y devuelve el último elemento de un Array
peliculas.pop();
console.log(peliculas);

// .shift() elimina y devuelve el primer elemento de un array.
    const primeraFruta = frutas.shift()

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
// Ordenar números de menor a mayor
const ordenarN = [5, 10, 2, 25, 7];
ordenarN.sort(function(a, b) {
    return a - b;
});
console.log(ordenarN);
// Usando una función de flecha
ordenarN.sort((a, b) => a - b);
console.log(ordenarN);
// Ordenar números de mayor a menor
ordenarN.sort(function(a, b) {
    return b - a;
});
console.log(ordenarN);
// Usando una función de flecha
ordenarN.sort((a, b) => b - a);
console.log(ordenarN); 


// Reversar el orden del Arrays
peliculas.reverse();


// Concatenar Arrays usando concat
const numbers = [1, 2, 3]
const numbers2 = [4, 5]
const allNumbers = numbers.concat(numbers2)
console.log(allNumbers)


// Búsquedas

/*
    .find permite encontrar el primer elemento que cumple con una condición. devuelve el elemento en sí
    hay que pasarle una función como argumento que retorne un valor booleano
    si no encuentra ningún valor retorna undefined y deja de iterar cuando encuentra un elemento que cumpla la condición
*/
var busqueda = peliculas.find(peliculas => peliculas == "Popeye");
console.log("Búsqueda si existe: "+busqueda);
const numbersN = [13, 27, 44, -10, 81]
const firstNegativeNumber = numbersN.find(number => number < 0)

console.log(firstNegativeNumber) // -> -10

// .findIndex devuelve el índice del primer elemento que cumple con la condición, si no encuentra alguno retorna -1
var busqueda = peliculas.findIndex(peliculas => peliculas == "Popeye");
console.log("Búsqueda por elemento que da el indice: "+busqueda);

// .some busca si algún elemento cumple la condición en un Array, si almenos un elemento cumple retorna true
var precios = [10, 20, 30, 40, 50, 60, 70];
var busqueda = precios.some(precio => precio >= 80);
console.log(busqueda);
// .some deja de iterar sobre el Array en cuanto encuentra un elemento que cumple con la condición.
const names = ['Leo', 'Isa', 'Ían', 'Lea']
const tieneNombreLargo = names.some(name => name.length > 3)
console.log(tieneNombreLargo)



// Filtrar

// .filter crea un nuevo Array con los elementos que cumplan una condición
const numbers1 = [1, 2, 3, 4, 5, 6, 7]
const evenNumbers = numbers1.filter(function (number) {
  return number % 2 === 0
})
console.log(evenNumbers) // [2, 4, 6]


const strings = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato']
// en las cadenas de texto podemos usar el método `includes`
// para saber si una cadena contiene otra:
const stringsWithA = strings.filter(string => string.includes('a'))
console.log(stringsWithA) // ['hola', 'adiós', 'casa', 'gato']


/*
    .map genera un nuevo Array con los elementos transformados
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


/*
    .reduce permite crear un único valor a partir de un Array
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
  
    // si es par y mayor que 5, lo añadimos al array
    if (isEven && isGreaterThanFive) {
      // para ello devolvemos un nuevo array con el valor actual
      return accumulator.concat(doubled)
    } else {
      // si no, devolvemos lo que ya teníamos
      return accumulator
    }
  }, []) // <- el array vacío es el valor inicial
  console.log(doubleEvenNumbers1) // [8, 12]





  // Creación de matriz, podemos representar una matriz como un array de arrays
const matriz = [
    [1, 2, 3],
    [4, 5, 6]
]
// Para acceder a los elementos de una matriz, necesitaremos utilizar dos índices:
// uno para la fila y otro para la columna.
let numero = matriz[1][2]
console.log(numero) // -> 6


for (let i = 0; i < matriz.length; i++) { // {1}
  for (let j = 0; j < matriz[i].length; j++) { // {2}
    console.log(matriz[i][j])
  }
}

// El método forEach() de los arrays para iterar sobre una matriz, pero se tiene
// que anidar dos llamadas a forEach() para iterar sobre todos los elementos de la matriz.

matriz.forEach((fila, filaIndex) => {
    fila.forEach((elemento, columnaIndex) => {
      console.log('Fila ' + filaIndex)
      console.log('Columna ' + columnaIndex)
      console.log('Elemento ', elemento)
      console.log('')
    })
})


const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
]
const position = findJavaScript(matrix)
  console.log(position) // -> [0, 2]
  function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) { // Recorrer cada fila
      for (let j = 0; j < matrix[i].length; j++) { // Recorrer cada columna de la fila
        if (matrix[i][j] === 'JavaScript') {
          return [i, j]; // Devolver la posición si encuentra "JavaScript"
        }
      }
    }
    return [-1, -1]; // Si no se encuentra "JavaScript"
}


// Algoritmo para encontrar el número mayor
function findMaxAlgorithm(array) {
    let max = array[0] // recuperamos el primer elemento del array
  
    // recorremos el array desde el segundo elemento
    for (let i = 1; i < array.length; i++) {
      // ¿es el elemento actual mayor que el máximo?
      if (array[i] > max) {
        // si es así, lo guardamos como nuevo máximo
        max = array[i]
      }
    }
  
    // devolvemos el máximo número que hemos encontrado
    return max;
  }
// Math.max para encontrar el número mayor de un array

// En programación se usa la notación O(n) para indicar que el número de operaciones
// que se realizan es igual al número de elementos del array


/* 
    La idea de la búsqueda binaria es ir dividiendo el array en dos mitades. Si el elemento 
    que estamos buscando es mayor que el elemento de la mitad del array, tenemos que buscar
    en la mitad derecha. Si el elemento que estamos buscando es menor que el elemento de la mitad
    del array, tenemos que buscar en la mitad izquierda. Y así sucesivamente hasta encontrar el 
    elemento que estamos buscando.

    Para aplicar la búsqueda binaria, tenemos que tener en cuenta que el array tiene que estar
    ordenado de menor a mayor. Si no, no funcionará.
*/
function busquedaBinaria(array, elemento) {
    let index = 0 // primer elemento del array
    let final = array.length - 1 // último elemento del array a buscar
    
    // mientras el índice sea menor o igual que el final seguiremos buscando
    while (index <= final) {
      // calculamos la mitad del array como puede ser impar, usamos Math.floor para redondear hacia abajo
      const mitad = Math.floor((index + final) / 2)
      
      // Si el elemento de la mitad es igual al elemento que estamos buscando
      // entonces hemos encontrado el elemento
      if (array[mitad] === elemento) {
        return mitad
      } else if (array[mitad] < elemento) {
        // Si el elemento de la mitad es menor que el elemento que estamos buscando
        // entonces tenemos que buscar en la mitad derecha
        index = mitad + 1
      } else {
        // Si el elemento de la mitad es mayor que el elemento que estamos buscando
        // entonces tenemos que buscar en la mitad izquierda
        final = mitad - 1
      }
    }
    
    // Si llegamos hasta aquí, es que no hemos encontrado el elemento
    // evolvemos -1, para indicar que no se ha encontrado
    return -1
  } 
// Ssar el método Array.prototype.indexOf para encontrar el índice de un elemento en un array.
// array.indexOf(elemento)