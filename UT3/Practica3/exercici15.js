const prompt = require("prompt-sync")();

let num1 = prompt("Introduce un numero ")
let num2 = prompt("Introduce otro numero ")
let operador = prompt("Introduzca un operador (+, -, * o /) ")

if (operador == "+") {
    console.log(Number(num1) + Number(num2))
} else if (operador == "-") {
    console.log(num1 - num2)
} else if (operador == "*") {
    console.log(num1 * num2)
} else if (operador == "/" && num2 == 0) {
    console.log("No es pot dividir entre zero")
} else if (operador == "/") {
    console.log(num1 / num2)
} else {
    console.log("Operació no valida")
}