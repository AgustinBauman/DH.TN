// JSON
// JSON .parse() => convierte un string en un objeto

let json = '{"name": "Rocio", "age": 34}'

console.log(json);

let persona = JSON.parse(json);

console.log(persona);

// JSON.stringbify(objeto) => convierte un objeto en un string

let persona1 = {
    name: "rocko",
    age: 29,
}

console.log(persona1);

let json1 = JSON.stringify(persona1)

console.log(json1);