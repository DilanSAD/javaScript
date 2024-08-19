'use strict'

// Eventos: función que se ejecuta cuando pasa algo

var boton = document.querySelector("#boton");
var textarea = document.querySelector("#textarea");

function funcionLlamada() {

};

// Solo cuando todo el html este cargado (los otros eventos irian dentro)
window.addEventListener('load', () => {

    // Timers se ejecuta cada x tiempo
    var tiempos = setInterval(() => {
        console.log("Set interval ejecutado cada x tiempo");
    }, 3000);


    // SetTimeout se ejecuta cada x tiempo
    var tiempo = setTimeout(() => {
        console.log("Set Timeout ejecutado una única vez");
    }, 5000);

    // SetTimeout se ejecuta cada x tiempo
    var tiempo = clearInterval(() => {
        console.log("Para el Set Interval");
    }, 5000);

})

// Click
boton.addEventListener('click', function () {
    funcionLlamada();

    // this hace referencia a el objeto que estoy haciendo click en ese momento
    this.style.border = "10px solid black";
    console.log(this);
});

// Mouse Over cuando inicia el hover
boton.addEventListener('mouseover', function () {
    boton.style.background = "#ccc";
});

// Mouse Out cuando sale del hover
boton.addEventListener('mouseout', function () {
    boton.style.background = "#fff";
});

// Focus cuando entra el focus
textarea.addEventListener('focus', function () {
    textarea.style.border = "5px solid blue";
});

// Blur cuando sale el focus
textarea.addEventListener('blur', function () {
    textarea.style.border = "1px solid red";
});

// Keydown cuando se presiona la tecla
textarea.addEventListener('keydown', function (event) {
    console.log("Pulsando ", String.fromCharCode(event.keyCode));
});

// Keypress cuando ya se esta presionando
textarea.addEventListener('keypress', function (event) {
    console.log("Presionando ", String.fromCharCode(event.keyCode));
});

// Keyup cuando se termina de presionar la tecla
textarea.addEventListener('keyup', function (event) {
    console.log("Soltando ", String.fromCharCode(event.keyCode));
});


// Submit
formulario.addEventListener('submit', () => {
        
});




