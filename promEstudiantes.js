/*Crea una mini app en consola que permita registrar estudiantes, 
mostrar su información y calcular su promedio.*/

// Le permitimos tomar los datos de los estudiantes -->
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// En este arreglo irá la informacion de los estudiantes -->
let estudiantes = [];

function mostrarMenu() {
  console.log("*****MENÚ*****");
  console.log("1) Agregar un estudiante");
  console.log("2) Mostrar lista de estudiantes");
  console.log("3) Salir del programa");
  rl.question(
    "Querido usuario seleccione la opción que desea realizar : ",
    function (seleccion) {
      if (seleccion === "1") {
        agregarEstudiante();
      } else if (seleccion === "2") {
        mostrarEstudiantes();
        mostrarMenu();
      } else if (seleccion === "3") {
        console.log("Has salido exitosamente del programa!");
        rl.close();
      } else {
        console.log("Función noo válida");
        mostrarMenu();
      }
    }
  );
}
mostrarMenu();

function mostrarEstudiantes() {
  if (estudiantes.length === 0) {
    console.log("⚠️ No hay estudiantes registrados todavía.");
  } else {
    console.log("📋 Lista de estudiantes:\n");
    estudiantes.forEach((est, index) => {
      console.log(`🧑 Estudiante #${index + 1}`);
      console.log(`Nombre: ${est.nombre} ${est.apellido}`);
      console.log(`Edad: ${est.edad}`);
      console.log(`Asignatura: ${est.asignatura}`);
      console.log(`Notas: ${est.nota.join(", ")}`);
      console.log(`Promedio: ${est.promedio}`);
      console.log(`Estado: ${est.aprobado ? "✅ Aprobado" : "❌ Reprobado"}`);
      console.log("-----------------------------");
    });
  }
}

//Creamos una funcion que nos permita pedir los datos de cada estudiante -->
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
                //Llamamos la funcion calcularPromedio -->
                let promedio = calcularPromedio(notas);
                let aprobado = promedio >= 3.0;

                let estudiante = {
                  nombre: nombre,
                  apellido: apellido,
                  edad: parseInt(edad),
                  asignatura: asignatura,
                  nota: notas,
                  promedio: promedio,
                  aprobado: aprobado,
                };
                //Añadimos el estudiante al final del arreglo -->
                estudiantes.push(estudiante);
                console.log(
                  "\n✅ Estudiante agregado con éxito:\n",
                  estudiante
                );
                mostrarMenu();
              });
            });
          });
        });
      });
    });
  });
}
function calcularPromedio(notas) {
  let suma = 0;
  for (let nota of notas) {
    suma += nota;
  }
  return (suma / notas.length).toFixed(2);
}
