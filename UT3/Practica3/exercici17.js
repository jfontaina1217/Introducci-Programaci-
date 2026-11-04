// Cas A. Sortira accés demegat perque es compleix una de les dues comprobacions demanades.
let hora = 9;
if (hora < 10 || hora > 18) {
console.log("Accés denegat");
}

// Cas B. No sortira accés denegat perque no es compleix cap comprobació.
hora = 15;
let capDeSetmana = false;
if (hora < 10 || hora > 18 || capDeSetmana) {
console.log("Accés denegat");
}

// Cas C. No sortira accés denegat perque no es compleixen totes les comprobacions, en aquest cas, Hora es major a 10.
hora = 17;
capDeSetmana = true;
if (hora < 10 && hora > 18 && capDeSetmana) {
console.log("Accés denegat");
}