let noDuplicados = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];

// 1. filter() + indexOf()
const arrayFilter = noDuplicados.filter((elemento, indice) => {
  return noDuplicados.indexOf(elemento) === indice;
});

// 2. Set
const arraySet = [...new Set(noDuplicados)];

// 3. Bucle + includes()
const arrayBucle = [];
for (const numero of noDuplicados) {
  if (!arrayBucle.includes(numero)) {
    arrayBucle.push(numero);
  }
}

console.log("Filter:", arrayFilter);
console.log("Set:", arraySet);
console.log("Bucle:", arrayBucle);