function convertirMayusculas(texto) {
    return texto.toUpperCase();
}

module.exports = convertirMayusculas;

function tipoDato(parametro) {
    return typeof(parametro);
}

module.exports = tipoDato;

function calcularEdadPerros(edadHumana) {
    return edadHumana * 7;
}

module.exports = calcularEdadPerros;

function calcularValorHora(salarioMensual, diasTrabajados, horasPorDia) {
    const salarioDiario = salarioMensual / diasTrabajados;
    const valorHora = salarioDiario / horasPorDia;
    return valorHora;
}

module.exports = calcularValorHora;

// console.log(function(parametros))