// Las Promesas en JavaScript son objetos que representan un valor que puede estar disponible ahora, en el futuro, o nunca
// Tienen 3 estados: pending (pendiente), fulfilled (cumplida), rejected (rechazada)

// Creando una promesa básica
const promesaBasica = new Promise((resolve, reject) => {
    // Simulando una operación asíncrona
    setTimeout(() => {
        const exito = true;
        if (exito) {
            resolve("¡La operación fue exitosa!");
        } else {
            reject("¡Hubo un error!");
        }
    }, 2000);
});

// Usando la promesa
promesaBasica
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error));

// Ejemplo con múltiples promesas
const promesa1 = Promise.resolve("Promesa 1 resuelta");
const promesa2 = Promise.reject("Promesa 2 rechazada");
const promesa3 = new Promise(resolve => setTimeout(() => resolve("Promesa 3 resuelta"), 3000));

// Promise.allSettled espera a que todas las promesas se completen (ya sea fulfilled o rejected)
// y devuelve un array con el estado y valor/razón de cada promesa
Promise.allSettled([promesa1, promesa2, promesa3])
    .then(resultados => {
        resultados.forEach((resultado, indice) => {
            if (resultado.status === 'fulfilled') {
                console.log(`Promesa ${indice + 1} completada:`, resultado.value);
            } else {
                console.log(`Promesa ${indice + 1} rechazada:`, resultado.reason);
            }
        });
    });

// Promise.all() - Espera que todas las promesas se resuelvan, si una falla, todas fallan
const promesasAll = [
    Promise.resolve("Éxito 1"),
    Promise.resolve("Éxito 2"),
    Promise.resolve("Éxito 3")
];

Promise.all(promesasAll)
    .then(resultados => console.log("Todas exitosas:", resultados))
    .catch(error => console.log("Una falló:", error));

// Promise.race() - Devuelve la primera promesa que se complete (éxito o error)
const promesasRace = [
    new Promise(resolve => setTimeout(() => resolve("Promesa 1"), 1000)),
    new Promise(resolve => setTimeout(() => resolve("Promesa 2"), 2000)),
    new Promise((resolve, reject) => setTimeout(() => reject("Error"), 500))
];

Promise.race(promesasRace)
    .then(ganador => console.log("La más rápida:", ganador))
    .catch(error => console.log("La más rápida falló:", error));

// Promise.any() - Devuelve la primera promesa que se resuelva exitosamente
const promesasAny = [
    new Promise((resolve, reject) => setTimeout(() => reject("Error 1"), 1000)),
    new Promise(resolve => setTimeout(() => resolve("Éxito 1"), 2000)),
    new Promise(resolve => setTimeout(() => resolve("Éxito 2"), 3000))
];

Promise.any(promesasAny)
    .then(resultado => console.log("Primera exitosa:", resultado))
    .catch(error => console.log("Todas fallaron:", error));


// Promise.try() es una propuesta que aún no está estandarizada en JavaScript
// Permite envolver una función síncrona/asíncrona en una promesa de manera más limpia
// Es útil cuando no sabemos si una función retornará una promesa o un valor síncrono
// Ejemplo de implementación de Promise.try
Promise.try = function(fn) {
    return new Promise(resolve => resolve(fn()));
}
// Ejemplo de uso:
function posiblementeAsincrona(valor) {
    // Esta función podría ser síncrona o asíncrona
    if (valor > 10) {
        return Promise.resolve("Es mayor a 10");
    } else {
        return "Es menor o igual a 10";
    }
}
// Usando Promise.try
Promise.try(() => posiblementeAsincrona(15))
    .then(resultado => console.log("Resultado:", resultado))
    .catch(error => console.log("Error:", error));

Promise.try(() => posiblementeAsincrona(5))
    .then(resultado => console.log("Resultado:", resultado))
    .catch(error => console.log("Error:", error));

// Sin Promise.try tendríamos que hacer:
Promise.resolve().then(() => posiblementeAsincrona(15))
    .then(resultado => console.log("Resultado alternativo:", resultado));


// Promise.withResolvers() - Crea una promesa y expone sus funciones resolve/reject
// Útil cuando necesitamos controlar la resolución de una promesa desde fuera
// permite controlar cuando se resuelva o rechaza de manera manual, estructurada y sin necesidad de anidación
const { promise, resolve, reject } = Promise.withResolvers();

// Ejemplo de uso:
console.log("Promesa inicial:", promise); // Promesa pendiente

// Podemos resolver la promesa más tarde
setTimeout(() => {
    resolve("¡Promesa resuelta!");
}, 2000);

// O rechazarla si ocurre un error
// setTimeout(() => {
//     reject(new Error("¡Algo salió mal!"));
// }, 2000);

promise
    .then(resultado => console.log("Éxito:", resultado))
    .catch(error => console.log("Error:", error));

