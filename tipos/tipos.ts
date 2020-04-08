//String
let nome: string = 'João';
console.log(nome);
//nome = 28; Da erro


//number
let idade: number = 27;
//idade = "Ana";  Da erro
idade = 27.5;
console.log(idade);

//boolean
let possuiHobbies: boolean = false;
//possuiHobbies = 1;
console.log(possuiHobbies);

// Tipo explícitos
//let minhaIdade: number;
let minhaIdade: any; //any -> aceita qlq coisa
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = "Idade é 27";
console.log(typeof minhaIdade);


//Array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]; //any[] array de qlq coisa
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
console.log(hobbies);

//Tuplas
/**
 * Array onde vc especifica os tipos de cada item salvos nele
 */
let endereco: [string, number] = ["Av Principal", 99];
console.log(endereco);

endereco = ["Rua dahora", 1260];

/**
 * enums
 * valores pré definidos
 * Por padrão será enumreados de 0, 1, 2...
 * A partir do momento que isso é alterado, o valor do próximo item passa a ser a sequência
 */
enum Cor {
    Cinza, //0
    Verde, //1
    Azul, //2
    Amarelo = 100, //Atribuindo valor, logo o próximo será a sequência de 100
    Vermelho //101
}

let minhaCor: Cor = Cor.Verde;

console.log(minhaCor); //Saida: 1
console.log(Cor.Vermelho);

/**
 * any
 * Aceita qlq coisa, igual ao js
 */
let carro: any = "BMW";
console.log(carro);
carro = { nome: "BMW", preco: 10000 }
console.log(carro);

/**
 * Funções
 */
function retornaMeuNome(): string { //Retorna uma string
    return nome;
}

console.log(retornaMeuNome());

function digaOi(): void { //Retorna void
    console.log("oi");
}

digaOi();

function multiplicar(numA: number, numB: number): number { //Passando parâmetros
    return numA * numB;
}

console.log(multiplicar(4.7, 9));

/**
 * 
 *Funcao como tipo
 */
const teste = function (/*a: number, b: number*/): boolean {
    return false;
}

let calculo: (numeroA: number, numeroB: number) => number;
//calculo = digaOi;
//calculo();

calculo = multiplicar;
console.log(calculo(5, 6));

/**
 * Objetos e tipo
 */
let usuario: { nome: string, idade: number } = {
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

let Funcionario: { nomeSupervisores: string[], baterPonto: (hora: number) => string } = {
    nomeSupervisores: ["Ayanami", "Asuka", "Kusanagi"],
    baterPonto(hora: number): string {
        if (hora <= 8) {
            return "Ponto normal";
        }

        return "Fora do horário";
    }
}

console.log(Funcionario.nomeSupervisores);
console.log(Funcionario.baterPonto(8));
console.log(Funcionario.baterPonto(10));
console.log(Funcionario.baterPonto(5));
console.log(Funcionario.baterPonto(4));
//Fim desafio

/**
 * Tipos personalizados
 */
//Alias -> Apelido
type Aluno = {
    nomes: string[],
    idades: number[]
}

const aluno: Aluno = {
    nomes: ['Rukia', 'Ichigo'],
    idades: [16, 18]
}

console.log(aluno.nomes);


/**
 * Union Types * 
 */
let nota: number | string = 10;
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);

/**
 * Checando tipo em runtime
 */
let valor = 30;
if(typeof valor === "number"){
    console.log("É um number");
}
else{
    console.log(typeof valor);
}

/**
 * never
 * Não tem fim, lança erro ou tem um laço infinito
 */
function falha(msg:string): never{
    /*while(true){

    }*/

    throw new Error(msg);
}

const produto = {
    nome: "Sabão",
    preco:-1,
    validarProduto(){
        if(!this.nome || this.nome.trim().length ==0){
            falha("Precisa ter um nome")
        }
        if(this.preco <=0){
            falha("Preço inválido")
        }
    }
}

//produto.validarProduto();

/**
 * Null
 */

 let altura = 12;
 //altura = null; //Da erro

 let alturaOpcional: null | number = 12;
 alturaOpcional = null;

 type Contato = {
     nome:string,
     tel1:string,
     tel2:string | null
 }

 const c1:Contato = {
     nome:"a",
     tel1:'45455',
     tel2:null
 }

 console.log(c1.nome);
 console.log(c1.tel1);
 console.log(c1.tel2);

 let podeSerNull = null; //Funciona. Tipo any
 podeSerNull = 12;
 podeSerNull = '12';


 /**
  * Desafio - Js para typescript
  */

 /*
 Código para corrigir
 let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor
    }
}
 
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)*/

type ContaBancaria = {
    saldo: number,
    depositar:(valor:number)=>void
}


let contaBancaria:ContaBancaria = {
    saldo: 3456,
    depositar(valor:number) {
        this.saldo += valor
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}
 
let correntista:Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista);