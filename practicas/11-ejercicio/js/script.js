'use strict'

var formulario = document.querySelector('#form__add_peliculas');

formulario-addEventListener('submit', () => {
    var titulo = document.querySelector('#add_pelicula').value;

    if (titulo.length >= 1) {
        localStorage.setItem(titulo, titulo);
    }
});

var ul = document.querySelector('#peliculas-list');

for (var i in localStorage) {
    if (typeof localStorage[i] == 'string') {
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}

var formulariob = document.querySelector('#form__renive_peliculas');

formulariob-addEventListener('submit', () => {
    var titulo = document.querySelector('#remove_pelicula').value;

    if (titulo.length >= 1) {
        localStorage.removeItem(titulo);
    }
});