// Monto por alquiler de vehiculo
// parametros tipo vehiculo, dias , silla 
// compacto 14000
// mediano 17000
// camioneta 28000
// silla 1200 por dia 

function montoApagar(tipovehiculo,diasAlquiler,sillaBebe) {
    let valorCompactoPorDia = 14000;
    let valorMedianoPorDia = 17000;
    let valorCamionetaPorDia = 28000;
    let valorSillaBebe = 1200;
    let total = 0;

    switch (tipovehiculo) {
        case "Compacto":
            total = valorCompactoPorDia * diasAlquiler
            break;
        case "Mediano":
            total = valorMedianoPorDia * diasAlquiler
            break;
        case "Camioneta":
            total = valorCamionetaPorDia * diasAlquiler
            break;

        default:
            return "tipo no valido"
    }

    if (sillaBebe) {
            total = total + (valorSillaBebe*diasAlquiler)
            return "Estimado cliente: en base al " + tipovehiculo + " alquilado, considerando los " + diasAlquiler + " dias utilizados y la silla para bebe, el monto total a pagar es de $" + total
        }
        
        return "Estimado cliente: en base al " + tipovehiculo + " alquilado, considerando los " + diasAlquiler + " utilizados, el monto total a pagar es de $" + total;
    }

console.log ("El alquiler se fue a las nubes ", montoApagar("Compacto", 8, true))
