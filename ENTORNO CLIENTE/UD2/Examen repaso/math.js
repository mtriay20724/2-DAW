/*function ej1(){
    //Pide un número y muestra su valor absoluto, su raíz cuadrada 
    //(controlando que no sea negativo) y su cubo.
    let num = parseInt(prompt("Introduce un numero: "));

    let absoluto = Math.abs(num);
    console.log("ABSOLUTO: "+absoluto);
    
    let raiz = Math.sqrt(num);
    if(raiz < 0){
        console.log("Raiz negativa");
    }else{
        console.log("Raiz: "+raiz);
    }

    let cubo = Math.pow(num, 3);
    console.log("Cubo: "+cubo);
}*/

function ordenar(){
    //Dado [8, -2, 15, 4, 0], muestra el mayor y el menor sin usar bucles 
    // (pista: spread ...).
    
    let cadena = [8, -2, 15, 4, 0];
    let max = Math.max(...cadena);
    let min = Math.min(...cadena);

    console.log("El mayor es: "+max);
    console.log("El menor es: "+min);
}

function aleatorioEntre(min, max){
    /*Escribe aleatorioEntre(min, max) que devuelva un entero entre ambos incluidos, 
    y pruébala 10 veces.*/

    for(let i = 1; i <=10; i++){
        let numRandom = Math.floor(Math.random() * (max - min +1)); //Math.floor redondea
        console.log("NUM"+i+" : "+numRandom);
    }
}
function areaCirculo(){
    //Calcula el área y el perímetro de un círculo dado el radio, con 2 decimales.
    let radio = 13;
    let perimetro = Math.pow(radio, 2);
    let area = Math.PI * perimetro;

    console.log("Area: "+area.toFixed(2));
    console.log("Perimetro: "+perimetro);
}

function radiantes(){
    //Convierte 30°, 90° y 180° a radianes y calcula su seno y coseno. 
    //Redondea para que sin(180°) no salga como 1.2246e-16.
    let angulos = [30, 90, 180];

    const pi = Math.PI;

    const rad30  = 30  * (pi / 180); // 0.5235... (π/6)
    const rad90  = 90  * (pi / 180); // 1.5707... (π/2)
    const rad180 = 180 * (pi / 180); // 3.1415... (π)
    
}

function reto(){
    //Reto: simula 100 tiradas de un dado y cuenta cuántas veces sale cada cara.
    let cara1 = 0;
        let cara2 = 0;
        let cara3 = 0;
        let cara4 = 0;
        let cara5 = 0;
        let cara6 = 0;
    for (let i = 1; i <= 100; i++){
        let numDado = Math.floor(Math.random() * (6 - 1 +1));
        switch(numDado){
            case 1:
                cara1++;
                break;
            case 2:
                cara2++;
                break;
            case 3:
                cara3++;
                break;
            case 4:
                cara4++;
            case 5:
                cara5++;
            case 6:
                cara6++;
                break;
        }

        console.log(numDado+"\n");
        
    }

    console.log("Cuantas veces ha salido en cada cara");
    console.log("Cara1: " +cara1);
    console.log("Cara 2: "+cara2);
    console.log("Cara 3: "+cara3);
    console.log("Cara 4: "+cara4);
    console.log("Cara 5: "+cara5);
    console.log("Cara 6: "+cara6);
}
console.log(reto());
//console.log(areaCirculo());
//console.log(aleatorioEntre(1, 10));
//console.log(ordenar());
//console.log(ej1());