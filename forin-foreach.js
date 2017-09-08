//for each - captura o valor do elemento
arrayExemplo = [5, 4, 3, 4, 5];
for (let e of arrayExemplo){
    if (e % 2 === 0)
        console.log(e + " é par");
}

//for in - captura o valor da posição do elemento
for (let e in arrayExemplo) {
    console.log(e);
}

//for
var element = 0;
for (var index = 0; index < arrayExemplo.length; index++) {
    element += arrayExemplo[index];
}
console.log(element);

