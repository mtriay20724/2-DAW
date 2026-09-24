let numeroAdivinar = 10;
let numJugador = parseInt(prompt("Introduzca un numero: "));
do{
    numJugador = parseInt(prompt("Introduzca un numero: "));
}while(numeroAdivinar !== numJugador);
console.log("Numero a endivinar: "+numeroAdivinar);
console.log("Enhorabuena el numero: "+numJugador+ " es el correcto");