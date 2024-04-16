// Variables
const pagoMes = 12000; // Pago actual de energía eléctrica por mes
const consumoKWH = 450; // Consumo mensual de Kilovatios hora

// Cálculo del pago final
let pagoFinal;

// Operador ternario para determinar el pago final
pagoFinal = consumoKWH > 300 ? pagoMes * 1.2 : pagoMes;

// Mostrar mensaje al usuario
console.log(`Debido a que su hogar tuvo un consumo de ${consumoKWH}kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $${pagoFinal}`);
