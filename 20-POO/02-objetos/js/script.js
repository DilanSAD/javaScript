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


// Objeto literal
var objetos = {};
let objetos = {
    // Propiedades
    clave: "valor",
    edad: 20,
};
// Primera forma de reasignar un valor
objetos.edad = 22;
// Segunda forma de reasignar un valor
let llave = "edad";
objetos[llave] = 23;
// Eliminar una propiedad
delete objetos.edad;

// objeto/lista vacia
const users = new Object()

// Objeto lista de llave clave - valor
const user = {
    // Las propiedades y métodos de un objeto pueden ser de cualquier tipo de JavaScript, incluso otros objetos o arrays.
    // Clave - valor
    name: "Dilan",
    lastname: "Acosta",
    age: 22,
    // Objeto dentro de objeto
    address: {
        street: 'street',
        city: 'Medellín'
    },
    hobbies: ['Programar','Aprender'], // Array

    // Métodos son acciones que permiten alterar el comportamiento/operar
    // En js se les conoce como funciones
    showFullName: showFullName,

    showName() {
        // this. para tomar el valor de ese momento
        return this.name
    }
}

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




// ### ITERAR OBJETOS EN JS ###
// La estructura de control for...in nos permite crear un bucle que itera sobre todas las propiedades 
// enumerables de un objeto, en un orden arbitrario.
const spiderman = {
    name: 'Spidey',
    universe: 42,
    powers: ['web', 'invisibility', 'spider-sense']
  }
  
  for (const property in spiderman) {
    console.log(`${property}: ${spiderman[property]}`);
  }
// Objet.keys para ver las claves del objeto, retorna un array con cada una de las llaves de las propiedades enumerables de un objeto.
console.log(Object.keys(user))
// Objet.value para ver las claves del objeto, retorna un array con los valores de lass propiedades enumerables de un objeto.
console.log(Object.values(user))
// Object.entries() retorna un array de arrays, donde cada subarray es un par [propiedad, valor] correspondiente a las propiedades enumerables de un objeto.
const entries = Object.entries(spiderman)

entries.forEach(entry => {
  console.log(entry)
})

// ### Operador de encadenamiento opcional ###
// Permite leer el valor de una propiedad ubicada profundamente dentro de una cadena de objetos conectados, sin tener 
// que validar expresamente que cada referencia en la cadena es válida.
const gamesystem = {
    name: 'PS5',
    price: 550,
    specs: {
      cpu: 'AMD Ryzen Zen 2',
      gpu: 'AMD Radeon RDNA 2',
    }
  }
  console.log(gamesystem.specifications?.cpu) // -> undefined
  console.log(gamesystem.specs?.cpu) // -> AMD Ryzen Zen 2




// Objeto global
// En el navegador es 'window', en Node.js es 'global'
// Es el objeto principal donde se almacenan variables y funciones globales

// Ejemplo de objeto global y this
const objetoGlobal = {
    nombre: "Objeto Global",
    saludar: function() {
        console.log("Hola desde", this.nombre);
    }
};

// This hace referencia al dueño del contexto de ejecución
const persona = {
    nombre: "María",
    saludar: function() {
        console.log("Hola, soy", this.nombre); // this se refiere a persona
    }
};

// Función suelta - this apunta al objeto global
function funcionSuelta() {
    console.log("This apunta a:", this);
}

// Demostración
objetoGlobal.saludar(); // this se refiere a objetoGlobal
persona.saludar(); // this se refiere a persona
funcionSuelta(); // this se refiere al objeto global (window en navegador)
// Las funciones flechas no pueden ser underfined



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



