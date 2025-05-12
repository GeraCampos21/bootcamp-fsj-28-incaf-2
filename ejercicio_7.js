/*
EJERCICIO 7:
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador = 0;
let negativos = 0;
let positivos = 0;
let multiplosDe15 = 0;
let sumaPares = 0;

function pedirNumero() {
  if (contador < 10) {
    rl.question(`Ingrese el número ${contador + 1}: `, function (input) {
      const num = parseInt(input);

      if (isNaN(num)) {
        console.log("Por favor, ingrese un número válido.");
      } else {
        if (num < 0) negativos++;
        if (num > 0) positivos++;
        if (num % 15 === 0) multiplosDe15++;
        if (num % 2 === 0) sumaPares += num;
        contador++;
      }

      pedirNumero(); // Llamamos de nuevo hasta que se completen los 10
    });
  } else {
    console.log("\n--- Resultados ---");
    console.log(`Cantidad de valores negativos: ${negativos}`);
    console.log(`Cantidad de valores positivos: ${positivos}`);
    console.log(`Cantidad de múltiplos de 15: ${multiplosDe15}`);
    console.log(`Suma de números pares: ${sumaPares}`);
    rl.close();
  }
}


pedirNumero();
