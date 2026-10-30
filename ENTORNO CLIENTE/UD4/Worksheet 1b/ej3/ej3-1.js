let width = 20;
document.getElementById("carrera").addEventListener("click", ()=>{
    width+=100;
    document.getElementById("contenedor").style.width = width+"px";
})

document.getElementById("disminuir").addEventListener("click", ()=>{
    width-=100;
    document.getElementById("contenedor").style.width = width+"px";
})

