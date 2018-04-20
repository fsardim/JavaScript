//for each - captura o valor do elemento
arrayExemplo = [5, 4, 3, 4, 1];
let e, acumulador = 0;
for (e of arrayExemplo){
    if (e % 2 === 0)
        console.log(e + " é par");
    acumulador += e;
}
console.log(acumulador);

//for in - captura o valor da posição do elemento
for (e in arrayExemplo) {
    console.log(e);
}

//for
var element = 0;
for (var index = 0; index < arrayExemplo.length; index++) {
    element += arrayExemplo[index];
}
console.log(element);

