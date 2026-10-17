console.log("10" + 5)
console.log("10" - 5)
console.log("10" * 5)
console.log("10" / 5)

console.log(Number("10") + 5)
console.log(Number("10") - 5)
console.log(Number("10") * 5)
console.log(Number("10") / 5)

//Los resultados son los mismos excepto el de sumar, porque en javascript el simbolo de + es el unico que tiene dos funciones, sumar numeros y encadenar textos strings, como 10 era un string a convertido al 5 en uno y por eso el resultado es 105