/*. El mayor de dos números
👉 Escribe un programa que:

Guarde dos números en variables.
Use if-else para mostrar cuál de los dos es mayor.
Si son iguales, muestra "Son iguales".*/

let num1 = parseInt(prompt("Introduce un numero: "));
let num2 = parseInt(prompt("Introduce otro: "));

if(num1 > num2)
    console.log("El numero mayor es el num1 = "+num1);
else if(num2> num1){
    console.log("El numero mayor es el num2 = "+num2);
}
else
    console.log("Son iguales");
