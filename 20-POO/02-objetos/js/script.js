// Para js todo esto es un objeto
console.log(typeof {}) // Objetos
console.log(typeof []) // Arrays

// Se usa new para indicar que es una plantilla nueva y no cree a nivel de window
console.log(typeof new Date()) 
console.log(typeof new RegExp())

// Cualquier tipo de dato que no es un objeto es un dato primitivo

// Apartir de objetos datos primitivos
console.log(new Number(10))
console.log(new String('String'))
console.log(new Boolean(true))




// Objeto literal    objeto/lista vacia
const users = {}
const users2 = new Object()

// Objeto lista de llave clave y valor
const user = {
    // Propiedades del objeto  
    // Clave valor
    name: "Dilan",
    lastname: "Acosta",
    age: 22,
    hobbies: ['Programar','Aprender'], // Array

    // Objeto dentro de objeto
    address: {
        street: 'street',
        city: 'Medellín'
    },

    // Métodos son acciones que permiten alterar el comportamiento/operar
    // En js se les conoce como funciones
    showFullName: showFullName,

    showName() {
        // this. para tomar el valor de ese momento
        return this.name
    }
}

// Objet.keys para ver las claves del objeto
console.log(Object.keys(user))
// Objet.value para ver las claves del objeto
console.log(Object.values(user))

// Método
function showFullName(name, lastname) {
    return (name + ' ' + lastname)
}
console.log(user.showFullName("Steven", "Durango"))

console.log(user.showName())


// Constructor funciones que permiten crear objetos con propiedades y métodos
function Person() {
    // this. para indicar que es un objeto con estás propiedades
    this.name = '',
    this.lastname = '',
    this.age = 22,

    // Métodos en un constructor
    this.showFullName = function() {
        return this.name + ' ' + this.lastname
    }
}
// Quiero que me devuelva un objeto no lógica
const person2 = new Person()
person2.name = "AAA"
person2.lastname = "BBB"
console.log(person2.showFullName())




// Ejemplo de una cuenta bancaria
const cuentaBancaria = {
    // Propiedades
    titular: "Juan Pérez",
    saldo: 1000,
    numeroCuenta: "123456789",

    // Métodos
    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            return `Depósito de ${cantidad} realizado. Nuevo saldo: ${this.saldo}`;
        } else {
            return "La cantidad a depositar debe ser mayor que cero.";
        }
    },

    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            return `Retiro de ${cantidad} realizado. Nuevo saldo: ${this.saldo}`;
        } else if (cantidad <= 0) {
            return "La cantidad a retirar debe ser mayor que cero.";
        } else {
            return "Saldo insuficiente para realizar el retiro.";
        }
    },

    consultar() {
        return `Saldo actual de la cuenta ${this.numeroCuenta}: ${this.saldo}`;
    }
};

// Ejemplos de uso
console.log(cuentaBancaria.consultar());
console.log(cuentaBancaria.depositar(500));
console.log(cuentaBancaria.retirar(200));
console.log(cuentaBancaria.consultar());



