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



// Ejemplo de mutabilidad e inmutabilidad
// Mutabilidad (objetos y arrays son mutables)
console.log("Ejemplo de mutabilidad:");
let arrayMutable = [1, 2, 3];
console.log("Array original:", arrayMutable);
// Mutar
arrayMutable.push(4);
console.log("Array después de push:", arrayMutable);

// Inmutabilidad (tipos primitivos son inmutables)
console.log("\nEjemplo de inmutabilidad:");
let stringInmutable = "Hola";
console.log("String original:", stringInmutable);

let nuevoString = stringInmutable.toUpperCase();
console.log("String original después de toUpperCase:", stringInmutable);
console.log("Nuevo string:", nuevoString);



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




