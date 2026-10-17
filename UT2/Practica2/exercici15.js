let resultat1 = "no és un número" / 2 //Este resultado representa que se ha intentado dividir un texto string con un numero, como el resultado no es un numero, representa NaN
let resultat2 = NaN + 10 //Este resultado intenta sumar al numero 10 un NaN por tanto el resultado vuelve a ser un NaN 
let resultat3 = 1 / 0  //Al intentar dividir un numero entre 0, el resultado es infinito.

console.log(`${resultat1} ${resultat2} ${resultat3}`)