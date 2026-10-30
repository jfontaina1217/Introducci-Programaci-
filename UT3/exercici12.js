const prompt = require("prompt-sync")();

let adivinanza = prompt("Intenta adivinar, coloca un numero! ")

if (adivinanza == Number(7)) {
    console.log("Has adivinado")
} else {
    console.log("No has adivinado, vuelve a intentarlo!")
}