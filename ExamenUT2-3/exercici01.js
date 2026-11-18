const prompt = require('prompt-sync')();

const empresa = "NetLlevant"
const any = "2026"

let nomequip;
let memoriaram;
let capacitatdisc;
let anycompra;
let garantia;
let IP = String("10.20.16.1")

nomequip = String(prompt("Introdueix el nom del equip "))
memoriaram = Number(prompt("Introdueix la memoria Ram en GB "))
capacitatdisc = Number(prompt("Introdueix la capacitat del disc en GB "))
anycompra = Number(prompt("introdueix l'any de compra del dispositiu "))
garantia = prompt("Esta en garantia? si/no ")

if (garantia == "no") {
    garantia = Boolean(false)
} else {
    garantia = Boolean(true)
}

console.log()
console.log(`${empresa} · Inventari`)
console.log(`Equip: ${nomequip}`)
console.log(`Memoria RAM: ${memoriaram}GB (${memoriaram * 1024} MB)`)
console.log(`Disc: ${capacitatdisc}GB (${capacitatdisc / 1024} TB)`)
console.log(`Antiguitat: ${any - anycompra}`)
console.log(`En garantia: ${garantia}`)

console.log()
console.log("Tipus de dades")
console.log(`Nom equip: ${typeof(nomequip)}`)
console.log(`Memoria Ram: ${typeof(memoriaram)}`)
console.log(`Capacitat Disc: ${typeof(capacitatdisc)}`)
console.log(`Any de compra: ${typeof(anycompra)}`)
console.log(`Garantia: ${typeof(garantia)}`)
console.log(`IP: ${typeof(IP)}`) // L'IP esta posada com tipus String, perque si ho posam amb number, els punts ho detectara com si fos un nombre coma algo y pot dona errades. si volguesim fer calculs amb l'IP lo mes recomanable seria tenir 4 variables, un per cada octet.