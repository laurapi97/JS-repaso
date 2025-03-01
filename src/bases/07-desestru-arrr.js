// desestructuracion de arreglos
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ ,,p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras,numeros] = retornaArreglo();
console.log(letras,numeros);




// Tarea 
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const useState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}]; // se retorna un arreglo con el valor y una funcion
}

// const arr = useState('Goku');

const [nombre, setNombre] = useState('Goku'); // se desestructura el arreglo y se asigna a las variables 

console.log(nombre); // se imprime el valor de la variable nombre 
setNombre(); // se imprime el valor de la funcion setNombre


