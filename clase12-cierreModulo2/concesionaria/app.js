const autosImportados = require('./autos')

const concesionaria = {
    autos: autosImportados,
    // Función para buscar un auto por patente
    buscarAuto: function(patente) {
        // Utilizamos el método find() para buscar el auto por patente
        let autoEncontrado = this.autos.find(auto => auto.patente === patente);
        // Si encontramos el auto, lo devolvemos; de lo contrario, devolvemos null
        return autoEncontrado || null;
    },
    // Función para vender un auto por patente
    venderAuto: function (patente) {
        // Buscamos el auto por patente
        let auto = this.buscarAuto(patente);
        // Si encontramos el auto y no está vendido, lo marcamos como vendido
        if (auto && !auto.vendido) {
            auto.vendido = true;
            console.log(`El auto con patente ${patente} ha sido vendido.`);
        } else {
            console.log(`El auto con patente ${patente} no está disponible para la venta.`);
        }
    },
    // Función para obtener la lista de autos para la venta
    autosParaLaVenta: function () {
    // Utilizamos el método filter() para obtener solo los autos que no han sido vendidos
    return this.autos.filter(auto => !auto.vendido);
},
    // Función para obtener la lista de autos nuevos (0 km)
    autosNuevos: function () {
    // Utilizamos la función autosParaLaVenta para obtener los autos disponibles
    // Luego, filtramos los autos que tienen un kilometraje menor a 100
    return this.autosParaLaVenta().filter(auto => auto.km < 100);
},
    // Función para obtener la lista de ventas (precios de venta de los autos vendidos)
    listaDeVentas: function () {
    // Utilizamos el método map() para generar un nuevo array con los precios de venta de los autos vendidos
    return this.autos.filter(auto => auto.vendido).map(auto => auto.precio);
},
    // Función para calcular el total de ventas
    totalDeVentas: function () {
    // Utilizamos el método reduce() para sumar todos los precios de venta de los autos vendidos
    return this.listaDeVentas().reduce((total, precio) => total + precio, 0);
},
    // Función para verificar si una persona puede comprar un auto
    puedeComprar: function (auto, persona) {
    // Calculamos el costo total del auto (precio del auto más el interés si se compra en cuotas)
    let costoTotalAuto = auto.cuotas > 0 ? auto.precio * (1 + 0.1) : auto.precio;
    // Verificamos si el costo total del auto excede la capacidad de pago total de la persona
    // y si la capacidad de pago en cuotas de la persona supera el costo de una cuota del auto
    return costoTotalAuto <= persona.capacidadDePagoTotal && auto.cuotas * persona.capacidadDePagoEnCuotas >= costoTotalAuto;
},
    // Función para obtener la lista de autos que una persona puede comprar
    autosQuePuedeComprar:function (persona) {
    // Obtenemos los autos disponibles para la venta
    let autosDisponibles = this.autosParaLaVenta();
    // Filtramos la lista de autos disponibles según los que la persona pueda comprar
    return autosDisponibles.filter(auto => this.puedeComprar(auto, persona));
},
}