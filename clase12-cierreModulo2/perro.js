const { v4: uuidv4 } = require('uuid');

let perro = {
    id: uuidv4(),
    raza: "mestizo",
    tamanio: "mediano",
    peso: 15,
    nombre: "firulais",
    color: "negro",
    edad: 5,
    vacuna: true,
    sexo: "macho",
    ladrar: function () {
        return "guau guau"
    },
    saltar: function () {
        return this.nombre + " salta"
    },
    juguetes: ["hueso", "pelota","peluche"],
    alimentacion: ["pollo","arroz","balanceado"],
};

module.exports = perro;