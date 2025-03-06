import heroes,{owners} from "../data/heroes";

// console.log(owners);

// Importa el arreglo de héroes desde el archivo 'heroes.js'


// Imprime el arreglo de héroes en la consola
console.log(heroes);

// Define una función que busca un héroe por su ID
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// Llama a la función con el ID 1 y imprime el resultado en la consola
// console.log((getHeroeById)(1));

// Define una función que busca un héroe por su owner 
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('Marvel'));


