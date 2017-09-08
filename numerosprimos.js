const numeroPrimo = function determinarNumeroPrimo(num){
    let ehPrimo = true;

    for (var i = 2; i <= num; i++) {
        if(num % i === 0 && num !== i){
            ehPrimo = false;
            break;
        }
    }
    return ehPrimo;
}
exports.numeroPrimo = numeroPrimo;

const divisivelPorCinco = function verificarDivisaoPorCinco(num){
    return (num % 5 === 0);
}
exports.divisivelPorCinco = divisivelPorCinco;