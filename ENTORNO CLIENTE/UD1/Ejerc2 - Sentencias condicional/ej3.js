/*3. Número par o impar
👉 Escribe un programa que:

Guarde un número en una variable.
Use un if-else para mostrar si es par o impar.*/

let nuemero = parseInt(prompt("Introduce un numero: "));

if(nuemero % 2 == 0)
    console.log("Es par");
else
    console.log("Es impar");