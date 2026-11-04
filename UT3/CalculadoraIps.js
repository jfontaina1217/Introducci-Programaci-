const prompt = require("prompt-sync")();

console.log("=============== Calculadora de IPs de Joaquin ================")

let octeto1 = Number(prompt("Introduzca el numero del primer octeto "))
let octeto2 = Number(prompt("Introduzca el numero del segundo octeto "))
let octeto3 = Number(prompt("Introduzca el numero del tercer octeto "))
let octeto4 = Number(prompt("Introduzca el numero del cuarto octeto "))

let correcta = (undefined)
if ( octeto1 >= 0 && octeto1 <= 255 && octeto2 >= 0 && octeto2 <= 255 && octeto3 >= 0 && octeto3 <= 255 && octeto4 >= 0 && octeto4 <= 255) {
    console.log()
    console.log(`La IP introducida es ${octeto1}.${octeto2}.${octeto3}.${octeto4}`)
    correcta = true
} else {
    console.log()
    console.log("La IP introducida es incorrecta.")
    correcta = false
}

let clase = (undefined)
let loopback = (false)
let mascdefecte = ("No hi ha per defecte")
if (octeto1 >= 1 && octeto1 <= 126) {
    clase = "A"
    mascdefecte = "255.0.0.0"
} else if (octeto1 == 127) {
    clase = "Loopback"
    loopback = true
} else if (octeto1 >= 128 && octeto1 <= 191) {
    clase = "B"
    mascdefecte = "255.255.0.0"
} else if (octeto1 >= 192 && octeto1 <= 223) {
    clase = "C"
    mascdefecte = "255.255.255.0"
} else if (octeto1 >= 224 && octeto1 <= 239) {
    clase = "D"
} else if (octeto1 >= 240 && octeto1 <= 255) {
    clase = "E"
} else if (octeto1 == 0) {
    clase = "Reservada"
} else {
    clase = "Invalida"
}

if (Boolean(clase) != true) {
    clase = "No hi ha per defecte"
}

let privada = (undefined)
if (octeto1 == 10) {
    privada = true
} else if (octeto1 == 172 && octeto2 >= 16 && octeto2 <= 31 ) {
    privada = true
} else if (octeto1 == 192 && octeto2 == 168) {
    privada = true
} else {
    privada = false
}

if (correcta == true) {
    console.log(`Clase: ${clase}`)
    console.log(`Mascara por defecto: ${mascdefecte}`)
    if (privada == true && loopback == false) {
      console.log("Tipus: Privada")
    } else {
      console.log("Tipus: Pública")
    }
}