/*Crea una mini app en consola que permita registrar estudiantes, 
mostrar su información y calcular su promedio.*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let estudiantes = [];

function agregarEstudiante() {
  rl.question("Nombre del estudiante: ", function (nombre) {
    rl.question("Apellido del estudiante ", function (apellido) {
      rl.question("Edad del estudiante: ", function (edad) {
        rl.question("Asignatura correspondiente: ", function (asignatura) {
          rl.question("Nota 1: ", function (nota1) {
            rl.question("Nota 2: ", function (nota2) {
              rl.question("Nota 3: ", function (nota3) {
                let notas = [
                  parseFloat(nota1),
                  parseFloat(nota2),
                  parseFloat(nota3),
                ];
                let promedio = calcularPromedio(notas);
                let aprobado = promedio >= 3.0;

                let estudiante = {
                  nombre: nombre,
                  apellido: apellido,
                  edad: edad,
                  asignatura: asignatura,
                  nota: notas,
                  promedio: promedio,
                  aprobado: aprobado,
                };
                estudiantes.push(estudiante);
                console.log(
                  "\n✅ Estudiante agregado con éxito:\n",
                  estudiante
                );
                rl.close(); // Cierra el programa
              });
            });
          });
        });
      });
    });
  });
}
function calcularPromedio(notas) {
  suma = 0;
  for (let nota of notas) {
    suma += nota;
  }
  return (suma / notas.length).toFixed(2);
}

agregarEstudiante();
