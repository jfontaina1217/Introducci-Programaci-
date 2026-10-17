const prompt = require("prompt-sync")();

let respuesta = prompt("Escribe cualquier texto ")
console.log(respuesta, typeof(respuesta))
console.log(Boolean(respuesta))