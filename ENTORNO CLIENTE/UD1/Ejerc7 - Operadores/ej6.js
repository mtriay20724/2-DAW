let positivos = 0;
let negativos = 0;

for(let i = 0; i < 5; i++){
    let num = Number(prompt('Ingrese el numero ${i+1}'));
    if(num < 0){
        negativos ++;
    }else{
        positivos++;
    }
}

console.log("Num positivos: "+positivos);
console.log("Num negativos: "+negativos);
