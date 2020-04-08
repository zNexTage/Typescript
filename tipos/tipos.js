"use strict";
//String
let nome = 'João';
console.log(nome);
//nome = 28; Da erro
//number
let idade = 27;
//idade = "Ana";  Da erro
idade = 27.5;
console.log(idade);
//boolean
let possuiHobbies = false;
//possuiHobbies = 1;
console.log(possuiHobbies);
// Tipo explícitos
//let minhaIdade: number;
let minhaIdade; //any -> aceita qlq coisa
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = "Idade é 27";
console.log(typeof minhaIdade);
//Array
let hobbies = ["Cozinhar", "Praticar Esportes"]; //any[] array de qlq coisa
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
//Tuplas
/**
 * Array onde vc especifica os tipos de cada item salvos nele
 */
let endereco = ["Av Principal", 99];
console.log(endereco);
endereco = ["Rua dahora", 1260];
/**
 * enums
 * valores pré definidos
 * Por padrão será enumreados de 0, 1, 2...
 * A partir do momento que isso é alterado, o valor do próximo item passa a ser a sequência
 */
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Amarelo"] = 100] = "Amarelo";
    Cor[Cor["Vermelho"] = 101] = "Vermelho"; //101
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor); //Saida: 1
console.log(Cor.Vermelho);
/**
 * any
 * Aceita qlq coisa, igual ao js
 */
let carro = "BMW";
console.log(carro);
carro = { nome: "BMW", preco: 10000 };
console.log(carro);
/**
 * Funções
 */
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("oi");
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(4.7, 9));
/**
 *
 *Funcao como tipo
 */
const teste = function ( /*a: number, b: number*/) {
    return false;
};
let calculo;
//calculo = digaOi;
//calculo();
calculo = multiplicar;
console.log(calculo(5, 6));
/**
 * Objetos e tipo
 */
let usuario = {
    nome: "Ayanami",
    idade: 27
};
console.log(usuario);
//usuario = {}; Erro: Não foi específicado os atributos
/*usuario = {
    name:'Ana',
    age:31
} Erro: Os nomes dos atributos estão diferente */
usuario = {
    nome: "Asuka",
    idade: 27
};
console.log(usuario);
//Desafio
/**
 * Criar um objeto funcionário com:
 *  - Array de strings com os nomes supervisores
 *  - Função de bater ponto que recebe a hora (number) e retorna uma string
 *      -> Ponto normal (<= 8)
 *      -> Fora do horário (> 8)
 */
let Funcionario = {
    nomeSupervisores: ["Ayanami", "Asuka", "Kusanagi"],
    baterPonto(hora) {
        if (hora <= 8) {
            return "Ponto normal";
        }
        return "Fora do horário";
    }
};
console.log(Funcionario.nomeSupervisores);
console.log(Funcionario.baterPonto(8));
console.log(Funcionario.baterPonto(10));
console.log(Funcionario.baterPonto(5));
console.log(Funcionario.baterPonto(4));
const aluno = {
    nomes: ['Rukia', 'Ichigo'],
    idades: [16, 18]
};
console.log(aluno.nomes);
/**
 * Union Types *
 */
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);
/**
 * Checando tipo em runtime
 */
let valor = 30;
if (typeof valor === "number") {
    console.log("É um number");
}
else {
    console.log(typeof valor);
}
/**
 * never
 * Não tem fim, lança erro ou tem um laço infinito
 */
function falha(msg) {
    /*while(true){

    }*/
    throw new Error(msg);
}
const produto = {
    nome: "Sabão",
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("Precisa ter um nome");
        }
        if (this.preco <= 0) {
            falha("Preço inválido");
        }
    }
};
//produto.validarProduto();
/**
 * Null
 */
let altura = 12;
//altura = null; //Da erro
let alturaOpcional = 12;
alturaOpcional = null;
const c1 = {
    nome: "a",
    tel1: '45455',
    tel2: null
};
console.log(c1.nome);
console.log(c1.tel1);
console.log(c1.tel2);
let podeSerNull = null; //Funciona. Tipo any
podeSerNull = 12;
podeSerNull = '12';
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map