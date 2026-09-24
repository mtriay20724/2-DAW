let numColumnas = parseInt(prompt("Introduzca el numero de columnas: "));
let numFilas = parseInt(prompt("Introduzca el numero de filas: "));
let numAltura = parseInt(prompt("Introduzca el numero que tendra de altura: "));
let numAnchura = parseInt(prompt("Introduzca el numero que tendra de anchura: "));

document.write("<table border='0' cellspacing='2' bgcolor='black' width='" + numAnchura + "'>");
for (let i = 0; i < numFilas; i++) {
    document.write("<tr bgcolor='white' height='" + numAltura + "'>");
    for (let j = 0; j < numColumnas; j++) {
        document.write("<td>&nbsp;</td>");
    }
    document.write("</tr>");
}
document.write("</table>");