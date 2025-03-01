

// Arreglos en JS
// const arreglo = new Array(100);  // crea un arreglo de 100 elementos

const arreglo =[1,2,3,4];
// arreglo.push(1,2,3,4); // no es recomendable usar push para agregar elementos al arreglo
// el push modifica el arreglo original, por lo que es mejor usar el operador spread


let arreglo2 = [...arreglo,5]; // clona el arreglo y agrega el 5 al final




console.log(arreglo);
console.log(arreglo2);



// array.prototype.map
// recorre el arreglo y retorna un nuevo arreglo con los elementos modificados  

const arreglo3 = arreglo2.map(function(numero) { // callback function 
    return numero * 2;
});

console.log(arreglo3); // [2, 4, 6, 8, 10]  // el arreglo original no se modifica