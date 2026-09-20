/*6. Día de la semana
👉 Escribe un programa que:

Guarde un número del 1 al 7 en una variable.
Use switch para mostrar el día de la semana correspondiente.
1 → Lunes
2 → Martes
3 → Miércoles
4 → Jueves
5 → Viernes
6 → Sábado
7 → Domingo*/

let numDia = parseInt(prompt("Introduce un numero del 1 al 7: "));

switch(numDia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
}