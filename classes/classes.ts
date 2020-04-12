class Data {
    public dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const aniversario = new Data(3, 11, 1991);
console.log(aniversario);

const casamento = new Data
casamento.ano = 2017;
console.log(casamento);


class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {

    }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);

/**
 * Desafio Produto
 * Atributos: nome, preço e desconto
 * Criar o construtor
 * Obs 1: Desconto é opcional (valor padrao 0)
 * Obs 2: Criar dois produtos: passando dois e três params
 */

class Produto {
    nome: string
    preco: number
    desconto: number

    constructor(nome: string, preco: number, desconto: number = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }

    public resumo(): string {
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}%off)
        Preço com desconto R$${this.precoComDesconto().toFixed(2)}
        `;
    }

    //Criar método precoComDesconto
    //Quais são os parâmetros e o retorno? Nenhum parametro e retorna number
    //Alterar método resumo para mostrar o preco com desconto

    public precoComDesconto(): number {
        return this.preco - (this.preco * this.desconto);
    }
}

const prod1 = new Produto("Asus Zenfone", 700, 0.5);
const prod2 = new Produto("Iphone", 2000);

console.log(prod1, prod2);

console.log(prod1.resumo());
console.log(prod2.resumo());

class Carro {
    private velocidadeAtual: number = 0;
    public marca: string;
    public modelo: string;
    private velocidadeMaxima: number;

    constructor(marca: string, modelo: string, velocidadeMaxima: number = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }

        return this.velocidadeAtual;
    }

    public acelerar(): number {
        return this.alterarVelocidade(2);
    }

    public frear(): number {
        return this.alterarVelocidade(-5);
    }
}

const carro1 = new Carro("Ford", "Ka", 185);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar())
Array(25).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());

class Ferrari extends Carro{

    constructor (modelo:string, velocidadeMaxima:number){
        super("Ferrari", modelo, velocidadeMaxima);
    }

    public acelerar(): number {
        return this.alterarVelocidade(20);
    }

    public frear(): number {
        return this.alterarVelocidade(-15);
    }
}

const f40 = new Ferrari("F40", 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());


// Getters & Setters
class Pessoa{
    private _idade:number = 0;

    get idade(): number{
        return this._idade;
    }

    set idade(valor:number){
        if(valor>=0&&valor<=120){
            this._idade = valor;
        }
    }
}

const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1.idade);

//Atributos e métodos estáticos
class Matematica{
    static PI: number = 3.1416;

    static areaCirc(raio:number):number{
        return Matematica.PI * raio * raio;
    }
}

/*
const m1 = new Matematica()
m1.PI = 4.2
console.log(m1.areaCirc(4));*/

console.log(Matematica.areaCirc(4));

/**
 * Class abstrata
 */

 abstract class Calculo{
     protected resultado:number = 0;

     abstract executar(...numeros:number[]):void;

     getResultado():number{
         return this.resultado;
     }
 }

 class Soma extends Calculo{
    executar(...numeros:number[]):void{
        this.resultado = numeros.reduce((t, a)=>t+a);
    }
 }
 class Multiplicacao extends Calculo{
    executar(...numeros:number[]):void{
        this.resultado = numeros.reduce((t, a)=>t*a);
    }
 }

 let calc1 = new Soma();
 calc1.executar(2,3,4,5);
 console.log(calc1.getResultado());

 calc1 = new Multiplicacao();
 calc1.executar(2,3,4,5);
 console.log(calc1.getResultado());


 /**
  * private & singleton.
  * Controle na instanciação do objeto
  */
 class Unico{
     private static instance: Unico = new Unico
     private constructor(){

     }

     static getInstance():Unico{
        return Unico.instance;
     }

     agora(){
         return new Date
     }
 }

 //const errado = new Unico()

 console.log(Unico.getInstance().agora());
 

 /**
  * Somente leitura
  */
 class Aviao{
    public readonly modelo: string;
    public readonly prefixo:string;

     constructor(modelo: string, prefixo: string){
         this.modelo = modelo;
         this.prefixo =prefixo;
     }
 }

 const turboHelice = new Aviao('TU-114', 'PT-ABC');
/* turboHelice.modelo = 'DC-8';
 turboHelice.prefixo = 'PT-DEF';*/

 console.log(turboHelice);