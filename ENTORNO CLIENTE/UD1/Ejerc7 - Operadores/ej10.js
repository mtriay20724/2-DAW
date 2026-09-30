let numeroSecreto = Math.floor(Math.random() * 10)+1;
let intentos;

while(intentos !== numeroSecreto){
    intentos = Number(prompt("Adivina el numero entre 1 y 10"));
    if(intentos > numeroSecreto){
        alert("El numero es menor");
    }else{
        alert("El numero es mayor");
    }
}
console.log("ENHORABUENA era el numero: "+numeroSecreto);