/*En el archivo se desarrolla un código para calcular el nuevo sueldo a un trabajador,
para ello debes declarar las siguientes variables y almacenar en ellas los siguientes
datos del trabajador:
a. nombre
b. apellido
c. sueldoActual
d. porcentajeAumento
3. Almacenar en una variable el “calculoAumento”. Esta contendrá el resultado de la
operación del aumento del trabajador (sueldoActual * porcentajeAumento)/ 100).
4. En otra variable “nuevoSueldo”, almacena el resultado del cálculo del nuevo
sueldo.
5. Usando el console.log() y concatenando string, muestra en la consola de Visual
Studio Code los contenidos de cada una de las variables:*/

//Calcular Sueldo

let nombre = "rocio";
let apellido = "rosales";
let sueldoActual = 150000;
let porcentajeAumento = 25;
let calculoAumento = (sueldoActual * porcentajeAumento) / 100 ;
let nuevoSueldo = sueldoActual + calculoAumento;

console.log ("El aumento es de:" , calculoAumento)
console.log ("Tu sueldo pasa a ser de:" , nuevoSueldo)

