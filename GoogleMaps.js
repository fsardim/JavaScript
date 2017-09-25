//Google Distance Matrix: Informações para consulta: https://www.npmjs.com/package/google-distance-matrix
const UsuarioSchema = require('./schemas/usuario');
const CaronaSchema = require('./schemas/carona');
const calculaDadosViagem = require('./functions/calculaDadosViagem');

let mapUsuarios = new Map();
let indice = 0;
mapUsuarios.set(indice++, new UsuarioSchema("Felipe", "Rua Marquês de Maricá, 660, São Paulo, SP", "Rua Dona Ana Néri, 368, São Paulo, SP", 1000));
mapUsuarios.set(indice++, new UsuarioSchema("Lucas", "Rua Tupanaci, 77, São Paulo, SP", "Rua Dona Ana Néri, 368, São Paulo, SP", 1000));
mapUsuarios.set(indice++, new UsuarioSchema("Blanes", "Rua Alencar Araripe, 789, São Paulo, SP", "Rua Dona Ana Néri, 368, São Paulo, SP", 1000));
mapUsuarios.set(indice++, new UsuarioSchema("Thais", "Rua Marquês de Maricá, 660, São Paulo, SP", "Rua Dona Ana Néri, 368, São Paulo, SP", 1000));

let a = 1;
for(let keyI of mapUsuarios.keys()){
    for(let keyJ of mapUsuarios.keys()){
        if(keyI !== keyJ) {
            let origem = mapUsuarios.get(keyI).getEnderecoCasa();
            let trabalho = mapUsuarios.get(keyI).getEnderecoTrabalho();
            let colega = mapUsuarios.get(keyJ).getEnderecoCasa();
            let respostaAPI = calculaDadosViagem(origem, colega, trabalho, (resposta) => {
                console.log(`Callback #${a++} (${keyI},${keyJ})`);
                // calcular tempo entre casa e trabalho
                // verificar se deu match. Se der match:
                // Criar objeto do tipo Carona e armazenar informações da carona
                //  construtor: motorista, passageiro, tempoViagem, distancia
                // Remover ambos os usuários do mapa;
            });
        }
    }
}

/* RESPOSTA 
Chamada à API
Callback #1 (3,0)
Chamada à API
Callback #2 (0,3)
Chamada à API
Callback #3 (3,1)
Chamada à API
Callback #4 (1,0)
Chamada à API
Callback #5 (1,3)
Chamada à API
Callback #6 (0,1)
Chamada à API
Callback #7 (2,0)
Chamada à API
Callback #8 (3,2)
Chamada à API
Callback #9 (2,3)
Chamada à API
Callback #10 (0,2)
Chamada à API
Callback #11 (2,1)
Chamada à API
Callback #12 (1,2)
*/