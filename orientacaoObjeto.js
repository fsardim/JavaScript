class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    getIdade(){
        return this.idade;
    }

    setidade(i){
        this.idade = i;
    }

    getNome(){
        return this.nome;
    }
}

let p1 = new Pessoa("Felipe S.", 27);
p1.setidade(28);
console.log(p1.getIdade());

class Ninja extends Pessoa {
    constructor(nome, idade, func){
        super(nome, idade);
        this.funcao = func;
    }

    getFuncao(){
        return this.funcao;
    }

    setFuncao(func){
        this.funcao = func;
    }
}

let n1 = new Ninja("Felipe", 27, "Ninja");
console.log(n1.getNome() + ", " + n1.getIdade() + ", " + n1.getFuncao());