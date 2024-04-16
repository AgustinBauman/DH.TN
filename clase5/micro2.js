// Primera función - Callback
function calcularTotalHamburguesa(tipoHamburguesa, conJamón, conQueso, conSalsaTomate, conMayonesa, conMostaza, conTomate, conLechuga, conCebolla) {
    let precioBase;
    
    // Definir el precio base según el tipo de hamburguesa
    switch (tipoHamburguesa) {
        case 'Carne a la parrilla':
            precioBase = 1800;
            break;
        case 'Pollo':
            precioBase = 1500;
            break;
        case 'Vegetariana':
            precioBase = 1200;
            break;
        default:
            console.log('Tipo de hamburguesa no válido');
            return;
    }
    
    // Calcular el precio de los adicionales
    let precioAdicionales = 0;
    if (conJamón) precioAdicionales += 30;
    if (conQueso) precioAdicionales += 25;
    if (conSalsaTomate) precioAdicionales += 5;
    if (conMayonesa) precioAdicionales += 5;
    if (conMostaza) precioAdicionales += 5;
    if (conTomate) precioAdicionales += 15;
    if (conLechuga) precioAdicionales += 10;
    if (conCebolla) precioAdicionales += 10;
    
    // Calcular el total
    const total = precioBase + precioAdicionales;
    return total;
}

// Segunda función
function generarMensaje(nombre, apellido, tipoHamburguesa, conJamón, conQueso, conSalsaTomate, conMayonesa, conMostaza, conTomate, conLechuga, conCebolla) {
    const total = calcularTotalHamburguesa(tipoHamburguesa, conJamón, conQueso, conSalsaTomate, conMayonesa, conMostaza, conTomate, conLechuga, conCebolla);
    if (total !== undefined) {
        return `Estimado ${nombre} ${apellido}, el monto total a pagar es de: $${total}`;
    } else {
        return 'Error al calcular el total';
    }
}

// Ejemplo de uso
console.log(generarMensaje('Daniel', 'Fuentes', 'Carne a la parrilla', true, true, false, true, false, true, false, true));
