const prompt = require("prompt-sync")();

let edad = prompt("Por favor introduzca su edad. ")
let carnet = prompt("Dispone de carnet estudiantil? (Responda con Si o No). ")
let preu = 20

if (edad < 18 || edad > 65 || carnet == "Si" || carnet == "si") {
    preu = preu - 5
    console.log(`Tens descompte, el preu a pagar es ${preu}€`)
} else {
    console.log(`No tens descompte, el preu a pagar es ${preu}€`)
}

