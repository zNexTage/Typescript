"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
console.log(aniversario);
const casamento = new Data;
casamento.ano = 2017;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta;
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
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}%off)
        Preço com desconto R$${this.precoComDesconto().toFixed(2)}
        `;
    }
    //Criar método precoComDesconto
    //Quais são os parâmetros e o retorno? Nenhum parametro e retorna number
    //Alterar método resumo para mostrar o preco com desconto
    precoComDesconto() {
        return this.preco - (this.preco * this.desconto);
    }
}
const prod1 = new Produto("Asus Zenfone", 700, 0.5);
const prod2 = new Produto("Iphone", 2000);
console.log(prod1, prod2);
console.log(prod1.resumo());
console.log(prod2.resumo());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.velocidadeAtual = 0;
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    alterarVelocidade(delta) {
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
    acelerar() {
        return this.alterarVelocidade(2);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro("Ford", "Ka", 185);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(25).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari("F40", 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
// Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1.idade);
//Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
/*
const m1 = new Matematica()
m1.PI = 4.2
console.log(m1.areaCirc(4));*/
console.log(Matematica.areaCirc(4));
/**
 * Class abstrata
 */
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let calc1 = new Soma();
calc1.executar(2, 3, 4, 5);
console.log(calc1.getResultado());
calc1 = new Multiplicacao();
calc1.executar(2, 3, 4, 5);
console.log(calc1.getResultado());
/**
 * private & singleton.
 * Controle na instanciação do objeto
 */
class Unico {
    constructor() {
    }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
//const errado = new Unico()
console.log(Unico.getInstance().agora());
/**
 * Somente leitura
 */
class Aviao {
    constructor(modelo, prefixo) {
        this.modelo = modelo;
        this.prefixo = prefixo;
    }
}
const turboHelice = new Aviao('TU-114', 'PT-ABC');
/* turboHelice.modelo = 'DC-8';
 turboHelice.prefixo = 'PT-DEF';*/
console.log(turboHelice);
//# sourceMappingURL=classes.js.map