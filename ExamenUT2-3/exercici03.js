const prompt = require('prompt-sync')();

let velocitatcontractada = Number(prompt("introdueix la velocitat contractada (Mbps): "))
let velocitatmesurada = Number(prompt("Introdueix la velocitat mesurada al test (Mbps): "))
let ping = Number(prompt("Introdueix el ping (ms): "))
let perduapaquets = Number(prompt("Introdueix el % de paquets perduts: "))
let estat;

if (velocitatcontractada <= 0) {
    console.log("Dades no valides")
} else {
    let percentatge = (velocitatmesurada * 100) / velocitatcontractada
    console.log(`% de velocitat contractada obtingut: ${percentatge}`)
    
    if (percentatge >= 90 && ping < 30 && perduapaquets == 0) {
        estat = "OPTIMA"
    } else if (percentatge >= 70 && ping <= 100 && perduapaquets <= 2) {
        estat = "ACCEPTABLE"
    } else if (ping > 200 || perduapaquets > 10) {
        estat = "CRITICA"
    } else {
        estat = "DEFICIENT"
    }
    
    console.log()

    if (estat == "OPTIMA" || estat == "ACCEPTABLE") {
        console.log(`${percentatge}% Estat: ${estat}`)
    } else if (estat == "CRITICA") {
        console.log(`${percentatge}% Estat: ${estat}. Avisa al tècnic de guàrdia`)
    } else {
        console.log(`${percentatge}% Estat: ${estat}. Cal obrir una incidència.`)
    }
}