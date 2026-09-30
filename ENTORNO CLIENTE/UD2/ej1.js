// Ejercicio 1.1.1
let var1 = "123";
let var2 = "3.14";
let var3 = "abc";

console.log(Number(var1));
console.log(parseInt(var2));
console.log(parseFloat(var3));
console.log("<br>");
console.log("<br>");
//Ej 1.1.2

function esEntero(num){
    let resultado = false;
    if(Number.isInteger(num)){
        resultado = true;
    }
    return resultado;
}

esEntero(3);
console.log("<br>");
console.log("<br>");
//Ej 1.1.3

console.log(Number.isNaN(NaN));
console.log(Number.isNaN("hello"));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(0/0));
console.log(Number.isNaN(parseInt("abc")));
console.log("<br>");
console.log("<br>");
//Ej 1.1.4

console.log(Number.isFinite(1/0));
console.log("<br>");
console.log("<br>");
// Ej 1.2.1
let pi = 3.141592;
console.log(pi.toFixed(2)+"<br>");
console.log(pi.toFixed(4)+"<br>");
console.log(pi.toFixed(6)+"<br>");

//Ej 1.2.2
//Convierte 123456 a notación científica con .toExponential(2).

let num1 = 123456;

console.log(num1.toExponential(2));
console.log("<br>");
// Ej 1.2.3
//Conversión a string con base
let num2 = 255;

const binario = num2.toString(2);
const octal = num2.toString(8);
const hexadecimal = num2.toString(16);
console.log("Binario: "+binario+"<br>Octal: "+octal+"<br>"+"Hexadecimal: "+hexadecimal+"<br>");

//Ej 1.2.4
//Usa .toPrecision para representar 123.456789 con 4 y 7 cifras significativas.

num3 = 123.456789

console.log(num3.toPrecision(4));
console.log(num3.toPrecision(7));

//Ej 1.3

/*Nivel 3*/
function validarNumero(valor) {
    let numero = Number(valor);

    if (valor === "" || Number.isNaN(numero)) {
        return "No es un número válido";
    }

    if (Number.isInteger(numero)) {
        return "Es un número válido y entero";
    } else {
        return "Es un número válido y decimal";
    }
}

console.log(validarNumero("25"));
console.log(validarNumero("3.14"));
console.log(validarNumero("hola"));
console.log(Number.isNaN("hola"));
console.log(Number.isNaN(Number("hola")));
