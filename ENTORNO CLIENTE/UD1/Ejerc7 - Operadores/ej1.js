/*Ejercicio 1: Suma de números
Objetivo: Practicar operadores aritméticos.
Enunciado: Crea un programa que pida al usuario dos números y muestre la suma, resta, multiplicación y división de ambos.

let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));

// Tu código aquí para mostrar suma, resta, multiplicación y división */

let num1 = Number(prompt("Ingrese el primer número: "));
let num2 = Number(prompt("Ingrese el segundo número: "));

const multiplicacion1 = num1 * num2;
const suma1 = num1 + num2;
if(num1< num2){
    let resta1 = num2 - num1;
    let division1 = num2 / num1;
    console.log("Resta = "+resta1);
    console.log("Division = "+division1);

}else{
    let resta1 = num1 - num2;
    let division1 = num1 / num2;
    console.log("Resta = "+resta1);
    console.log("Division = "+division1);
}

console.log("Suma = "+suma1);
console.log("Multiplicacion = "+multiplicacion1);
