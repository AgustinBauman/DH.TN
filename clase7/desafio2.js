function generarTablaMultiplicar() {
    console.log("Tabla de multiplicar");
    console.log("--------------------");
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
        console.log("--------------------");
    }
}

// Llamamos a la función para generar la tabla de multiplicar del 1 al 10
generarTablaMultiplicar();
