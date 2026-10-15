/*Añadir y eliminar elementos al inicio y al final del array.

Métodos: push(), pop(), unshift(), shift().
Recorrer un array e imprimir sus elementos.*/

let array = [1, 2, 3, 4, 5];
array.push(12); //añade un numero al final
array.pop(); //borra el ultimo elemento del array
array.unshift(20); //añade un elemento en la pos 0
array.shift(); //Elimina la pos 0
for(let i = 0; i< array.length; i++){
    console.log("Posicion: "+(i+1)+" = "+ array[i]);
}