var div_usuarios = document.querySelector("#usuarios");
var usuarios = [];

// Fetch: método que nos permite hacer peticiones AJAX 
// (Llamada a un API/REST /servicio o Backend que devuelve un resultado)
let url = "https://reqres.in/api/users";
fetch(url)
    .then(response => response.json())
    .then(json => console.log(json)); 

getUsuarios() 
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);
    })
    .catch(error => {
        console.error("Error al obtener usuarios:", error);
    });

function getUsuarios() {
    return fetch('https://reqres.in/api/users');
}

function listadoUsuarios(usuarios) {
    usuarios.forEach((user, i) => {
        let nombre = document.createElement('h2');
        nombre.innerHTML = `${i + 1} - ${user.first_name} ${user.last_name}`;
        div_usuarios.appendChild(nombre);
    });
}

// try catch
try {
    // Aquí puedes poner el código que quieres intentar ejecutar
    getUsuarios()
        .then(data => data.json())
        .then(users => listadoUsuarios(users.data));
} catch (error) {
    console.error("Ocurrió un error:", error);
}


const miPromesa = new Promise((resolve, reject) => {
    console.log('Iniciamos la promesa');
    setTimeout(function() {
        const resultado = 0; // Definimos resultado como una constante
        if (resultado === 1) {
            resolve('Hola soy una promesa');
        } else {
            reject('Error en la promesa');
        }
    }, 2000);
});

miPromesa.then((resultado) => {
    console.log("La promesa ha sido resuelta:", resultado);
}).catch((error) => {
    console.error("La promesa ha sido rechazada:", error);
});



// Función para simular una solicitud asíncrona
function solicitudAsincrona(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Solicitud a ${url} completada`);
            resolve(`Datos de ${url}`);
        }, Math.random() * 1000);
    });
}

// Ejemplo de solicitudes asíncronas de manera secuencial
async function solicitudesSecuenciales() {
    try {
        console.log('Iniciando solicitudes secuenciales');

        const resultado1 = await solicitudAsincrona('https://api.ejemplo.com/datos1');
        console.log('Resultado 1:', resultado1);

        const resultado2 = await solicitudAsincrona('https://api.ejemplo.com/datos2');
        console.log('Resultado 2:', resultado2);

        const resultado3 = await solicitudAsincrona('https://api.ejemplo.com/datos3');
        console.log('Resultado 3:', resultado3);

        console.log('Todas las solicitudes completadas');
    } catch (error) {
        console.error('Error en las solicitudes:', error);
    }
}

// Ejecutar las solicitudes secuenciales
solicitudesSecuenciales();
