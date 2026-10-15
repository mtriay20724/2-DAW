function ejercicio1(edad, autorizacion){
    if(edad >= 18 && autorizacion == true)
        console.log("Acceso permitido");

    else if(edad < 18){
        console.log("Acceso denegado: menor de edad");
    }
    else{
        console.log("Acceso denegado: fala autorizacion");
    }
        
}
function ejercicio2(){
    const numeros = [12, 7, 24, 3, 18, 9, 30];

    for(const num of numeros){
        console.log(num);
    }
    for(const num of numeros){
        if(num % 2 == 0)
            console.log("Num par: "+num);
    }
    let cont = 0;
    for(const num of numeros){
        if(num >= 15){
            console.log("Num mayores que 15: "+num);
            cont++;
        }
    }

    let numA = numeros[0];
    for(let i = 1; i < numeros.length; i++){
        numA = numA +numeros[i];
    }
    console.log("Suma de todos los valores dentro del array: "+numA);

    console.log("Contador de numeros mayor de 15: "+cont);
}

function ejercicio3(){
    let numDado = Math.floor(Math.random() * (6 - 1 +1));
    alert(numDado);
    
    if(confirm("Quieres volver a tirar?")){
        let numDado = Math.floor(Math.random() * (6 - 1 +1));
    }else{
        console.log("Adios");
    }
}

function ejercicio4(){
    let date = new Date(prompt("Introduce la fecha de su nacimiento: "));
    
    if(date !==NaN){
        let ahora = new Date();
        let anyo = date.getFullYear();
        let edad = ahora.getFullYear() - anyo;

        parseInt(date);
        console.log("Data: "+date);
        console.log("Año: "+anyo);
        alert("Edad: "+edad);
        //console.log("Edad: "+edad);
    }else
        console.log("ERROR");
}

function ejercicio5(){
    let nombre = prompt("Introduce un nombre para una cookie: ");
    let usuario = document.cookie() = nombre;

    alert(usuario);
    if(confirm("Deseas borrar la cookie?")){
        usuario = document.cookie();
        console.log("cookie borrada");
    }else{
        console.log("Cookie guardada");
    }
}
ejercicio1(18, false);
ejercicio2();
ejercicio3();
ejercicio4();
ejercicio5();