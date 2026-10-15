function funcionalidadesString(){
    let valor = " Ho l a";
    let min = valor.toLocaleLowerCase().replace(" ", "");
    
    console.log(min);
    console.log(min.length);

}

function comprobacionGmail(){
    //Dada "usuario@dominio.es", extrae el nombre de usuario y el dominio, 
    // y comprueba que contiene una @ y termina en .es.
    let gmail = "usuario@dominio.es";

    if(gmail.includes("@") && gmail.endsWith(".es")){
        let partes = gmail.split("@");
        let usuario = partes[0];
        let dominio = partes[1];
        
        console.log("Usuario: "+usuario);
        console.log("Dominio: "+dominio);
    }else
        console.log("No es correcta");

}

function intercambiar(){
    //Reemplaza todas las apariciones de "a" por "4" en "banana".
    let valor = "banana";
    let resultado = valor.replaceAll("a", 4);
    /*for(const letra of valor){
        if(valor.includes("a")){
            resultado = valor.replace("a", 4);
        }
        
    }*/
    console.log(resultado);

}

function seguridadEban(){
    let eban = "ES9121000418450200051332";
    let seguridad = "*".repeat(eban.length -4) + eban.slice(-4);
}

function esPalindromo(frase){
    //Reto: función esPalindromo(frase) que ignore mayúsculas, espacios y 
    // tildes (pista: normalize).
    let pali = frase.toLocaleLowerCase().replaceAll(" ", "");
    pali = pali.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    console.log(pali);

}
//console.log(funcionalidadesString());
//console.log(comprobacionGmail());
//console.log(intercambiar());
console.log(esPalindromo("Hola cómó éstas"));