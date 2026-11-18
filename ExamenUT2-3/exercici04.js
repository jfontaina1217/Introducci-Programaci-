const prompt = require('prompt-sync')();

let tipus = prompt("Introdueix el tipus d'incidencia (XARXA, HARDWARE o SOFTWARE): ")
let horespasat = Number(prompt("Introdueix quantes hores han passat des que es va obrir la incidencia: "))
let clientempresa = prompt("El client es una empresa? (si/no): ")

if (clientempresa == "no") {
    clientempresa = Boolean(false)
} else {
    clientempresa = Boolean(true)
}


let serveiclient = prompt("El servei del client esta aturat? (si/no): ")

if (serveiclient == "no") {
    serveiclient = Boolean(false)
} else {
    serveiclient = Boolean(true)
}

let termini;
let departament;
let invalid;
let prioritat;
let terminirestant;
let terminipasat = (undefined)

switch (tipus) {
    case "XARXA":
        termini = 4
        departament = "Xarxes"
        break;
    case "HARDWARE":
        termini = 24
        departament = "Taller"
        break;
    case "SOFTWARE":
        termini = 48
        departament = "Suport d'aplicacions"
        break;
    default:
        invalid = true
        break;
}


if (invalid == true) {
   console.log("Tipus d'incidència no vàlid") 
} else {
    prioritat = (clientempresa == true && serveiclient == true) ? "CRITICA" : "NORMAL"

    if (prioritat == "CRITICA") {
        termini = termini / 2
    }
  
    terminirestant = Number(termini) - Number(horespasat)

    if (terminirestant < 0) {
        terminipasat = true
        terminirestant = terminirestant * Number(-1)
    } else {
        terminipasat = false
    }

    if (terminipasat == false) {
        console.log(`Termini ${termini} h · Dins el termini, queden ${terminirestant} h`)
    } else {
        console.log(`Termini ${termini} h · Termini superat en ${terminirestant} h `)
    }
}