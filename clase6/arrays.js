// Arrays
let series = ["Game of Thrones", "The Seven Deadly Sins", "The simpsons"];

console.log ("Serie", series[1]);
console.log ("Longitud", series.length);

// Metodos de un array
// Agregar 1 elemento al final
series.push("The office");
console.log ("Serie", series);

// Eliminar el ultimo

series.pop();
console.log ("series", series);

// Reemplazar
let pelicula = "Terminator II";

console.log("replace", pelicula.replace("Terminator", "Avatar"))

// Slice
console.log("slice", pelicula.slice(2,4))
// Split
console.log("split", pelicula.split(" "))
// Splice
console.log("splice", series.splice(2), series)