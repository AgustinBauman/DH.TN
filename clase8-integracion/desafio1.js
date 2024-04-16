// Instrucciones
// 1. Crear una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).

// Facturación - Cursos DH
// 2. El Tech Leader de nuestro equipo nos informa que debemos realizar un código que
// permita calcular el monto a pagar por un alumno basándose en los cursos que
// desea tomar en Digital House. Deberás seguir los siguientes pasos para lograr el
// objetivo:
// a. Crear un array multidimensional que contenga los nombres de los cursos y su
// precio en pesos: “html5, 4000”, “css3, 5000”, “javascript, 10000”, “react,
// 7000”, “nodejs, 15000”.
// b. Crear un array que contenga los cursos que el alumno quiere tomar con DH.
// Deben estar escritos en MAYÚSCULAS y el alumno puede seleccionar entre
// HTML5, CSS3, JAVASCRIPT, REACT y NODEJS.
// c. Crear una función (Callback) que reciba como parámetros el array
// multidimensional de los cursos y el otro array que indica los cursos que
// quiere hacer el alumno. La función tendrá la responsabilidad de calcular y
// devolver el monto total a pagar por el alumno en función de los cursos que
// quiere realizar. No olvides que en el array multidimensional los nombres de los
// cursos están escritos en letras minúsculas y tienes que pasarlas a
// MAYÚSCULAS.
// d. Crear otra función que reciba como parámetros el nombre y el apellido del
// alumno, el array multidimensional de los cursos con sus respectivos
// precios y el array que contiene qué cursos quiere hacer el alumno. Esta
// función tendrá la responsabilidad de retornar el nombre y el apellido del
// alumno y el monto total a pagar en función de los cursos que quiere realizar.
// e. Una vez creado el programa, ejecutalo. Para verificar los resultados solicitados,
// invoca a la segunda función, asigna diferentes valores o argumentos y no
// olvides utilizar el console.log() para mostrar los resultados al usuario. Te
// compartimos un ejemplo:

// 2

// Estimado Luis Fuentes, en función de los cursos seleccionados:
// 1.- HTML5
// 2.- CSS3
// 3.- JAVASCRIPT
// 4.- NODEJS
// El monto total a pagar es de: $34000.
// Bienvenido a la gran aventura Digital House.

// Paso 2.a: Crear un array multidimensional con los nombres de los cursos y sus precios
const cursos = [
    ["HTML5", 4000],
    ["CSS3", 5000],
    ["JavaScript", 10000],
    ["React", 7000],
    ["NodeJS", 15000]
];

// Paso 2.c: Función para calcular el monto total a pagar por los cursos seleccionados
function calcularMontoTotal(cursosDisponibles, cursosSeleccionados) {
    let montoTotal = 0;
    cursosSeleccionados.forEach(curso => {
        const cursoEncontrado = cursosDisponibles.find(c => c[0] === curso);
        if (cursoEncontrado) {
            montoTotal += cursoEncontrado[1];
        }
    });
    return montoTotal;
}

// Paso 2.d: Función para obtener el nombre completo del alumno y el monto total a pagar
function obtenerMontoTotalYNombreCompleto(nombre, apellido, cursosSeleccionados) {
    const montoTotal = calcularMontoTotal(cursos, cursosSeleccionados);
    return `Estimado ${nombre} ${apellido}, en función de los cursos seleccionados:\n${cursosSeleccionados.map((curso, index) => `${index + 1}.- ${curso}`).join('\n')}\nEl monto total a pagar es de: $${montoTotal}. \nBienvenido a la gran aventura Digital House.`;
}

// Paso 2.e: Ejecución del programa
const nombre = "Luis";
const apellido = "Fuentes";
const cursosSeleccionados = ["HTML5", "CSS3", "JavaScript", "NodeJS","React"];

console.log(obtenerMontoTotalYNombreCompleto(nombre, apellido, cursosSeleccionados));
