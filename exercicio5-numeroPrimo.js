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

    let ehPrimo = m.numeroPrimo(numDigitado);

    if (ehPrimo)
        console.log(`${numDigitado} é número primo`);
    else
        console.log(`${numDigitado} não é número primo`);

    rl.close();
});