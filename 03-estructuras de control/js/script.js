var menor = 17;
var mayor = 18;
// Condicionales

// if condicional simple
if (menor > mayor) {
    console.log("Sigue siendo muy joven");
    // else if condiciones anidadas
} else if (menor == mayor) {
    console.log("Mejor ponte aprender ingles");
// else si ninguna de las condiciones anteriores se cumple
} else {
    console.log("Siempre menor");
}

var edad = 18;
var imprime = "";
// Condicional Switch
switch(edad) {
    case 18:
        imprime = "Es la mayoria de edad";
        // Cada case debe terminar con break, si no, sigue ejecutando el siguiente
    break;
    case 25:
        imprime = "Ya eres Sr";
    break;
    default: // No es obligatorio tener un default
        imprime = "No esta en el rango";
    break;
}
console.log(imprime);

let edad = 25;
switch(true) {
  case (edad >= 18 && edad < 25):
    console.log("Joven");
    break;
  case (edad >= 25 && edad < 40):
    console.log("Canchero");
    break;
  case (edad >= 40):
    console.log("Preocupante");
    break;
  default:
    console.log("f");
}

// Bucles
// for
var numero = 100;
// inicialización de contador, condición, incremento
for(var i = 1; i <= numero; i++) {
    console.log(i);
    // Para ver incremento 1 a 1 por Sources
    // debugger
}

// Ejemplo de for...in si no conozco las propiedades
console.log("Ejemplo de for...in:");
const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador"
};
for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

// Ejemplo de for...of si conozco las propiedades
console.log("Ejemplo de for...of:");
const frutas = ["manzana", "banana", "naranja", "uva"];
for (let fruta of frutas) {
    console.log(fruta);
}

//while solo entra si la condición se cumple
var year = 2050;
// Mientras la condición se cumpla, mientras la condición es true
while(year >= 2025) {
    console.log(year);
    // Se debe asegurar que la condición tarde o temprano sea false para evitar un bucle infinito
    year--;
}

// Do White  entra por lo menos una vez
var years = 20;
// Primero ejecutamos y luego comprobamos
do {
    alert(years);
    years++;
    // Dentro de cualquier bucle puedo tener un break;
    if (years == 19) {
        // Rompe el bucle, deja de ejecutarse
        break;
    }

    if (years == 23) {
        alert("Ya casi")
        continue; // Salta a la siguiente iteración, No ejecuta nada de lo que hay después porque vuelve a empezar
    }
} while(years < 25)


let resultado
do {
    resultado = confirm('Quieres seguir el bucle?')
} while (resultado)












