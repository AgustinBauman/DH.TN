// 1. Crear una función que pida un valor por parámetro y muestre los 10 números
// siguientes.

function mostrarSiguientesNumeros(numero) {
    for (let i = numero + 1; i <= numero + 10; i++) {
        console.log(i);
    }
}

// Ejemplo de uso:
mostrarSiguientesNumeros(5);

console.log("-------------------");
// 2. Imprimir los números entre el 1 y el 57, saltando de tres en tres.

function imprimirNumerosDeTresEnTres() {
    for (let i = 1; i <= 57; i += 3) {
        console.log(i);
    }
}

// Ejemplo de uso:
imprimirNumerosDeTresEnTres();
console.log("-------------------");
// 3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100.

function sumatoriaDelCeroAlCien() {
    let sumatoria = 0;
    for (let i = 0; i <= 100; i++) {
        sumatoria += i;
    }
    console.log("La sumatoria del 0 al 100 es:", sumatoria);
}

// Ejemplo de uso:
sumatoriaDelCeroAlCien();
console.log("-------------------");
// 4. Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
// de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
// las letras de la cadena de texto pero en MAYÚSCULA.
// Pista: Investigar el método .toUpperCase.

function mostrarLetrasEnMayuscula(texto) {
    for (let letra of texto) {
        console.log(letra.toUpperCase());
    }
}

// Ejemplo de uso:
mostrarLetrasEnMayuscula("practicando el uso de los ciclos o bucles");
console.log("-------------------");
// 5. Crear una función que reciba como parámetro un array de números positivos. Tendrá
// la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
// Pista: Investiga sobre el uso del operador módulo. Recordemos también que un
// número par es aquel que se puede dividir entre 2.

function filtrarNumerosPares(array) {
    let numerosPares = [];
    for (let numero of array) {
        if (numero % 2 === 0) {
            numerosPares.push(numero);
        }
    }
    return numerosPares;
}

// Ejemplo de uso:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filtrarNumerosPares(numeros));
