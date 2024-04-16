// Paso 1: Crear un archivo JavaScript (.js) y definir un array de productos de electrodomésticos
let electrodomesticos = ['lavadora', 'nevera', 'microondas', 'cafetera', 'licuadora', 'televisor'];

// Paso 2: Acciones sobre el array creado
console.log("Accediendo de manera arbitraria a diferentes elementos del array:");
console.log("Elemento en la posición 2:", electrodomesticos[2]);
console.log("Elemento en la posición 4:", electrodomesticos[4]);

console.log("\nExtrayendo el primer elemento del array y agregándolo al final:");
let primerElemento = electrodomesticos.shift();
electrodomesticos.push(primerElemento);
console.log("Nuevo array:", electrodomesticos);

console.log("\nAgregando dos nuevos productos al final del array:");
electrodomesticos.push('horno', 'batidora');
console.log("Nuevo array:", electrodomesticos);

console.log("\nCantidad de elementos en el array:", electrodomesticos.length);

let productoBuscado = 'cafetera';
if (electrodomesticos.includes(productoBuscado)) {
    console.log("\nProducto encontrado.");
} else {
    console.log("\nEl producto buscado no existe.");
}

console.log("\nUnificando todos los elementos del array en una cadena de texto:");
let cadenaTexto = electrodomesticos.join(' ');
console.log("Cadena de texto:", cadenaTexto);

console.log("\nCantidad de elementos en la cadena de texto:", cadenaTexto.length);

let nuevoNombre = 'secadora';
cadenaTexto = cadenaTexto.replace('lavadora', nuevoNombre);
console.log("\nCambiando el nombre de un producto en la cadena de texto:", cadenaTexto);

console.log("\nGenerando un nuevo array con cada palabra de la cadena de texto separada por coma:");
let nuevoArray = cadenaTexto.split(' ');
console.log("Nuevo array:", nuevoArray.join(', '));
