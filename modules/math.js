//function somar(x, y){
//    return x + y;
//}

//const somar = function(x,y){
// return x + y;    
//}

//Arrow function
const somar = (x, y) => parseInt(x) + parseInt(y);
exports.somar = somar;
const media = (x, y) => somar(x, y)/2;
exports.media = media;

//Exemplo de operador "rest"
function somarVarios(...args){
    let soma = 0;
    for (var index = 0; index < args.length; index++) {
        soma += args[index];
    }
    return soma;
}

//console.log("Soma de vários: " + somarVarios(3, 2, 3, -8, 4));
