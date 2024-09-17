'use strict'

var menor = 17;
var mayor = 18;
// Condicionales
if (menor > mayor) {
    console.log("Sigue siendo muy joven");
} else if (menor == mayor) {
    console.log("Mejor ponte aprender ingles");
} else {
    console.log("Siempre menor");
}

var edad = 18;
var imprime = "";
// Condicional Switch
switch(edad) {
    case 18:
        imprime = "Es la mayoria de edad";
    break;
    case 25:
        imprime = "Ya eres Sr";
    break;
    default:
        imprime = "No esta en el rango";
    break;
}
console.log(imprime);

let edad = 25;

switch(true) {
  case (edad >= 18 && edad < 25):
    console.log("Eres mayor de edad y eres joven");
    break;
  case (edad >= 25 && edad < 40):
    console.log("Eres mayor de edad y estás en plena madurez");
    break;
  case (edad >= 40):
    console.log("Eres mayor de edad y estás en la mejor edad");
    break;
  default: // No es obligatorio tener un default
    console.log("Eres menor de edad");
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

/* For in
for(const i in person) {
    console.log(i);
    console.log(person[i]);
}
*/

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
    // Dentro de cualquier bucle puedo tener un break; que rompe el bucle, deja de ejecutarse
    if (years == 19) {
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












