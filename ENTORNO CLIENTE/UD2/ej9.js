
//document.cookie = "userName = Marc";
//document.cookie = "edad = 19";
//document.cookie = "ciudad = Menorca";

/*¿Cómo aparecen separadas las diferentes cookies?
    Pues cada cookie tiene un espacio en la memoria en diferentes lineas, con su
    nombre y valor

¿Se muestran en el mismo orden en el que las has creado?
    No, se muestra por orden alfabetico de el nombre de la "clave"

¿Qué ocurre si vuelves a cargar la página?
    nada, los valores estan guardados
*/

//document.cookie = "nombre=Pablo";
//document.cookie = "nombre=Pedro";
//document.cookie = "userName = Pau";

//¿Qué ocurre cuando creamos una cookie utilizando un nombre que ya existe?
    //se sobreescribe y borra la anterior

//document.cookie = "usuario = Marc";
//¿Por qué crees que la cookie sigue existiendo aunque hayas cerrado la página?
    //Pq esta guardada en la nube mediante una clave valor

/*document.cookie = "nombre=Juan";
document.cookie = "ciudad=Granada";
document.cookie = "edad=25";

let texto = "nombre=Juan; ciudad=Granada; edad=25";

let datos = texto.split(";");*/

//Ej6

document.cookie = "nombre=Juan";
document.cookie = "ciudad=Granada";


function obtenerCookie(nombre) {
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("=");

        if (cookie[0] == nombre) {
            return cookie[1];
        }
    }
}

console.log(obtenerCookie("nombre"));
console.log(obtenerCookie("ciudad"));