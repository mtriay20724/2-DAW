/*Ejercicio 4: Tabla de multiplicar
Objetivo: Practicar bucles y operadores.
Enunciado: Pide un número y muestra su tabla de multiplicar del 1 al 10.

let num = Number(prompt("Ingrese un número"));
// Usa un bucle for para mostrar la tabla de multiplicar*/

let v = parseInt(prompt("Introduce un numero: "));

for(let i = 1; i <= 10; i++){
    const result = v * i;
    console.log(i+"x"+v+"="+result);
}