/*
let tabla1 = 1;
let tabla2 = 2;

for(let i = 0; i<= 10; i++){
    const resultado = tabla1 * i;
    console.log(tabla1+"x"+i+"="+resultado);
    for(let j = 0; j<=10 && i <=10; j++){
        const resultado2 = tabla2 * i;
        console.log(tabla2+"x"+i+"="+resultado2);
    }
}

let tabla1 = 1;
let tabla2 = 2;

document.write("<strong>Tabla del "+tabla1+"</strong><br>");
for(let i = 1; i<=10; i++){
    const resultado = tabla1*i;
    document.write(tabla1+"x"+i+"="+resultado+"<br>");
}

document.write("<br><br><strong>Tabla del "+tabla2+"</strong><br>");
for(let i = 1; i<=10; i++){
    const resultado = tabla2*i;
    document.write(tabla2+"x"+i+"="+resultado+"<br>");
}
/*for(let tabla = 1; tabla <= 10; tabla++){                          // bucle externo
    document.write("<strong>Tabla del "+tabla+"</strong><br>");
    for(let i = 1; i <= 10; i++){                                  // bucle interno
        const resultado = tabla*i;
        document.write(i+"x"+tabla+"="+resultado+"<br>");
    }
    document.write("<br>");
}*/



for(let tabla = 1; tabla <=10; tabla++){
    document.write("<strong>Tabla del "+tabla+"</strong> <br>");
    for(let i = 0; i<=10; i++){
        const resultado = tabla *i;
        document.write(tabla+"x"+i+"="+resultado+"<br>");
    }
    document.write("<br>");
}