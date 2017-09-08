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

    let divisores = 0;
    let lista = [];
    for (let i = 2;i <= numDigitado;i++){
        let ehPrimo = m.numeroPrimo(i);
        if(ehPrimo){
            lista.push(i);
            divisores++;
        }
    }

    console.log(`Lista: ${lista}\n${divisores} divisores`);

    rl.close();
});