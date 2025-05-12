/*
EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario.
*/

let precio_coche;
let descuento_compra;
let descuento;

function tienda_coches (nombre_coche){

    switch (nombre_coche) {
        case "FORD FIESTA":
            descuento = 0.05;
            precio_coche = 10000;
    
            break;
        case "FORD FOCUS":
            descuento = 0.10;
            precio_coche = 21000;
    
            break;
        case "FORD ESCAPE":
            descuento = 0.20;
            precio_coche = 30000;
    
            break;
    
        default:
            console.log("¡El nombre del coche ingresado no cuenta con descuento!")
            break;
    }

    descuento_compra = precio_coche - (descuento * precio_coche);
    console.log(`Coche: ${nombre_coche}`, `\nNuevo valor del coche con el descuento:  $${descuento_compra}`);
}

//ingrese el nombre del coche que desea comprar para obtener descuento
tienda_coches("FORD ESCAPE")