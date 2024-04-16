// Instrucciones
// Si llegaste hasta acá, significa que vienes trabajando muy bien con los diferentes contenidos
// vistos hasta el momento. ¡Felicitaciones!

// Para que no te quedes con las ganas y puedas seguir practicando si así lo deseas, te
// proponemos que desarrolles las siguientes funciones:

// En la carpeta ya creada, crea un nuevo archivo JavaScript (.js) por cada nueva función que
// desarrolles.

// 1. Crear una función encontrar el número, que reciba por parámetros un array de
// números y un número. La función deberá evaluar si el número proporcionado existe o
// no en el array. De existir debe devolver el mensaje “El número XX sí existe en el
// array”. En el caso contrario debe mostrar el mensaje: “El valor solicitado no existe”.

// 2. Crear una función Juego de trompito, que reciba dos parámetros:
// a. El primero, un array con las siguientes cadenas de texto: “Toma 1” ,”Toma 2”,
// “Pon 1”, “Pon 2”, “Todos ponen”, “Toma todo”
// b. El segundo parámetro será la cantidad de vueltas del trompito comprendidas
// entre 2 y 6.
// La función tendrá como responsabilidad generar un número aleatorio comprendido
// entre 0 y 5. En función del resultado obtenido, se le debe devolver al usuario alguno de
// los mensajes suministrados por el trompito. Por ejemplo: “Toma todo”.
// Pista: investigar sobre las funcionesMath.random() y Math.floor().

// 3. Crear una función sumatoria de pares e impares, que recibirá por parámetros un
// array con diez valores numéricos. La función tendrá la responsabilidad de devolver al
// usuario la sumatoria total de los números pares y de los números impares.
// Pista: investigar sobre el operador módulo.



//1 Encontrar numero

function encontrarNumero(array, numero) {
    if (array.includes(numero)) {
        return `El número ${numero} sí existe en el array.`;
    } else {
        return "El valor solicitado no existe.";
    }
}

// Ejemplo de uso:
const numeros = [1, 2, 3, 4, 5];
const numeroBuscado = 7;
console.log(encontrarNumero(numeros, numeroBuscado));
console.log("-------------");
//2 Juego de trompito

function juegoDeTrompito(acciones, vueltas) {
    const indiceAleatorio = Math.floor(Math.random() * acciones.length);
    return acciones[indiceAleatorio];
}

// Ejemplo de uso:
const acciones = ["Toma 1", "Toma 2", "Pon 1", "Pon 2", "Todos ponen", "Toma todo"];
const vueltas = 3;
console.log(juegoDeTrompito(acciones, vueltas));

console.log("-------------");

//3 Sumatoria de pares e impares

function sumatoriaParesImpares(array) {
    let sumaPares = 0;
    let sumaImpares = 0;
    array.forEach(numero => {
        if (numero % 2 === 0) {
            sumaPares += numero;
        } else {
            sumaImpares += numero;
        }
    });
    return {
        sumaPares,
        sumaImpares
    };
}

// Ejemplo de uso:
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = sumatoriaParesImpares(numeros2);
console.log("Suma de pares:", resultado.sumaPares);
console.log("Suma de impares:", resultado.sumaImpares);
