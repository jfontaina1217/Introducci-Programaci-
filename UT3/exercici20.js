const prompt = require("prompt-sync")();

let edad = prompt("Por favor introduzca su edad. ")
let entrada = prompt("Por favor introduca si tiene entrada (responda con Si o No). ")

if (edad >= 18 && entrada == "Si") {
    console.log("Acceso permitido")
} else {
    console.log("Acceso denegado")
}