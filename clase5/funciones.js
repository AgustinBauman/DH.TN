// funciones declaradas
function suma(a,b) {
return a + b;    
}
console.log("sumar" , suma(2,3))

// funciones expresadas
let resta = function (a,b) {
    return a - b;}

console.log ("restar", resta(2,1))
// funciones flecha

let multiplicacion = (a,b) => a * b;
console.log ("multiplicacion" , multiplicacion(2,4))

let division = (a,b) => {
    if (b===0) {return "no se divide por cero";}
    return a / b ;
}

console.log("division", division(2,0))
// callbacks
// operacion => es nuestro callbacks

function calculadora(a,b,operacion) {
    return  operacion(a,b);
}

console.log ("calculo", calculadora(2,2,resta))