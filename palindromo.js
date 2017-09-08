const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var novaPalavra = "";
rl.question('Digite a palavra: ', (answer) => {
// Comparação mais óbvia e com maior esforço de processamento
//for (var index = 0; index < answer.length; index++) {
//  novaPalavra = novaPalavra + answer[answer.length - index - 1];
//}
        
    let ehPalindromo = true;

    for (var index = 0; index < answer.length/2; index++) {
        if(answer[index] !== answer[answer.length - index - 1]){
            ehPalindromo = false;
            break;
        }
    }
    
    if(ehPalindromo)
        console.log(`${answer} é palíndromo`);
    else
        console.log(`${answer} não é palíndromo`);
    
    rl.close();
});