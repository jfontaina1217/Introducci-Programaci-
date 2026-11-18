const prompt = require('prompt-sync')();
const preuperhora = Number(35)
const IVA = Number(21)
const descompte = Number(20)
const recarrec = Number(15)

let nom = prompt("Client: ")
let horesobra = Number(prompt("Hores de mà d'obra: "))
let costpeces = Number(prompt("Cost de les peces (€)"))
let contracte = prompt("Te contracte de manteniment? (si/no): ")

if (contracte == "no") {
    contracte = Boolean(false)
} else {
    contracte = Boolean(true)
}

let urgent = prompt("Servei urgent? (si/no): ")

if (urgent == "no") {
    urgent = Boolean(false)
} else {
    urgent = Boolean(true)
}

let baseimposable;
let maobra;
let descompteeuros = (undefined)
console.log(descompteeuros)

console.log()
console.log("Pressupost")
console.log(`Client: ${nom}`)

maobra = horesobra * preuperhora

console.log(`Mà d'obra (${horesobra}): ${maobra} €`)

if (contracte == true) {
    descompteeuros = Number((horesobra * 100) / descompte)
    console.log(`Descompte contracte: -${descompteeuros} €`)
} 

console.log(`Peces: ${costpeces}`)

if (urgent == true) {
    console.log(`Recàrrec urgència: ${recarrec}`)
} 

if (urgent == true) {
    baseimposable = maobra - descompteeuros + costpeces + recarrec
} else {
    baseimposable = maobra - descompteeuros + costpeces 
}

console.log(`Base imposable: ${baseimposable} €`)
let IVAeuros = (baseimposable * IVA / 100)
console.log(`IVA (${IVA}): ${IVAeuros} €`)
console.log(`Total: ${IVAeuros + baseimposable}`)