// proyecto/app.js

const peliculas = require("./peliculas");

console.log("Listado de películas favoritas:");

peliculas.forEach((pelicula) => {
  console.log(`
    Título: ${pelicula.titulo}
    Rating: ${pelicula.rating}
    Premios: ${pelicula.awards.join(", ")}
    Duración: ${pelicula.length}
    Precio: $${pelicula.price}
    Género: ${pelicula.genre}
  `);
});

// proyecto/app.js

const fs = require("fs");
const path = require("path");

const rutaArchivo = path.join(__dirname, "mensaje.txt");

fs.readFile(rutaArchivo, "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
    return;
  }
  console.log("Contenido del archivo mensaje.txt:");
  console.log(data);
});
