

//Funciones

const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}


console.log(saludar('Laura'));


// Funcion de flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

console.log(saludar2('Fiona')); // las ventajas de las funciones de flecha es que son mas cortas y faciles de leer


const saludar3 = (nombre) => `Hola, ${nombre}`; // si la funcion solo tiene un return se puede simplificar asi

console.log(saludar3('Peter')); // es mas facil de leer y escribir


const saludar4 = () => `Hola Mundo`; // si la funcion no recibe parametros se puede simplificar asi 
console.log(saludar4());


// Funciones de flecha con objetos literales
const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

console.log(getUser()); // retorna un objeto



// Tarea
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito  
// 3. Pruebas

// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// };

// const usuarioActivo = getUsuarioActivo('Fiona');

// console.log(usuarioActivo);

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

console.log(getUsuarioActivo('Fiona')); // retorna un objeto implicito  