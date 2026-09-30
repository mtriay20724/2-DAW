let usuario = prompt("Ingrese su usuario: ");
let contraseña = prompt("Ingrese su contraseña: ");

if(usuario=== 'admin' && contraseña === '12345' || usuario=== 'invitado'){
    console.log("Bienvenido");
}else{
    console.log("ERROR");
}