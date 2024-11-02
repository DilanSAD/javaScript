var numero1 = 10;
var numero2 = 20;
// ### Operadores ###
// Operadores aritméticos
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var restante = numero1 % numero2; // El porcentaje/modulo saca el restante de la división de ambos
var elevacion = numero1 ** numero2; // Con ** para el exponente
/* Incrementar
    a++;
    ++a;
*/
/* Decrementar
    a--;
    --a;
*/

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


// ### Tipos de datos ###
/* Primitivos: se pasan por valor
    number
        var numero_entero = 21;
        var numero_negativo = -22;
        var numero_decimal = 19.18;
    bigInt
        var numero_big_init = 123456789987654321n;
    string
        var texto = "String comillas dobles"
        var texto = 'String comillas simples'
        var texto = `Acento invertido, permite incrustar valores dentro`
        var cadena_texto = 'las comillas simples tienen prioridad las dobles "parte del String"';
    boolean
        var boolean = true; Boolean también puede ser 0 falso y 1 verdadero
    Symbol()
        Symbol(); // Symbol crea un simbolo diferente con cada llamado
    underfined 
        no definido
    null 
        vacio pero definido, no tiene valor
*/


/* No primitivos (Objects): se pasan por referencia
    objetos {}
    arrays []
    const set = new Set() 
        // Set() no permite duplicados
        // has() para buscar si existe
    const set = new WeakSet()
    const set = new Map()
    const set = new weakMap()

    fuction () {}
    class
*/


// typeof para identificar el tipo de dato de una variable (Siempre devuelve una cadena de texto con el tipo de dato)
typeof boolean;


var numero_falso = "33";
var numero_entero = 21;
// ### Funciones para convertir datos ###
console.log(Number(numero_falso)+7.3);
console.log(parseInt(numero_falso)+7);
console.log(parseFloat(numero_falso)+7.222);
console.log(toString(numero_falso)+6);
console.log(String(numero_entero)+'texto');

const web = ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'];
const backend = ['Java', 'Python', 'Node.js', 'C#', 'Ruby', 'Go'];
const frontend = ['React', 'Angular', 'Vue.js', 'Svelte', 'jQuery'];

web.union(backend) // Unión de ambas colecciones
web.intersection(backend) // Elementos que coinciden en ambos
backend.difference(frontend) // Elementos que están en la primera colección pero no en la segunda
backend.symmetricDifference(frontend) // Todos los elementos diferentes en ambas colecciones

backend.isSubsetOf(web) // Si todos los elementos de A están en B, entonces A es un subconjunto de B
backend.isSupersetOf(web) // Si todos los elementos de A están en B, entonces B es un subconjunto de A
backend.isDisjointFrom(web) // Las colecciones no comparten elementos



