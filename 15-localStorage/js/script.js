'use strict'

// LocalStorage: memoría a nivel de navegador, localStorage por dominio

// Comprobar disponibilidad
if(typeof (Storage) !== 'undefined') {
    console.log("LocalStorage disponible");
} else {
    console.log("Incompatible con LocalStorage");
}

// Guardar datos
localStorage.setItem("llave","valor");

// Recuperar elemento
console.log(localStorage.getItem("llave"));

// Guardar objetos
var usuario = {
    nombre: "Dilan",
    apellido: "Acosta",
    email: "dilan.acosta002@gmail.com"
};

// Se debe convertir el objeto Json a un String
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);


// Eliminar elementos de localStorage
localStorage.removeItem("usuario");