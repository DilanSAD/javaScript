'use strict'

var div_usuarios = document.querySelector("#usuarios");
var usuarios = [];
// Fetch: método que nos permite hacer peticiones AJAX 
// (Llamada a un API/REST /servicio o Backend que devuelve un resultado)
let url = "url";
fetch(url).then(response => response.json())
    .then(json = console.log(json));

getUsuarios() 
    .then(data => data.json())
    //then son promesas
    .then(users => {
        listadoUsuarios(users.data);

        return getInfo();
    });


function getUsuarios() {
    return fetch('https://reqres.in/api/users');
}


function listadoUsuarios(usuarios) {
    
    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');

        nombre.innerHTML = i + "-" + user.first_name + " " + user.last_name;

        div_usuarios.appendChild(nombre);
    });
}


// try catch
try {
    
} catch (error) {
    
}