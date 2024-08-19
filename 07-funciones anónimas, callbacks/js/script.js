'use strict'

// Funciones anónimas: no tienen nombre
var variable = function (parametro) {
    return "return: " + parametro;
}

// Callbacks
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var suma = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}


// No sé como se llama el parametro solo se que debo pasar un dato y uso una función anónima para eso
sumame(5, 7, function(dato) {
    alert("Suma: "+ dato);
},
function(dato) {
    alert("Suma x 2: "+ dato);
})


// Esto es más conocido como funciones de flecha
sumame(5, 7, dato => {
    alert("Suma: "+ dato);
},
dato => {
    alert("Suma x 2: "+ (dato*2));
})
