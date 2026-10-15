function reloj(){
    let date = new Date();
    let horas = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getSeconds();

    if (horas < 10) {
        horas = "0" + horas;
    }

    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    document.getElementById("hora").textContent =
        horas + ":" +minutos + ":" + segundos;
    

    let fecha = date.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
    });

    document.getElementById("fecha").textContent = fecha;
}

function pararReanudar() {
    if (parado == false) {
        clearInterval(intervalo);
        parado = true;
        document.getElementById("boton").textContent = "Reanudar reloj";
    } else {
        intervalo = setInterval(reloj, 1000);
        parado = false;
        document.getElementById("boton").textContent = "Parar reloj";
    }
}

reloj();

// Actualizarlo cada segundo
setInterval(reloj, 1000);