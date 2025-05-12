/*
EJERCICIO 10:
Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web.
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirEdades(turno, cantidad, callback) {
  let suma = 0;
  let contador = 0;

  function pedir() {
    if (contador < cantidad) {
      rl.question(`Edad del estudiante ${contador + 1} del turno ${turno}: `, (input) => {
        let edad = parseInt(input);
        if (isNaN(edad) || edad <= 0) {
          console.log("Edad inválida, intente de nuevo.");
        } else {
          suma += edad;
          contador++;
        }
        pedir();
      });
    } else {
      callback(suma / cantidad);
    }
  }

  pedir();
}

pedirEdades("Mañana", 5, (promManana) => {
  pedirEdades("Tarde", 6, (promTarde) => {
    pedirEdades("Noche", 11, (promNoche) => {
      console.log(`\nPromedio Mañana: ${promManana.toFixed(2)}`);
      console.log(`Promedio Tarde: ${promTarde.toFixed(2)}`);
      console.log(`Promedio Noche: ${promNoche.toFixed(2)}`);

      const mayor = Math.max(promManana, promTarde, promNoche);
      const turnoMayor =
        mayor === promManana
          ? "Mañana"
          : mayor === promTarde
          ? "Tarde"
          : "Noche";

      console.log(`El turno con mayor promedio es: ${turnoMayor}`);
      rl.close();
    });
  });
});
