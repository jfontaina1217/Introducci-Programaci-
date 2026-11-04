const prompt = require("prompt-sync")();

let temperatura = prompt("Introduzca cuantos grados hace ")

if (temperatura < Number(10)) {
    console.log("Fa fred")
} else if (temperatura >= Number(10) && temperatura < Number(25)) {
    console.log("Temperatura moderada")
} else {
    console.log("Temperatura calenta")
}