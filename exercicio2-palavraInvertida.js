const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var novaPalavra = "";
// rl.question('Digite a palavra: ', function(answer) {
rl.question('Digite a palavra: ', answer => {
    console.log(answer);
    for (var index = 0; index < answer.length; index++) {
        novaPalavra = novaPalavra + answer[answer.length - index - 1];
    }

    console.log(`Palavra invertida ${novaPalavra}`);
    
    rl.close();
});
// console.log('Passei');