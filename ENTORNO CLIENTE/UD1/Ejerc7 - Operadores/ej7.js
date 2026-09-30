let num = Number(prompt("Ingrese un numero: "));

for(let i = num; i<= 0; i--){
    let divisible = num % 2;
    if(divisible == 0){
        console.log("Es divisible");
    }
}