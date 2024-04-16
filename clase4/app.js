

// if (clase == 3) no me retorna nada

//if (clase === 4) 

// if (clase == 3 || clase > 2 && clase < 1)
//     {console.log ("Hola estamos en la clase" + clase + " aca sigo poniendo cosas");}
//     else if (clase <= 3){
//         console.log("Hacemos otra cosa...");
//     }
//     else {
//         console.log("Aca cualquier cosa...");
//     }

// el if ternario son 3 partes 
// let result= !(clase > 0) ? "Es mayor" : "No es mayor";
// console.log(result);
let clase = 15;

switch (clase) {
    case 1:
        console.log("entro en el 1er caso");
        break;
    
    case 6:
        console.log("entro en el 2do caso");
        break;
    
    case 4:
        console.log("entro en el 3er caso");
        break;

     default: console.log("caso no contemplado")
         break;
}