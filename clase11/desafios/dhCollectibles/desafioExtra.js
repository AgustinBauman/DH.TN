// Paso 2: Crear un array de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Paso 3: Utilizar destructuring y spread operator
const [num0, , num2, , num4, ...restoNumeros] = numeros;
console.log(numeros);
// Paso 4: Crear un objeto literal para almacenar los datos de la mascota
const mascota = {
  nombre: "Bony",
  tipo: "Perro",
  color: "Dorado",
  raza: "Golden retriever"
};

// Usar desestructuración para crear variables para cada atributo del objeto mascota
const { nombre: nombreMascota, tipo: tipoMascota, color: colorMascota, raza: razaMascota } = mascota;

// Mostrar al usuario
console.log(`Hola les presento a mi mascota su nombre es: ${nombreMascota}, es un hermoso ${tipoMascota}, de color: ${colorMascota} y su raza es: ${razaMascota}.`);
