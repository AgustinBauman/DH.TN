// Metodos de arrays II 
let peliculas = ['el padrino','avatar','star wars', 'superman', 'el padrino II'];

// map() => retorna un nuevo array

let pelisMap = peliculas.map(function (pelicula) {
    return pelicula.toUpperCase();
})

console.log("Pelis original", peliculas, "\n", "New Pelis", pelisMap);

// filter() => retorna un nuevo array pero con un filtro

let pelisFilter = peliculas.filter(function(pelicula) {
    return pelicula.includes ("el padrino") || pelicula == "avatar";
})
console.log("pelis filter", pelisFilter)
// reduce() => retorna un solo valor

let pelisReduce = peliculas.reduce(function (acumulador, pelicula) {
    if (pelicula.includes('padrino')) {acumulador.push(pelicula)}
    return acumulador;
}, [])

console.log("pelis reduce", pelisReduce);

let numeros = [1,5,6];
let newNums = numeros.reduce(function(acumulador,numero){
    return acumulador + numero
}, 0)

console.log("newNums", newNums);
// foreach()
peliculas.forEach(function (pelicula) {
    console.log("for each", pelicula);    
})