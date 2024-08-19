'use strict'

var numero1 = 10;
var numero2 = 20;

// Operadores
var operacion = numero1 + numero2;
operacion = numero1 - numero2;
operacion = numero1 * numero2;
operacion = numero1 / numero2;
// El porcentaje saca el resto de la división de ambos
operacion = numero1 % numero2;

// Tipos de datos
var numero_entero = 21;
var cadena_texto = 'las comillas simples tienen prioridad las dobles "parte del String"';
// Bolean tambien puede ser 0 falso y 1 verdadero
var bolean_verdadero_o_falso = true;
var items = [3, 4];
var items = ["item1", "item2", "item3", 50, true];
// Tambien están los objetos
var items = new Array("item1", "item2", "item3")


// Para identificar el tipo de dato de una variable
typeof operacion;

var numero_falso = "33";
// Funciones para convertir datos
Number(numero_falso)+7;
parseInt(numero_falso)+7;
parseFloat(numero_falso)+7;
toString(numero_falso)+"7";
console.log(String(numero_entero)+0);



