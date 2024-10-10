// Clases conjunto de métodos que permiten definir un objeto
// Las clases primeros las definimos, instanciamos y usamos
// Las funciones usan hosting
class Cerveza {
    // constructor
    constructor(nombre, marca) {
        // Propiedades del constructor
        this.nombre = nombre;
        this.marca = marca;
    }
    // Métodos del objeto no del constructor
    show() {
        return this.nombre + " " + this.marca;
    }
}
let beer = new Cerveza("Pilsenon", "Pilsen");
console.log(beer.show());

const Cerveza2 = class {
    // Esto es equivalente a una función anónima
}

// Asociación objetos que están separados
class Coche {
    constructor(modelo) {
        this.modelo = modelo;
        this.conductor = null;
    }

    asignarConductor(conductor) {
        this.conductor = conductor;
    }
}
class Conductor {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
// Uso
const miCoche = new Coche("Toyota");
const conductor = new Conductor("Ana");
miCoche.asignarConductor(conductor);
console.log(`${miCoche.conductor.nombre} conduce un ${miCoche.modelo}`);


// Agregación
class Equipo {
    constructor(nombre) {
        this.nombre = nombre;
        this.jugadores = [];
    }

    agregarJugador(jugador) {
        this.jugadores.push(jugador);
    }
}
class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
// Uso
const equipo = new Equipo("Los Campeones");
const jugador1 = new Jugador("Carlos");
const jugador2 = new Jugador("Ana");
equipo.agregarJugador(jugador1);
equipo.agregarJugador(jugador2);
console.log(`El equipo ${equipo.nombre} tiene ${equipo.jugadores.length} jugadores.`);


// Composición
// Un objeto no tiene vida independiente cuando pertenece a otro


/*
    Encapsulación concentrar datos y funcionalidad ocultando detalles internos
    Herencia 
    Polimorfismo

*/

// Encapsulación
class CuentaBancaria {
    #saldo; // Propiedad privada
    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }
    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
            return `Depósito de ${cantidad} realizado. Nuevo saldo: ${this.#saldo}`;
        }
        return "La cantidad debe ser positiva.";
    }
    obtenerSaldo() {
        return this.#saldo;
    }
}
// Uso 
const cuenta = new CuentaBancaria(1000);
console.log(cuenta.depositar(500)); // Depósito de 500 realizado. Nuevo saldo: 1500
console.log(cuenta.obtenerSaldo()); // 1500
// console.log(cuenta.#saldo); // Esto generaría un error, ya que #saldo es privado


// Herencia
class Heredados extends Cerveza {
    show() {
        return "Heredo el metodo pero es propio y lo puedo modificar"
    };
}
let beer2 = new Heredados("Pilsenon", "Pilsen");
console.log(beer2.show());

// Ejemplo corto de herencia y uso de super en JavaScript

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); // Llama al constructor de la clase padre (Animal)
        this.raza = raza;
    }

    hacerSonido() {
        console.log(`${this.nombre} ladra.`);
    }
}
const miPerro = new Perro("Firulais", "Labrador");
miPerro.hacerSonido(); // Firulais ladra.





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

// Definición de la clase Persona
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }

    cumplirAnios() {
        this.edad++;
        console.log(`¡Feliz cumpleaños! Ahora tengo ${this.edad} años.`);
    }
}

// Creación de una instancia de Persona
const persona1 = new Persona("María", 30);

// Uso de los métodos de la clase
persona1.saludar();
persona1.cumplirAnios();






