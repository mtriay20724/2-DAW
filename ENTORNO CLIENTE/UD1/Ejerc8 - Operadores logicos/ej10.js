
let usuario, contraseña;

while (usuario !== "admin" && contraseña !== "1234"){
    usuario = prompt("Usuario:");
    contraseña = prompt("Contraseña:");

    if (usuario !== "admin" && contraseña !== "1234"){
        alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
}

console.log("¡Acceso permitido!");