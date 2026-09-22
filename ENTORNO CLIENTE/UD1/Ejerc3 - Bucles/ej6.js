/*6. Pedir contraseña
👉 Escribe un programa que:

Pida un valor (puede ser una variable simulando entrada).
Use un bucle do-while para repetir hasta que la contraseña sea "1234".
Muestra un mensaje "Contraseña correcta" cuando termine.*/

let valor

do{
    valor = parseInt(prompt("Introduce un valor: "));
}while(valor !== 1234);

console.log("Contraseña correcta");
