const circulo = document.getElementById("circulo");

let verde = false;


tiempoAleatorio();

function tiempoAleatorio(){
    let segundos = (Math.random() * (5 - 2)+2);
    setTimeout(cambioColor, segundos * 1000);
}

function cambioColor(){
    circulo.style.backgroundColor = "green";
    verde = true;
}

function clickCirculo(){
    if(verde == true){
        alert("¡Reflejos rápidos!");
    }else{
        alert("Demasiado pronto");
    }
}

circulo.addEventListener("click", clickCirculo);