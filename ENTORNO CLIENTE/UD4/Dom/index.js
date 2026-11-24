let inicio = document.getElementById("empezar");
let parar = document.getElementById("stop");
let resetear = document.getElementById("reset");

let botonInicio = false;


function iniciar(){
    botonInicio = true;

    if(botonInicio == true){
        const tiempo = new Date();
        inicio.textContent = tiempo.toLocaleDateString();
    }
    setInterval(inicio, 1000);
}

function pararTiempo(){
    botonInicio = false;

    if(botonInicio == false){
        
    }
}