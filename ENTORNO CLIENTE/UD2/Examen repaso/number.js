function ejerciciosNumber(){

    /*Convierte "42px", "3.7", "" y "0x1F" con Number(), parseInt() y parseFloat(). 
    Antes de ejecutarlo, escribe qué crees que saldrá en cada caso y luego compruébalo.*/

    let a = "42px";
    let b = "3.8";
    let c = "0x1F"

    console.log("Number");
    console.log(Number(a)); 
    console.log(Number(b));
    console.log(Number(c));

    console.log("ParseInt");
    console.log(parseInt(a));
    console.log(parseInt(b));
    console.log(parseInt(c));

    console.log("ParseFloat");
    console.log(parseFloat(a));
    console.log(parseFloat(b));
    console.log(parseFloat(c));
}

function esDecimal(valor){
    /*Escribe una función esDecimal(valor) que devuelva true solo si el 
    valor es un número finito y no entero.*/

    if(!Number.isInteger(valor) && Number.isFinite(valor)){
        return true;
    }else
        return false;
        
}

function sacarValorConDecimales(){
    //Muestra 19.99 con 0, 1 y 3 decimales con toFixed, y comprueba qué tipo 
    //devuelve (typeof).
    let valor = 19.99;
    let val = valor.toFixed(2); 
    console.log(valor.toFixed(1)); // devueelve un string
    console.log(valor.toFixed(3));
    console.log(typeof(val)); // comprobacion
}


function binOctHex(){
    let num = 200;
    let binario = num.toString(2);
    //Pasa 200 a binario, octal y hexadecimal, y vuelve a convertir el binario resultante 
    // a decimal con parseInt(texto, base).
    console.log("Binario: "+num.toString(2));
    console.log("Octal: "+num.toString(8));
    console.log("Hexadecimal: "+num.toString(16));
    console.log("Binario a decimal: "+parseInt(binario, 2));
}


function reto(){
    //Reto: función que reciba una cadena y devuelva "entero", "decimal" o "no válido".
    let cadena = "hola";
    let numero = Number(cadena);
    if(Number.isInteger(numero)){
        return "Entero";
    }else if(Number.isNaN(numero)){
        return "no valido";
    }
    else
        return "decimal";
}
console.log(esDecimal(12));
console.log(sacarValorConDecimales());
console.log(ejerciciosNumber());
console.log(binOctHex());
console.log(reto());