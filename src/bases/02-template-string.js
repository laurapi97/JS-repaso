
// Template String ``


const nombre = 'Laura';
const apellido = 'Pinzon';

const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(getSaludo(nombre));