let caja = document.getElementById("caja");

var offsetX, offsetY;

caja.addEventListener("touchstart", (e)=>{
    e.preventDefault();
    console.log("tocas el div");
    caja.style.background = "green";

    offsetX = e.touches[0].clientX - caja.offsetLeft;
    offsetY = e.touches[0].clientY - caja.offsetTop;
});

caja.addEventListener("touchend", (e)=>{
    e.preventDefault();
    console.log("levantas el dedo");
    caja.style.background = "blue";
});

caja.addEventListener("touchmove", (e)=>{
    let toque = e.touches[0];

    console.log("X: "+toque.clientX+ " Y: "+toque.clientY);
    
    caja.style.top = `${toque.clientY - offsetY}px`;
    caja.style.left = `${toque.clientX- offsetX}px`;
})

//DETECTAR
