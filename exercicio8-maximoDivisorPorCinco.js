const readline = require('readline');
const m = require('./numerosprimos');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o número: ', (answer) => {

    let numDigitado = parseInt(answer);
    
    //Consistências do input
    if (isNaN(answer))
        numDigitado = 0;
    else if (numDigitado < 0)
        numDigitado *= -1;

    let encontrouDivisor = m.divisivelPorCinco(numDigitado);
    //console.log(`${encontrouDivisor} -- ${numDigitado}`);
    while (!encontrouDivisor) {
        numDigitado--;
        encontrouDivisor = m.divisivelPorCinco(numDigitado);
        //console.log(`${encontrouDivisor} -- ${numDigitado}`);
    }

    console.log(`Maior divisor: ${numDigitado}`);

    rl.close();
});