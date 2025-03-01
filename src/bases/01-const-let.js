// Variables y constantes

const  nombre  =  'Laura' ;
const apellido =  'Pinzon' ;

let valorDado = 5;
valorDado = 4;

console.log(nombre,apellido,valorDado);



// la variable let dentro del bloque scope solo existe dentro de ese bloque
if (true) {
    let valorDado = 7;
    console.log(valorDado);
}

console.log(valorDado);

