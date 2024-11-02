// ### Eventos: función que se ejecuta cuando pasa algo ###
var boton = document.querySelector("#boton");
var textarea = document.querySelector("#textarea");

function funcionLlamada() {

};

// Solo cuando todo el html este cargado (los otros eventos irian dentro)
// El evento 'load' espera a que se cargue todo el HTML y recursos (imágenes, css, etc)
window.addEventListener('load', () => {
    // setInterval ejecuta una función cada cierto intervalo de tiempo (en milisegundos)
    // Útil para actualizaciones periódicas como reloj, animaciones, etc.
    const intervalo = setInterval(() => {
        console.log("Set interval ejecutado cada 3 segundos");
    }, 3000);
    // setTimeout ejecuta una función UNA SOLA VEZ después del tiempo especificado
    // Útil para retrasar una acción
    const timeout = setTimeout(() => {
        console.log("Set Timeout ejecutado una única vez después de 5 segundos");
    }, 5000);
    // Para detener un intervalo usamos clearInterval pasándole la referencia
    // También existe clearTimeout para cancelar un setTimeout
    setTimeout(() => {
        clearInterval(intervalo);
        console.log("Intervalo detenido");
    }, 10000);
    // Alternativa a 'load': DOMContentLoaded
    // Se dispara cuando se carga el HTML, sin esperar recursos
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM cargado!');
    });

});

// click
boton.addEventListener('click', function () {
    funcionLlamada();
    // this hace referencia a el objeto que estoy haciendo click en ese momento
    this.style.border = "10px solid black";
    console.log(this);
});

// mouseover cuando inicia el hover
boton.addEventListener('mouseover', function () {
    boton.style.background = "#ccc";
});

// mouseout cuando sale del hover
boton.addEventListener('mouseout', function () {
    boton.style.background = "#fff";
});

// focus cuando entra el focus
textarea.addEventListener('focus', function () {
    textarea.style.border = "5px solid blue";
});

// blur cuando sale el focus
textarea.addEventListener('blur', function () {
    textarea.style.border = "1px solid red";
});

// keydown cuando se presiona la tecla
textarea.addEventListener('keydown', function (event) {
    console.log("Pulsando ", String.fromCharCode(event.keyCode));
});

// keypress cuando ya se esta presionando
textarea.addEventListener('keypress', function (event) {
    console.log("Presionando ", String.fromCharCode(event.keyCode));
});

// keyup cuando se termina de presionar la tecla
textarea.addEventListener('keyup', function (event) {
    console.log("Soltando ", String.fromCharCode(event.keyCode));
});

// submit
formulario.addEventListener('submit', () => {
        
});




