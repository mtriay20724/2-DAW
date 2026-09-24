let numCeldas = parseInt(prompt("Introduzca un numero de celdas: "));
let altura = parseInt(prompt("Introduzca su altura: "));
let anchura = parseInt(prompt("Introduzca su anchura: "));

document.write("<table border= '0' cellspacing = '2' bgcolor='black' width = "+numCeldas * anchura+">");
document.write("<tr height= "+altura+">");
let i = 0;
while(i < numCeldas){
    if(i % 2 == 0){
        document.write("<td width = "+anchura+" bgcolor = 'black'> &nbsp; </td>");
    }else{
        document.write("<td width = "+anchura+" bgcolor = 'white'> &nbsp; </td>");
    }
    i++;
}
document.write("</tr>");
document.write("</table>");