"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(nome, velocidadeMaxima) {
        this.nome = nome;
        this.velocidade = 0;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    buzinar() {
        console.log("Toooooooooot");
    }
    acelerar(delta) {
        const alterarVelo = this.alterarVelocidade(delta);
        this.velocidade = alterarVelo > this.velocidadeMaxima ? this.velocidadeMaxima : alterarVelo;
    }
    frear(delta) {
        const alterarVelo = this.alterarVelocidade(delta);
        this.velocidade = alterarVelo < 0 ? this.velocidadeMaxima : alterarVelo;
    }
    alterarVelocidade(delta) {
        return this.velocidade + delta;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
const moto = new Moto('Ducati', 200);
moto.buzinar();
console.log(`Velocidade da moto ${moto.velocidadeAtual()}`);
moto.acelerar(80);
console.log(`Velocidade da moto ${moto.velocidadeAtual()}`);
// Exercício 2 - Herança
class Objeto2D {
    constructor(base, altura) {
        this.base = 0;
        this.altura = 0;
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    constructor(base, altura) {
        super(base, altura);
    }
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo(5, 7);
console.log(`Area do retangulo: ${retangulo.area()}`);
const retangulo2 = new Retangulo(10, 10);
console.log(`Area do retangulo: ${retangulo2.area()}`);
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = "";
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(primeiroNome) {
        this._primeiroNome = (primeiroNome.length >= 3) ? primeiroNome : "";
    }
}
const estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
//# sourceMappingURL=desafios.js.map