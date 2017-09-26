//Google Distance Matrix: Informações para consulta: https://www.npmjs.com/package/google-distance-matrix
const UsuarioSchema = require('./schemas/usuario');
const CaronaSchema = require('./schemas/carona');
const distanceMatrix = require('google-distance-matrix');

let mapUsuarios = new Map();
let indice = 0;
mapUsuarios.set(indice++, new UsuarioSchema("Felipe", "Rua Marquês de Maricá, 660, São Paulo, SP", "Rua Dona Ana Néri, 368, São Paulo, SP", 1000));
mapUsuarios.set(indice++, new UsuarioSchema("Lucas", "Rua Tupanaci, 77, São Paulo, SP", "Rua Dona Ana Néri, 368, São Paulo, SP", 1000));
mapUsuarios.set(indice++, new UsuarioSchema("Blanes", "Rua Alencar Araripe, 789, São Paulo, SP", "Rua Dona Ana Néri, 368, São Paulo, SP", 1000));
mapUsuarios.set(indice++, new UsuarioSchema("Thais", "Rua Marquês de Maricá, 230, São Paulo, SP", "Rua Dona Ana Néri, 368, São Paulo, SP", 1000));

let a = 1, keyI = 0, keyJ = 2;
let origem = mapUsuarios.get(keyI).getEnderecoCasa();
let trabalho = mapUsuarios.get(keyI).getEnderecoTrabalho();
let colega = mapUsuarios.get(keyJ).getEnderecoCasa();
let respostaAPI = calculaDadosViagem(origem, colega, trabalho);

respostaAPI.then((resposta) => {
    console.log(`Callback #${a++} (${keyI},${keyJ}) - Resposta: ${resposta}`);
}).catch(() => {
    console.log(`Falha #${a++} (${keyI},${keyJ}) - Erro: ${erro}`)
});

function calculaDadosViagem(origem, colega, trabalho){
    //parâmetros de chamada
    console.log("Entrada na API");
    const apiKey = "";
    let origens = [origem, colega];
    let destinos = [colega, trabalho];
    distanceMatrix.key(apiKey);
    distanceMatrix.units("metric");
    distanceMatrix.language("pt");
    distanceMatrix.mode("driving"); //driving | walking | bicycling, default driving
    const horaSaida = new Date(2017, 09, 25, 08, 00, 00, 000).getTime()/1000; //11.09.2017-8h00
    distanceMatrix.departure_time(horaSaida);

    distanceMatrix.matrix(origens, destinos, (erro, resposta)=>{
        return new Promise(erro, resposta);
    });
}