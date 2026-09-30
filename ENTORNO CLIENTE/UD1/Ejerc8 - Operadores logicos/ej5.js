let edad = Number(prompt("Introduce su edad: "));
let tutor = prompt("Tiene un tutor presente? (si / no): ");

if(edad >= 18 || edad <18 && tutor === 'si'){
    console.log("Puede acceder");
}else{
    console.log("No puede acceder");
}