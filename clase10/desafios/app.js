const bicicletas = require('./datosBici');
const dhBici = {
    bicicletas,
    buscarBici : function (idBicicleta) {
        let bicicletaDevolver = this.bicicletas.filter(function (bicicleta) {
            return bicicleta.id == idBicicleta
        })
        
        if (bicicletaDevolver.lenght > 0){
            return bicicletaDevolver[0]
        }
        return null;
        
    },
    venderBici: function(idBicicleta){
        let miBici = this.buscarBici(idBicicleta)

        if (miBici && miBici.vendida == "no"){
            miBici.vendida = "si";
            return miBici;
        }

        return "bicicleta no encontrada"
    },
    biciParaLaVenta: function () {
        let biciSinVender = this.bicicletas.filter(function (bicicleta) {
            return bicicleta.vendida == "no";
        })
        return biciSinVender;
    },
    totalDeVentas: function () {
        let bicisVendidas = this.bicicletas.filter(function (bici) {
            return bici.vendida == "si"
        })
console.log("mis bicis vendidas", bicisVendidas);

        let totalVentas = bicisVendidas.reduce(function (total, bicicleta) {
            return total + bicicleta.precio
        }, 0)
       

        
        return totalVentas;
    }
};
console.log(dhBici.totalDeVentas());