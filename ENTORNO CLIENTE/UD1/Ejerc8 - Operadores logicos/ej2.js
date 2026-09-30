let matematicas = prompt("Aprobo matematicas? (si/no): ");
let fisica = prompt("Aprobo fisca? (si/no): ");
let quimica = prompt("Aprobo quimica? (si/no): ");

if(matematicas === 'si' || fisica === 'si' || quimica === 'si'){
    console.log("Puede pasar al siguiente nivel")
}else{
    console.log("No puedes passar");
}