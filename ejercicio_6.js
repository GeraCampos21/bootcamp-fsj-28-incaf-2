/*
EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%.
*/

function calcularDescuento(origen_viaje, destino_viaje, precio_viaje) {
    let descuento = 0;
  
    if (origen_viaje.toLowerCase() === "palma") {
      switch (destino_viaje.toLowerCase()) {
        case "la costa del sol":
          descuento = 0.05;
         
          break;
        case "panchimalco":
          descuento = 0.10;
          
          break;
        case "puerto el triunfo":
          descuento = 0.15;
        
          break;
        default:
            console.log("Ha ingresado datos erroneos") 
      }
    }
     boleto_con_descuento = precio_viaje - (descuento*precio_viaje);
     console.log(`Destino: ${destino_viaje} \nPrecio: ${precio_viaje} \nCosto final con descuento: ${boleto_con_descuento}`);
  }
  
  // Aqui ingresa el destino al cual quiere viajar, asi como el precio del viaje:
calcularDescuento("Palma", "panchimalco", 200);
  




















