// Para que el código siga estándares de la mejor manera
'use strict'


// Clases
class Cerveza {
    constructor(nombre, marca) {
        this.nombre = nombre;
        this.marca = marca;
    }

    show() {
        return this.nombre + " " + this.marca;
    }
}
let beer = new Cerveza("Pilsenon", "Pilsen");
console.log(beer.show());



// Herencia
class Heredados extends Cerveza {
    show() {
        return "Heredo el metodo pero es propio y lo puedo modificar"
    };
}
let beer2 = new Heredados("Pilsenon", "Pilsen");
console.log(beer2.show());




let numbers = [1, 2, 3, 4, 5, 6];
// Función forEach
numbers.forEach(element => {
    console.log(element);
});

// Función reduce
let result = numbers.reduce(
    (cuantoLLevo, elementoActual) =>
        cuantoLLevo + elementoActual
);
console.log(result);


// Asignación de variables
let item1 = { name: "Dilan", size: 40 };
let item2 = JSON.parse(JSON.stringify(item1));

item2.name = "D";

console.log(item1.name);
console.log(item2.name);


// Función de orden superior y primer orden
function Fuction(fn) {
    console.log("Función")
    fn()
    console.log("Resto de función")
}

function Fuction2() {
    console.log("Función 2")
}

Fuction(()=> {console.log("Lo que sea")})


// Una variable puede tener codigo de Javascript y ejecutarlo





