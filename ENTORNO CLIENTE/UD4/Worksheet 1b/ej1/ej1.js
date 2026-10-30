const colores = ["rojo", "azul", "amarillo", "verde"];

function colorASeguir(){
    let indice = Math.floor(Math.random() * colores.length);
    colorAleatorio = colores[indice];
    document.getElementById("colorAleatorio").textContent = colorAleatorio;
}

colorASeguir();

document.getElementById("rojo").addEventListener("click", function() {
    realizarClick("rojo");
});
document.getElementById("verde").addEventListener("click", function(){
    realizarClick("verde");
});
document.getElementById("amarillo").addEventListener("click", function(){ 
    realizarClick("amarillo");
});
document.getElementById("azul").addEventListener("click", function(){
    realizarClick("azul");
});

function realizarClick(color){
    if(color === colorAleatorio){
        alert("Color Correcto");
    }else{
        alert("Color Erroneo");
    }
}



