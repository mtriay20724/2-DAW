//Buscar un elemento en un array de números.

let numeros = [1, 2, 3, 4, 5];

console.log(numeros.indexOf(2));

if(numeros.includes(1)){
    console.log("Se ha encontrado el 1");
}else{
    console.log("No se ha encontrado")
}
