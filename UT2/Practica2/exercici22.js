const prompt = require("prompt-sync")();

let num1 = prompt("Primer Numero ")
let num2 = prompt("Segundo Numero ")

console.log(`Suma = ${Number(num1) + Number(num2)}`)
console.log(`Resta = ${Number(num1) - Number(num2)}`)
console.log(`Multiplicación = ${Number(num1) * Number(num2)}`)
console.log(`Division = ${Number(num1) / Number(num2)}`)