/*Ejercicio 3: Mayor de tres números
Objetivo: Practicar operadores de comparación y condicionales.
Enunciado: Pide al usuario tres números e indica cuál es el mayor.

let a = Number(prompt("Número 1"));
let b = Number(prompt("Número 2"));
let c = Number(prompt("Número 3"));
// Escribe un condicional para encontrar el mayor*/

let a = Number(prompt("Número 1: "));
let b = Number(prompt("Número 2: "));
let c = Number(prompt("Número 3: "));

if(a > b && a > c){
    console.log(a+" (a)es el mayor");
}else if(b > a && b > c){
    console.log(b+" (b)es el mayor");
}else if(a == b && a == c){
    console.log("Todos son iguales");
}else
    console.log(c+" (c)es el mayor");