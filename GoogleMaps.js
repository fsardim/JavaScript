class Usuario {
    constructor(nome, endereco, enderecoTrabalho, tolerancia){
        this.nome = nome;
        this.endCasa = endereco;
        this.endTrabalho = enderecoTrabalho;
        this.distanciaTrabalho = 0;
        if (tolerancia <= 1000)
            this.toleranciaEmMetros = 1000;
        else
            this.toleranciaEmMetros = tolerancia;
    }

    getEnderecoCasa(){
        return this.endCasa;
    }
    getEnderecoTrabalho(){
        return this.endTrabalho;
    }
    getTolerancia(){
        return this.toleranciaEmMetros;
    }
    setDistanciaTrabalaho(d){
        this.distanciaTrabalho = d;
    }
}

class Carona {
    constructor(motorista, passageiro, tempoViagem, distancia){
        this.idCarona = 0;
        this.distancia = distancia;
        this.tempoViagem = tempoViagem;
        this.motorista = motorista;
        this.passageiro = passageiro;
    }
}
//Google Distance Matrix: Informações para consulta: https://www.npmjs.com/package/google-distance-matrix
const distanceMatrix = require('google-distance-matrix');
let indice = 0;

let mapUsuarios = new Map();
mapUsuarios.set(indice++, new Usuario("Felipe", "Rua Marquês de Maricá, 660, São Paulo, SP", "Rua Dona Ana Néri, 368, São Paulo, SP", 1000));
mapUsuarios.set(indice++, new Usuario("Lucas", "Rua Tupanaci, 77, São Paulo, SP", "Rua Dona Ana Néri, 368, São Paulo, SP", 1000));
mapUsuarios.set(indice++, new Usuario("Blanes", "Rua Alencar Araripe, 789, São Paulo, SP", "Rua Dona Ana Néri, 368, São Paulo, SP", 1000));

//iterar por meio das chaves do Map
for (var keyI of mapUsuarios.keys()) {
    for (var keyJ of mapUsuarios.keys()){
        if (keyI !== keyJ){
            let origem = mapUsuarios.get(keyI).getEnderecoCasa();
            let trabalho = mapUsuarios.get(keyI).getEnderecoTrabalho();
            let colega = mapUsuarios.get(keyJ).getEnderecoCasa();
            var respostaAPI = calculaDadosViagem(origem, colega, trabalho);
            //console.log(respostaAPI) : undefined
            //verificar se deu match. Se der match:
            //  Criar objeto do tipo Carona e armazenar informações da carona
            //      constructor: motorista, passageiro, tempoViagem, distancia
            //  Remover ambos os usuários do mapa;
        }
    }
}

function calculaDadosViagem(origem, colega, trabalho) {
    //parâmetros de chamada
    const apiKey = "";
    let origens = [origem, colega];
    let destinos = [colega, trabalho];
    distanceMatrix.key(apiKey);
    distanceMatrix.units("metric");
    distanceMatrix.language("pt");
    distanceMatrix.mode("driving"); //driving | walking | bicycling, default driving
    const horaSaida = new Date(2017, 09, 11, 08, 00, 00, 000).getTime()*1000; //11.09.2017-8h00
    distanceMatrix.departure_time(horaSaida);

    //dados da viagem
    let distanciaTotal = 0;
    let tempo = 0;
    let distanciaTrabalho = 0;

    //chamada à API
    distanceMatrix.matrix(origens, destinos, (erro, response) => {
        if(erro)
            return console.log(erro);
        if(!response)
            return console.log("Erro: Resposta não recebida");
        if(response.status === "OK"){
            for (var i=0; i < origens.length; i++) {
                for (var j = 0; j < destinos.length; j++) {

                    //calcula distância total da rota e distância do usuário avaliado ao trabalho
                    if ((i === 0 && j === 0) || (i === 1 && j === 1)){
                        distanciaTotal += response.rows[i].elements[j].distance.value;
                        tempo += response.rows[i].elements[j].duration.value;
                    } else if (i === 0 && j === 1)
                        distanciaTrabalho = response.rows[i].elements[j].distance.value;

                }
            }
            console.log(`Origens: ${origens}\nDestinos:${destinos}\nDistância total: ${distanciaTotal}, Distância do trabalho: ${distanciaTrabalho}, duração: ${tempo}\n`);
            return [distanciaTotal, distanciaTrabalho, tempo];
        }
    });
}