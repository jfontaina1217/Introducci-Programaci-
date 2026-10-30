const prompt = require("prompt-sync")();

let talla = prompt("Porfavor, introduzca una talla del 1 al 4 ")
if (talla == Number(1)) {
    console.log("Talla XS")
} else if (talla == Number(2)) {
    console.log("Talla S")
} else if (talla == Number(3)) {
    console.log("Talla M")
} else if (talla == Number(4)) {
    console.log("Talla L")
} else {
    console.log("Talla no disponible")
}