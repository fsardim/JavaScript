const m = require('./math');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var a, b;
rl.question('Digite um primeiro número: ', (answer) => {
    a = answer;
    
    rl.question('Digite um segundo número: ', (answer2) => {
    b = answer2;

    console.log("Soma: " + m.somar(a, b));
    console.log("Média: " + m.media(a, b));
    rl.close();
    });
});