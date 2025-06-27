/*Reto 4: SubString y concatenación de cadenas
Cree un string y luego un substring al cual debe de concatenar despues.*/

let string = "Ingeniero de Sistemas"
let cadena1 = string.substring(0,9)
console.log(cadena1)
let cadena2 = string.substring(10)
console.log(cadena2)

let concatenar = `${cadena1} ${cadena2}`
console.log(concatenar)