/*4. Uso en bloques
👉 Escribe un programa que:

Declare una variable var x = 10 dentro de un bloque {} y muéstrala fuera del bloque.
Declare una variable let y = 20 dentro de un bloque {} e intenta mostrarla fuera.
Explica la diferencia.*/
{
    var x = 10; // var si que funciona 
}

{
    let y = 20; // let dara error pq en {} solo estarea creada entre los {}
}

console.log(x);
console.log(y); // tiene que dar error
