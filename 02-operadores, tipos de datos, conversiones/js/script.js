var numero1 = 10;
var numero2 = 20;
// Operadores aritméticos
var operacion_suma = numero1 + numero2;
var operacion_resta = numero1 - numero2;
var operacion_multiplicacion = numero1 * numero2;
var operacion_division = numero1 / numero2;
var operacion_restante = numero1 % numero2; // El porcentaje/modulo saca el restante de la división de ambos
var operacion_elevacion = numero1 ** numero2; // Con ** para el exponente
// Incrementar
a++;
++a;
// decrementar
a--;
--a;

/* Operadores relacionales/comparativos
    > mayor a
    >=  mayor o igual a
    < menor a
    <=  menor o igual a
    != diferente/distinto a 
    == es igual a preguntando por el valor
    === es igual a preguntando por el valor y el tipo de dato
*/

/* Operadores lógicos
    && (And)dependiendo el operador devuelve el ultimo elemento que evalua en true
    || (Or) dependiendo el operador devuelve el primer elemento que evalua en true
    ! (Not) voltea el valor, invierte el valor
*/


// Tipos de datos
/* Primitivos: se pasan por valor
    number
    bigInt
    string
    boolean
    Symbol()
    underfined no definido
    null vacio pero definido, no tiene valor
*/
"Texto string" // String comillas dobles
'Texto string'  // String comillas simples
`Texto String` // Acento invertido, permite incrustar valores dentro
var cadena_texto = 'las comillas simples tienen prioridad las dobles "parte del String"';
var numero_entero = 21;
var numero_entero_negativo = -22;
var numero_decimal = 19.18;
var numero_big_init = 123456789987654321n;
var bolean_verdadero_o_falso = true; // Bolean también puede ser 0 falso y 1 verdadero

/* ## Objects: no primitivos se pasan por referencia
    objetos {}
    arrays []
    const set = new Set()
    const set = new WeakSet()
    const set = new Map()
    const set = new weakMap()

    fuction () {}
    class
*/


// Objetos  
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


// typeof para identificar el tipo de dato de una variable (Siempre devuelve una cadena de texto con el tipo de dato)
typeof numero1;
// Symbol crea un simbolo diferente con cada llamado
Symbol() 


var numero_falso = "33";
// Funciones para convertir datos
Number(numero_falso)+7;
parseInt(numero_falso)+7;
parseFloat(numero_falso)+7;
toString(numero_falso)+"7";
console.log(String(numero_entero)+0);



