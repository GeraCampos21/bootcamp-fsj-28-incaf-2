
/*
EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo. 
*/

function calculo_numeros(num1, num2) {
    if(num1>num2){
        console.log("El mayor es", num1);
     }else{
        console.log("El mayor es:", num2);
     }
 }
 
 //ingrese los dos numeros aqui, y le dira el mayor de ambos
 calculo_numeros(10,8);