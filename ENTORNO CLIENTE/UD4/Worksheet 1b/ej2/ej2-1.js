let numeroAleatorio;

function elegirNumero() {
    numeroAleatorio = Math.floor(Math.random() * 9) + 1;
    console.log(numeroAleatorio);
}

elegirNumero();

for (let i = 1; i <= 9; i++) {
    document.getElementById("num" + i).addEventListener("click", function () {
        numeroClick(i);
    });
}

function numeroClick(num) {
    if (num === numeroAleatorio) {
        console.log("Enhorabuena, has clicado " + num + " y te pedía el " + numeroAleatorio);
    } else {
        console.log("MAL!\nNúmero pulsado = " + num + "\nNúmero pedido = " + numeroAleatorio);
    }
}