// Instrucciones
// 1. En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).

// Promedio alumnos graduados por curso
// 2. El Tech Leader, nos ¡Felicita! por los avances realizados en el desafío anterior. Dado
// que hemos mostrado bastante expertise, sube su exigencia y nos pide que ayudemos
// a uno de los equipos de desarrollo. Necesitan un código que permita determinar el
// promedio de alumnos egresados por curso. Para lograrlo debemos realizar lo
// siguiente:
// a. Crear cuatro variables y asignar a cada una las siguientes cadenas de texto:
// i. Graduados de HTML5: “30 45 25 34 18 23 16 50 72 70”
// ii. Graduados de CSS3: “50 45 71 34 23 45 65 75 63 43 74 70”
// iii. Graduados de JAVASCRIPT: “70 65 58 45 23 57 34 17 72”
// iv. Graduados de NODEJS: “45 56 73 34 65 72 70 32”
// b. A cada una de las variables que contienen las cadenas de texto, habrá que
// convertirlas a arrays, separando cada elemento por una coma
// c. Crear una función que reciba como parámetros los cuatro arrays de los
// alumnos graduados y un número comprendido entre el 1 y el 4, donde:
// i. 1 = HTML5
// ii. 2 = CSS3
// iii. 3 = JAVASCRIPT
// iv. 4 = NODEJS
// La función tendrá la responsabilidad de calcular y devolver el promedio de
// graduados del curso indicado. Si el parámetro del curso es un valor diferente
// del 1 al 4, deberá retornar un mensaje al usuario indicando cuales son los
// valores asignados a cada curso.

// Paso 2.a: Definir las cadenas de texto con la cantidad de graduados por curso
const graduadosHTML5 = "30 45 25 34 18 23 16 50 72 70";
const graduadosCSS3 = "50 45 71 34 23 45 65 75 63 43 74 70";
const graduadosJavaScript = "70 65 58 45 23 57 34 17 72";
const graduadosNodeJS = "45 56 73 34 65 72 70 32";

// Paso 2.b: Convertir las cadenas de texto a arrays
const arrayGraduadosHTML5 = graduadosHTML5.split(" ").map(Number);
const arrayGraduadosCSS3 = graduadosCSS3.split(" ").map(Number);
const arrayGraduadosJavaScript = graduadosJavaScript.split(" ").map(Number);
const arrayGraduadosNodeJS = graduadosNodeJS.split(" ").map(Number);

// Paso 2.c: Función para calcular el promedio de graduados por curso
function promedioGraduadosPorCurso(arrayHTML5, arrayCSS3, arrayJavaScript, arrayNodeJS, curso) {
    let arraySeleccionado;
    switch (curso) {
        case 1:
            arraySeleccionado = arrayHTML5;
            break;
        case 2:
            arraySeleccionado = arrayCSS3;
            break;
        case 3:
            arraySeleccionado = arrayJavaScript;
            break;
        case 4:
            arraySeleccionado = arrayNodeJS;
            break;
        default:
            return "El número del curso debe estar entre 1 y 4.";
    }
    const totalGraduados = arraySeleccionado.length;
    const sumaGraduados = arraySeleccionado.reduce((total, graduado) => total + graduado, 0);
    return sumaGraduados / totalGraduados;
}

// Ejecución del programa
console.log("El promedio de graduados en HTML5 es:", promedioGraduadosPorCurso(arrayGraduadosHTML5, arrayGraduadosCSS3, arrayGraduadosJavaScript, arrayGraduadosNodeJS, 1));
console.log("El promedio de graduados en CSS3 es:", promedioGraduadosPorCurso(arrayGraduadosHTML5, arrayGraduadosCSS3, arrayGraduadosJavaScript, arrayGraduadosNodeJS, 2));
console.log("El promedio de graduados en JavaScript es:", promedioGraduadosPorCurso(arrayGraduadosHTML5, arrayGraduadosCSS3, arrayGraduadosJavaScript, arrayGraduadosNodeJS, 3));
console.log("El promedio de graduados en NodeJS es:", promedioGraduadosPorCurso(arrayGraduadosHTML5, arrayGraduadosCSS3, arrayGraduadosJavaScript, arrayGraduadosNodeJS, 4));
