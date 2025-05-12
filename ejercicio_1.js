

//Ejercicio 1 Crear una función que en base a la edad que ingreso el usuario devolver un mensaje si la persona es mayor de edad o no. 
// Utilizar para la condición el operador ternario.

function edad_usuario (edad){
    let resultado = edad >=18 ? `Edad: ${edad} \nEs mayor de edad `: `Edad: ${edad} \nEs menor de edad`;
    console.log(resultado);
}

//aqui ingresa la edad que desea conocer si es mayor o no de edad
edad_usuario(17);

