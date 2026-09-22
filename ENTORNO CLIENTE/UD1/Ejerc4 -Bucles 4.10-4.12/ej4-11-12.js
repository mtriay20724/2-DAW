/*
let numCeldas = parseInt(prompt("Introduzca un numero de celdas: "));
let altura = parseInt(prompt("Introduzca su altura: "));
let anchura = parseInt(prompt("Introduzca su anchura: "));

document.write("<table border= '0' cellspacing = '2' bgcolor='black' width = "+numCeldas * anchura+">");
document.write("<tr bgcolor = 'white' height= "+altura+">");
for(let i = 0; i< numCeldas; i++){
    document.write("<td width = "+anchura+"> &nbsp; </td>");
}
document.write("</tr>");
document.write("</table>");
*/

let numCeldas = parseInt(prompt("Introduzca un numero de celdas: "));
let altura = parseInt(prompt("Introduzca su altura: "));
let anchura = parseInt(prompt("Introduzca su anchura: "));

document.write("<table border= '0' cellspacing = '2' bgcolor='black' width = "+numCeldas * anchura+">");
document.write("<tr height= "+altura+">");
for(let i = 0; i< numCeldas; i++){
    if(i % 2 == 0){
        document.write("<td width = "+anchura+" bgcolor = 'black'> &nbsp; </td>");
    }else{
        document.write("<td width = "+anchura+" bgcolor = 'white'> &nbsp; </td>");
    }
    
}
document.write("</tr>");
document.write("</table>");