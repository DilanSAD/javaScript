'use strict'

var numero1 = 10;
var numero2 = 20;

// Operadores
var operacion_suma = numero1 + numero2;
var operacion_resta = numero1 - numero2;
var operacion_multiplicacion = numero1 * numero2;
var operacion_division = numero1 / numero2;
var operacion_restante = numero1 % numero2; // El porcentaje/modulo saca el restante de la división de ambos
var operacion_elevacion = numero1 ** numero2; // Con ** se realiza el exponente

/* Operadores relacionales
> mayor a
>=  mayor o igual a
< menor a
<=  menor o igual a
!= diferente/distinto a
== es igual a
=== para comparar el valor y el tipo
*/

/* Operadores lógicos
&& y (And)
|| o (Or)
! voltea el valor, invierte el valor (Not)
null vacio pero definido, no tiene valor
underfined no definido
*/


// Tipos de datos
"Texto string" // String comillas dobles
'Texto string'  // String comillas simples
`Texto String` // Acento invertido, permite incrustar valores dentro
var cadena_texto = 'las comillas simples tienen prioridad las dobles "parte del String"';
var numero_entero = 21;
var numero_entero_negativo = -22;
var numero_decimal = 19.18;
var numero_big_init = 123456789987654321n;
Symbol() // Crea un simbolo diferente con cada llamado
var bolean_verdadero_o_falso = true; // Bolean tambien puede ser 0 falso y 1 verdadero
var items = [3, 4]; // Arrays una lista de un solo tipo
var items = ["item1", "item2", "item3", 50, true];
// Tambien están los objetos
var items = new Array("item1", "item2", "item3")
{
    "clave"=valor
}

// Para identificar el tipo de dato de una variable (Siempre devuelve una cadena de texto con el tipo de dato)
typeof operacion;
var numero_falso = "33";


// Funciones para convertir datos
Number(numero_falso)+7;
parseInt(numero_falso)+7;
parseFloat(numero_falso)+7;
toString(numero_falso)+"7";
console.log(String(numero_entero)+0);



