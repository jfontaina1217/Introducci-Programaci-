const prompt = require("prompt-sync")();

let edat = prompt("Cual es tu edad? ")

if (edat < Number(18)) {
    console.log("Eres menor de edad")
} else { 
    console.log("Eres mayor de edad") }