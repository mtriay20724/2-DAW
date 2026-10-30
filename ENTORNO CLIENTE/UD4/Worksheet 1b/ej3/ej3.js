let colores = ["azul", "verde", "amarillo", "rojo"];

function generarColorAleatorio(){
    let indice = Math.floor(Math.random()* colores.length);
    colorAleatorio = colores[indice];
    document.getElementById("colorAleatorio").textContent = colorAleatorio;
}

generarColorAleatorio();

function parpadearColor(){
    for(let i = 0; i< colores.length;i++){
        if(colorAleatorio == colores[i]){
            colorAleatorio = setTimeout(parpadearColor, 5);
        }
    }
}
parpadearColor();