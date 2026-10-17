const prompt = require("prompt-sync")();

let nombre = prompt("Cual es tu nombre? ")
let edad = prompt("Cual es tu edad? ")

console.log(`Hola ${nombre}! Tienes ${edad} años.`)
console.log(`El año que viene tendras ${Number(edad) + 1} años`)
