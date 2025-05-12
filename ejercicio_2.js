
/*
EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.
*/


function nota_Final (nombre,carnet, examen,tareas, asistencia, investigacion){
    //porcentajes  • Examen =20%  • tareas = 40 • asistencia = 10% • investigación = 30%
    //calculo de la nota final
    let calculo_nota_final = (examen * 0.20) + (tareas*0.40) + (asistencia* 0.10) + (investigacion * 0.30);
 
    //mostrando resultados finales
    console.log( "\nnombre", nombre, "\ncarnet:", carnet, "\nNota final", calculo_nota_final);
 }
 //ingresamos datos a la funcion
 nota_Final("Gerardo", "CC19089", 8.5, 10, 12, 9.5);
 nota_Final("Maria", "AP19010", 9.5, 9, 10, 10);