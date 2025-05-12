/*
EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario.
*/
function tabla_multiplicar (tabla){
    console.log(`Tabla del: ${tabla}\n`)
    for(let i = 1; i<11; i++) {
        console.log(`${tabla} X ${i} = ${tabla*i}`)
    }
}

//aqui ingresa la tabla que desea desarrollar
tabla_multiplicar(8);