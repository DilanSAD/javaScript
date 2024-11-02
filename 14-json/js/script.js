// ### JSON: JavaScript Object Notation ###
// Enviar datos y recibir datos

// Crear un objeto Json
var pelicula = {
    titulo: 'Marvel',
    year: 2025,
    pais: 'Estados unidos'
}

// En arreglo
var peliculas = [
    {titulo: "Marvel", year:2025, pais: "Estados unidos"},
    {titulo: "dc", year:2026, pais: "España"},
];

// Acceder a las propiedades del objeto
console.log(pelicula.titulo);

// Cambiar valor a una propiedad
peliculas.titulo = "dc";