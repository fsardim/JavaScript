const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a frase: ', (answer) => {

    let texto = answer.toLowerCase().trim();

    let vogais = 0;
    let consoantes = 0;
    let palavras = 1;
    for (var i = 0; i < texto.length; i++) {
        
        switch(texto[i]){
            case " ": case ",": case "!": case "?":
                if (texto[i+1]===" ")
                    i++;
                palavras++;
                break;
            case ".":
                if (i === texto.length - 1)
                    break;
                if (texto[i+1]===" ")
                    i++;
                palavras++;
                break;
            case "a": case "e": case "i": case "o": case "u":
                vogais++;
                break;
            default:
                consoantes++;
        }
    }

    console.log(`Palavras ${palavras}, Vogais: ${vogais}, Consoantes: ${consoantes}`);

    rl.close();
});