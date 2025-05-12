/*
EJERCICIO 3:
CATEGORIA AUMENTO
A 15%
B 30%
C 10%
D 20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.
*/

let nombre;
let salario;
let descuento;
let aumento_salarial;


function aumento_categorias(categoria,nombre,salario) {
    switch (categoria) {
        case "A":
            descuento = 0.15;

            break;
        case "B":
            descuento = 0.30;

            break;
        case "C":
            descuento = 0.10;

            break;

        case "D":
            descuento = 0.20;
        
            break;

        default:
            console.log("Categoria no existente")
            break;
    }

    aumento_salarial = salario + (descuento * salario);
    console.log(`\nNombre:${nombre} \nsalario: $${salario} \ncategoria: ${categoria} \nAumento Salarial: $${aumento_salarial}`);

}

//ingrese los datos a la funcion, en el orden de 
//categoria - nombre - salario
 aumento_categorias("B","Gerardo", 1000);