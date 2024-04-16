// Paso 1: Crear una estructura de datos para almacenar un conjunto de películas
let peliculas = ['Turno de día', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maverick', 'Elvis', 'Thor: amor y trueno'];

// Paso 2: Función para convertir una película a mayúsculas y ubicarla al principio de la estructura
function convertirAMayusculasYPonerAlPrincipio(pelicula) {
    return pelicula.toUpperCase();
}

let peliculaMasVendida = 'Thor: amor y trueno';
let peliculaMayuscula = convertirAMayusculasYPonerAlPrincipio(peliculaMasVendida);
peliculas.unshift(peliculaMayuscula);

// Paso 3: Crear una estructura para las películas próximas a estrenar
let proximasPeliculas = ['Counter-Strike', 'NOP', 'Vértigo', 'Nick', 'Avatar'];

// Paso 4: Eliminar el primer elemento (videojuego) de la estructura de películas próximas a estrenar
proximasPeliculas.shift();

// Paso 5: Función para combinar ambas estructuras y devolver una nueva estructura con todas las películas
function combinarEstructuras(peliculasActuales, proximasPeliculas) {
    return peliculasActuales.concat(proximasPeliculas);
}

let todasLasPeliculas = combinarEstructuras(peliculas, proximasPeliculas);


console.log(todasLasPeliculas);
