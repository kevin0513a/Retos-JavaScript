/*Reto 2: Contador de Vocales
Haz una función que reciba un string y cuente cuántas vocales contiene.*/

let palabra = "Hola Mundo";
let vocales = "aeiou";
let contadorVocales = 0;

for(let i = 0; i < palabra.length; i++){
    if(vocales.includes(palabra[i].toLowerCase())){
        contadorVocales++;
    }
}
console.log("Cantidad de vocales en la palabra '" + palabra + "': " + contadorVocales);