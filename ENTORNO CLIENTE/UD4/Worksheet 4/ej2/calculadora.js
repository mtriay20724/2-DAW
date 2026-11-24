const pantalla = document.getElementById("pantalla");

let actual = "";          
let anterior = null;      
let operador = null;      
let resultadoMostrado = false;

function actualizarPantalla() {
    const parteOperacion = anterior !== null ? anterior + " " + operador + " " : "";
    pantalla.value = parteOperacion + actual;
}

function reiniciar() {
    actual = "";
    anterior = null;
    operador = null;
    resultadoMostrado = false;
}

function calcular(a, b, op) {
    let resultado;
    switch (op) {
        case "+": resultado = a + b; break;
        case "-": resultado = a - b; break;
        case "×": resultado = a * b; break;
        case "÷":
            if (b === 0) return null;   
            resultado = a / b;
            break;
    }
    return Math.round(resultado * 1e10) / 1e10; 
}

function mostrarError() {
    reiniciar();
    pantalla.value = "Error";
}

// Números
document.querySelectorAll(".numero").forEach(function (boton) {
    boton.addEventListener("click", function () {
        if (resultadoMostrado) {
            actual = "";
            resultadoMostrado = false;
        }
        if (actual === "0") {
            actual = boton.dataset.num;
        } else {
            actual += boton.dataset.num;
        }
        actualizarPantalla();
    });
});


document.getElementById("punto").addEventListener("click", function () {
    if (resultadoMostrado) {
        actual = "";
        resultadoMostrado = false;
    }
    if (actual.includes(".")) return;
    actual = actual === "" ? "0." : actual + ".";
    actualizarPantalla();
});


document.querySelectorAll(".operador").forEach(function (boton) {
    boton.addEventListener("click", function () {
        const op = boton.dataset.op;

        // Si no hay número nuevo, solo cambiamos el operador
        if (actual === "" && anterior !== null) {
            operador = op;
            actualizarPantalla();
            return;
        }
        if (actual === "") return;

        if (anterior !== null) {
            // Ya había una operación pendiente: la resolvemos antes
            const res = calcular(anterior, parseFloat(actual), operador);
            if (res === null) {
                mostrarError();
                return;
            }
            anterior = res;
        } else {
            anterior = parseFloat(actual);
        }

        operador = op;
        actual = "";
        resultadoMostrado = false;
        actualizarPantalla();
    });
});


document.getElementById("igual").addEventListener("click", function () {
    if (operador === null || actual === "") return;

    const res = calcular(anterior, parseFloat(actual), operador);
    if (res === null) {
        mostrarError();
        return;
    }

    actual = String(res);
    anterior = null;
    operador = null;
    resultadoMostrado = true;
    actualizarPantalla();
});

// Borrar
document.getElementById("borrar").addEventListener("click", function () {
    reiniciar();
    pantalla.value = "";
});