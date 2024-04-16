// Definir la función para verificar si el avión está listo para aterrizar
function verificarAterrizaje(altura, velocidad) {
    // Verificar si la velocidad está dentro del rango
    if (velocidad >= 268 && velocidad <= 278) {
        // Verificar si la altura está dentro del rango
        if (altura >= 150 && altura <= 300) {
            return "El avión está listo para aterrizar.";
        } else {
            return "La altura del avión no es adecuada para aterrizar.";
        }
    } else {
        return "La velocidad del avión no es adecuada para aterrizar.";
    }
}

// Ejemplo de uso
let alturaAvion = 350; // Altura del avión en metros
let velocidadAvion = 275; // Velocidad del avión en km/hr

// Llamada a la función para verificar el aterrizaje
let mensaje = verificarAterrizaje(alturaAvion, velocidadAvion);
console.log(mensaje);
