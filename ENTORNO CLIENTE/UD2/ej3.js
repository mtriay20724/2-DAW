//Ej1
const date1 = new Date();
console.log(date1);

//Ej2
const date2 = new Date("2027/01/01 12:00:00");
console.log(date2);

//Ej3
console.log(date2.getFullYear());
console.log(date2.getMonth());
console.log(date2.getDate());
console.log(date2.getDay());
console.log(date2.getHours());
console.log(date2.getMinutes());
console.log(date2.getSeconds());

//Ej4
console.log(date2.toDateString());
console.log(date2.toTimeString());

//Ej5
const date3 = new Date("2025/06/05");
const date4 = new Date("2022/04/10");

function sumarFechas(date1, dias){
    const dataFinal = date1.setDate(date1.getDay()) + dias;
    console.log(dataFinal);
}
sumarFechas(date3, date4.getDate());

//Ej6
let finAño = new Date(2026, 11, 31);
let diferencia = finAño - date1;
diferencia = (diferencia / 1000) / 3600;

//Ej7
if(date1 < date2){
    console.log("La fecha 2: "+date2+" es mas antigua que la 1: "+date1);
}else{
    console.log("La fecha 1: "+date1+" es anterior a la 2: "+date2)
}

//Ej8
//Crea una función que, dado un año y un mes, 
//devuelva qué día de la semana fue el primer día de ese mes.
date5 = new Date("2022/02/06");
date6 = new Date("2026/11/7");

function primerDiaSemana(year, mes){
    let dia = new Date(year, mes, 1);
    let opcion1 = {weekday: 'long', month: 'long'}
    
    return dia.toLocaleDateString("es-ES", opcion1);

}
console.log(primerDiaSemana(date5.getFullYear(), date6.getMonth()));

//Ej9
//Convierte la fecha actual a formato ISO (.toISOString()).
console.log(date1.toISOString());

//Ej10
//Muestra la misma fecha en hora local y en UTC.
console.log(date1.toLocaleString());
console.log(date1.toUTCString());

//Ej11
/*Escribe una función que reciba un objeto Date y 
devuelva un string con el formato:
DD/MM/YYYY HH:mm:ss*/
let data9 = new Date("1999/08/02 10:12:11");

function dataFormateada(date){
    const data1 = new Date(date);
    console.log(data1.getDate(), data1.getMonth(), data1.getFullYear(), data1.getHours(), data1.getMinutes(), data1.getMinutes());
}

console.log(dataFormateada(date9));

