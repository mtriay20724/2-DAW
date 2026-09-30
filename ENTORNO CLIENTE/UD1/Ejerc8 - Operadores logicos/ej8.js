let dia = prompt("Ingrese un dia de la semana: ");
dia.toLocaleLowerCase();

if(dia === 'lunes' || dia === 'martes' || dia === 'miercoles' || dia === 'jueves' || dia === 'viernes'){
    console.log("Dia laborable");
}else{
    console.log("Dia no laborable");
}