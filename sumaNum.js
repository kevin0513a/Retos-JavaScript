/*Reto 1: Suma de Números Pares e Impares
Crea una función que reciba un arreglo de números enteros y devuelva un 
objeto con la suma de los números pares y la suma de los impares.*/

console.log("Suma de números Pares e impares -->");

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumaPares = 0;
let sumaImpares = 0;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        sumaPares += numeros[i];
    } else{
        sumaImpares += numeros[i];
    }
}

console.log("Suma de números pares: " + sumaPares);
console.log("Suma de números impares: " + sumaImpares);