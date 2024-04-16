const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar al usuario los valores y la operación
rl.question("Ingrese el primer valor: ", function(valor1Input) {
    rl.question("Ingrese el segundo valor: ", function(valor2Input) {
        rl.question("Ingrese la operación a realizar (sumar, restar, multiplicar, dividir): ", function(operacion) {
            // Convertir los valores ingresados a números
            const valor1 = parseFloat(valor1Input);
            const valor2 = parseFloat(valor2Input);

            // Variable para almacenar el resultado
            let resultado;

            // Verificar si los valores son números válidos
            if (isNaN(valor1) || isNaN(valor2)) {
                console.log("Por favor, ingrese valores numéricos válidos.");
            } else {
                // Realizar la operación según la opción ingresada por el usuario
                switch (operacion.toLowerCase()) {
                    case "sumar":
                        resultado = valor1 + valor2;
                        console.log(`El resultado de sumar ${valor1} + ${valor2} es ${resultado}`);
                        break;
                    case "restar":
                        resultado = valor1 - valor2;
                        console.log(`El resultado de restar ${valor1} - ${valor2} es ${resultado}`);
                        break;
                    case "multiplicar":
                        resultado = valor1 * valor2;
                        console.log(`El resultado de multiplicar ${valor1} * ${valor2} es ${resultado}`);
                        break;
                    case "dividir":
                        if (valor2 !== 0) {
                            resultado = valor1 / valor2;
                            console.log(`El resultado de dividir ${valor1} / ${valor2} es ${resultado}`);
                        } else {
                            console.log("Error: No se puede dividir por cero.");
                        }
                        break;
                    default:
                        console.log("Operación no reconocida. Las operaciones aceptadas son: sumar, restar, multiplicar, dividir");
                }
            }

            // Cerrar la interfaz de lectura
            rl.close();
        });
    });
});
