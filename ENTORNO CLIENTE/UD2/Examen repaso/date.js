function fechaActual(){
    let date1 = new Date();
    console.log(date1);
}

fechaActual();

function sumarDias(){
    //Escribe sumarDias(fecha, n) y comprueba qué pasa al sumar 20 días al 15 de febrero.
    let date = new Date("2026/02/15");
    let sumarDias = 20;

    date.setDate(date.getDate()+ sumarDias);

    console.log(date);
}

function diasRestantesCumple(){
    let date = new Date("2027/06/05");
    let date1 = new Date();
    date = date - date1;
    let dias  = date / (1000 *60 *60 * 24);

    console.log(dias);
}
diasRestantesCumple();


function mostrarFecha() {
    let fecha = new Date("2026-10-14");

    let diaSemana = fecha.toLocaleDateString("es-ES", {
        weekday: "long"
    });

    let mes = fecha.toLocaleDateString("es-ES", {
        month: "long"
    });

    console.log("Día de la semana: " + diaSemana);
    console.log("Mes: " + mes);
}

mostrarFecha();


function mostrarFechas() {
    let fecha = new Date();

    let espanol = new Intl.DateTimeFormat("es-ES").format(fecha);
    let ingles = new Intl.DateTimeFormat("en-US").format(fecha);
    let japones = new Intl.DateTimeFormat("ja-JP").format(fecha);

    console.log("Español: " + espanol);
    console.log("Inglés: " + ingles);
    console.log("Japonés: " + japones);
}

mostrarFechas();
