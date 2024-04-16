const auto = require (`./ejemplo1`)
const cowsay = require("cowsay")

console.log(auto);
console.log(cowsay.say({
    text: "hola chiquis",
    e: "oO",
    T: "U "
}),
    cowsay.think({
        text: "i am modulee",
        e: "oO",
        T: "U "
    }));
