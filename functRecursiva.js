/*Reto 5: Función Recursiva
Cree una función Recursiva que reciba un número y los arroje de manera inversa.*/

function funcionRecursiva(numero) {
  if (numero === 1) console.log(numero);
  else {
    console.log(numero);
    funcionRecursiva(numero - 1);
  }
}

funcionRecursiva(3);
