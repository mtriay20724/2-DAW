let numero = Number(prompt("Introduce un numero: "));
let factorial = 1;

for(let i = 1; i <= numero; i++){
    factorial *= i;
}

console.log(factorial);