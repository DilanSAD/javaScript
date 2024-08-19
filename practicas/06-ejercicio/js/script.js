'use strict'

// Diga si un número es par o impar

var numero = parseInt(prompt("Número:", 0));

while(isNaN(numero)) {
    numero = parseInt(prompt("Número:", 0));
}

if (numero%2 == 0) {
    alert("Es par");
} else {
    alert("Es impar");
    
}





