// Objetos literales o diccionarios

const persona = {
    nombre: 'Fiona',
    apellido: 'Pinzon',
    edad: 10,
    direccion: {
        ciudad: 'Bogota',
        zip: 123456,
        lat: 14.3232,
        lng: 34.9233
    }

};
// console.log(`${persona.nombre} ${persona.apellido}, edad: ${persona.edad}`); // muestra en consola

// console.table(persona);  // muestra la tabla en consola






const persona2 = { ...persona }; // clona el objeto persona
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2); // muestra en consola