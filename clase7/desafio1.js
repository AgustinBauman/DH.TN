// Paso 1: Crear un array con las operaciones bancarias
const operacionesBancarias = [5000, -2000, 3000, -1000];

// Paso 2: Crear una función callback para calcular el saldo total
function calcularSaldos(operaciones) {
    let totalDepositos = 0;
    let totalRetiros = 0;

    // Calcular los saldos
    for (let index = 0; index < operaciones.length; index++) {
        if (operaciones[index] > 0) {
            totalDepositos += operaciones[index];
        } else {
            totalRetiros += operaciones[index];
        }
    }

    // Calcular el saldo actual
    const saldoActual = totalDepositos + totalRetiros;

    // Retornar los resultados
    return {
        totalDepositos: totalDepositos,
        totalRetiros: totalRetiros,
        saldoActual: saldoActual
    };
}

// Paso 3: Crear una función para obtener los datos del cliente y saldos
function obtenerDatosCliente(nombre, apellido, operaciones) {
    const saldos = calcularSaldos(operaciones);

    // Retornar los datos del cliente y saldos
    return {
        nombre: nombre,
        apellido: apellido,
        totalDepositos: saldos.totalDepositos,
        totalRetiros: saldos.totalRetiros,
        saldoActual: saldos.saldoActual
    };
}

// Invocar la función con los valores proporcionados
const datosCliente = obtenerDatosCliente("Gloria", "Medina", operacionesBancarias);

// Mostrar los resultados
console.log(`Estimada ${datosCliente.nombre} ${datosCliente.apellido}:`);
console.log(`El monto total de los depósitos es de: $${datosCliente.totalDepositos}.`);
console.log(`El monto total de los retiros es de: $${Math.abs(datosCliente.totalRetiros)}.`);
console.log(`Por lo tanto, su saldo actual en la cuenta es de: $${datosCliente.saldoActual}.`);
