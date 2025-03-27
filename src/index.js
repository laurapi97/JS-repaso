
const activo = true;

const mensaje = (activo) && 'Activo'; // Operador corto circuito    // Si la primera parte es verdadera, se ejecuta la segunda parte   

// const mensaje = (activo) ? 'Activo' : 'Inactivo'; // Operador ternario 

console.log(mensaje);