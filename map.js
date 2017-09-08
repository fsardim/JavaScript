var meuMap = new Map();

var indiceString = "1",
    indiceObj = "2",
    indiceFuncao = "3";

// atribuindo valores
meuMap.set(indiceString, "Valor 1");
meuMap.set(indiceObj, "Valor 2");
meuMap.set(indiceFuncao, "Valor 3");

meuMap.size; // 3

// recebendo os valores
console.log(meuMap.get(indiceString));
console.log(meuMap.get(indiceObj));
console.log(meuMap.get(indiceFuncao));
console.log(meuMap);

console.log(meuMap.has("2")); //true

//iterar por meio das chaves do Map
for (var key of meuMap.keys()) {
    console.log(key);
}

//iterar por meio dos valores do Map
for (var value of meuMap.values()){
    console.log(value);
}

//iterar por meio de chave e valor do Map
for (var [key, value] of meuMap.entries()) {
    console.log(key + " = " + value);
}

//limpar todo o Map
meuMap.clear();
console.log(meuMap);

meuMap.set(10, "Valor 10");
console.log(meuMap);