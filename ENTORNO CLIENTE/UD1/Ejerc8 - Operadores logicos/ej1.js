let edad = Number(prompt("Ingrese su edad: "));
let permiso = prompt("¿Tiene permiso de sus padres? (si/no): ");

if(permiso == 'si' && edad >= 18){
    console.log("Puede acceder");
}else{
    console.log("NO puede acceder");
}