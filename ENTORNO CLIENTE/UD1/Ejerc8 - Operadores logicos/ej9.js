let edad = Number(prompt("Ingrese su edad: "));
let nacionalidad = prompt("Ingrese su nacionalidad: ");

if(edad >= 18 && nacionalidad !== null){
    console.log("Puede votar");
}else{
    console.log("No puede votar");
}