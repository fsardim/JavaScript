const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite tabuada: ', (answer) => {

    //Consistências do input
    if (isNaN(answer))
        answer = 0;
    else if (answer < 0)
        answer *= -1;

    for (var index = 0; index <= 10; index++) {
        let resultado = index * parseInt(answer);
        console.log(`${parseInt(answer)} x ${index} = ${resultado}`)
    }

    rl.close();
});