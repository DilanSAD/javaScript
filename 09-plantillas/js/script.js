var nombres = prompt("Ingrese su nombre");
var apellidos = prompt("Ingrese su apellido");
// Plantillas
var texto = `
    <h1>h1<h1/>
    <h3>h3 nombre: ${nombres}<h3/>
    <h3>h3 apellido: ${apellidos}<h3/>
`;

document.write(texto);
