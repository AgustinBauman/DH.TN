// Desestructuracion de ARRAYS

let series = ['God of war','breaking bad','friends'];

let [serie1, serie2, friends] = series;

console.log("Es God of war?", serie1);

// Desestructuracion de OBJETOS

let persona = {
    nombre: "Rocko",
    apellido: "Rocio",
    edad: 35,
}

let {nombre, apellido, edad} = persona;

console.log("la persona se llama", nombre);

// Spread Operator

let series2 = ["BlackList", "Black Mirror"];

let todasLasSeries = [...series, ...series2];

console.log(todasLasSeries);

// Spread Operator de OBJETOS

let persona2 = {
    ...persona,
    direccion: {
        calle: 'siempre viva',
        altura: 123,
        localidad: 'springfield',
    },    
}
console.log(persona2);

// Spread Operator con FUNCIONES

function sumar(a, b, c) {
    return a + b + c;
}

let numerosASumar = [3,5,6];

console.log("suma", sumar(...numerosASumar));

// Rest Operator

function sumar2(...numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0)
}

console.log("mi otra suma", sumar2 (1,5,8,6,10));

//min 35 clase 11
