// Ejemplo completo de uso de prototype en JavaScript

// 1. Definición del constructor
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// 2. Añadir métodos al prototype
Persona.prototype.saludar = function() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
};

Persona.prototype.cumplirAnios = function() {
    this.edad++;
    console.log(`¡Feliz cumpleaños! Ahora tengo ${this.edad} años.`);
};

// 3. Crear instancias
const persona1 = new Persona("Ana", 25);
const persona2 = new Persona("Carlos", 30);

// 4. Usar los métodos del prototype
persona1.saludar(); // Salida: Hola, soy Ana y tengo 25 años.
persona2.saludar(); // Salida: Hola, soy Carlos y tengo 30 años.

persona1.cumplirAnios(); // Salida: ¡Feliz cumpleaños! Ahora tengo 26 años.

// 5. Añadir nuevos métodos al prototype después de la creación de instancias
Persona.prototype.presentarse = function() {
    console.log(`Me llamo ${this.nombre} y soy una instancia de Persona.`);
};

persona1.presentarse(); // Salida: Me llamo Ana y soy una instancia de Persona.
persona2.presentarse(); // Salida: Me llamo Carlos y soy una instancia de Persona.

// 6. Herencia usando prototype
function Empleado(nombre, edad, puesto) {
    Persona.call(this, nombre, edad);
    this.puesto = puesto;
}

// Heredar el prototype de Persona
Empleado.prototype = Object.create(Persona.prototype);
Empleado.prototype.constructor = Empleado;

// Añadir métodos específicos de Empleado
Empleado.prototype.trabajar = function() {
    console.log(`${this.nombre} está trabajando como ${this.puesto}.`);
};

const empleado1 = new Empleado("Luis", 28, "Desarrollador");
empleado1.saludar(); // Salida: Hola, soy Luis y tengo 28 años.
empleado1.trabajar(); // Salida: Luis está trabajando como Desarrollador.

// 7. Uso de Object.create() para crear objetos con un prototype específico
const personaTemplate = {
    saludar: function() {
        console.log(`Hola, soy ${this.nombre}.`);
    }
};

const maria = Object.create(personaTemplate);
maria.nombre = "María";
maria.saludar(); // Salida: Hola, soy María.

// 8. Modificar el prototype de objetos nativos (no recomendado en producción)
Array.prototype.primero = function() {
    return this[0];
};

const numeros = [1, 2, 3, 4, 5];
console.log(numeros.primero()); // Salida: 1

// Nota: Modificar prototypes de objetos nativos puede llevar a conflictos y problemas de mantenimiento.

