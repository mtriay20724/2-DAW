/*Ejercicio 2: Determinar par o impar
Objetivo: Practicar operadores de módulo (%) y condicionales.
Enunciado: Pide al usuario un número e indica si es par o impar.

let numero = Number(prompt("Ingrese un número"));
// Usa un condicional para determinar si es par o impar*/

let numUno = Number(prompt("Ingrese un numero: "));

if(numUno % 2 == 0){
    console.log("El numero "+numUno+" es par");
}else
    console.log("El numero "+numUno+" es impar");