/*Añadir y eliminar elementos al inicio y al final del array.

Recorrer un array e imprimir sus elementos.*/

let numeros = [1, 2, 3, 4, 5];

for(let i = 0; i< numeros.length; i++){
    console.log("Posicion: "+(i+1)+" = "+ numeros[i]);
}

numeros.forEach(function (vocal, indice, arr) {
  console.log(`El valor del elemento en la posición ${indice} es ${vocal} del array que estamos recorriendo que es ${arr}`);
});

for(const numero of numeros){
    console.log(numero);
}

