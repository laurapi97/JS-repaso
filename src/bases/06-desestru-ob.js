

// Desestructuración
// Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};


// const { nombre, edad, clave } = persona;

// console.log(nombre, edad, clave);   



// desestructuración de objetos en una función de flecha
const useContext = ({ nombre, edad, clave, rango = 'Capitan' }) => {        // se desestructura el objeto persona
    // console.log(nombre,edad,clave, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}


// retornaPersona(persona);    // se pasa el objeto persona como argumento

const {nombreClave,anios,latlng:{lat,lng}} = useContext(persona);   // se guarda el objeto retornado en una constante


console.log(nombreClave, anios);      // se imprime el objeto retornado
console.log(lat,lng);        // se imprime el objeto retornadogit 