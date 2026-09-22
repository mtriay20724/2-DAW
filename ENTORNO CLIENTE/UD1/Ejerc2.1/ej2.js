const puntos = 75;

const descuento = puntos > 100 ? 20
    : puntos >= 50 ? 10
    : 0;

console.log(descuento); //en teoria seria 10