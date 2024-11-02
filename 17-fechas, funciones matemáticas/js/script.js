// Fecha actual con todo
var fecha = new Date();

// ### Fechas ###
var year = fecha.getFullYear();
var mes = fecha.getMonth() + 1; // Los meses van de 0 a 11, por eso sumamos 1
var dia = fecha.getDate();
var horas = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

const textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El día es: ${dia}
    La hora es: ${horas}:${minutos}:${segundos}
`;

console.log(textoHora);


// ### Matemáticas ###

// Número aleatorío
console.log(Math.random());

// Número random sin decimales y multiplicado para tener más cifras
console.log(Math.ceil(Math.random()*1000));

// Redondear
console.log(Math.round(3.3));

