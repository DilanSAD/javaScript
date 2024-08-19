'use strict'

// Realizar una calculadora

// Función para realizar las operaciones
function calculadora() {
    // Pedir números
    let numero1 = parseFloat(prompt("Introduce el primer número:"));
    let numero2 = parseFloat(prompt("Introduce el segundo número:"));
    
    // Pedir la operación a realizar
    let operacion = prompt("Introduce la operación a realizar (sumar, restar, multiplicar, dividir, porcentuar):").toLowerCase();
    let resultado;

    // Realizar la operación seleccionada
    switch (operacion) {
        case "sumar":
            resultado = numero1 + numero2;
            break;
        case "restar":
            resultado = numero1 - numero2;
            break;
        case "multiplicar":
            resultado = numero1 * numero2;
            break;
        case "dividir":
            resultado = numero1 / numero2;
            break;
        case "porcentuar":
            resultado = (numero1 * numero2) / 100;
            break;
        default:
            alert("Operación no válida");
            return;
    }

    // Mostrar el resultado
    alert("El resultado es: " + resultado);
}

// Ejecutar la calculadora
calculadora();

