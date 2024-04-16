// Objects
let auto = {
    color: "Blanco",
    marca: "Volkswagen",
    modelo: "Gol Trend",
    arrancar: function()
        {return "Vroom!!!"
    },
    detenerse: function()
        {return "kpuff"
    },
    queMarcaEs: function(){
        return this.marca
    }
}

console.log(auto.queMarcaEs(),auto.color,auto.arrancar(1));

// NPM I COWSAY (Es para probar instalar modulos.)