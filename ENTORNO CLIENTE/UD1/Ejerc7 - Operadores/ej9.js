let N = Number(prompt("Introduce un numero: "));

for(let i = 0; i<= N; i++){
    let par = i % 2;
    if(par == 0){
        console.log(i);
    }
}