"use strict";
function saudarComOla(pessoa) {
    console.log(`Olá, ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const pessoa = {
    nome: "João",
    idade: 27,
    saudar(sobrenome) {
        console.log(`Olá meu nome é ${this.nome} ${sobrenome}`);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({nome:"Jonas", idade:17, xyz:true});
pessoa.saudar("Skyvalter");
//Usando Classes...
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log(`Olá (classe) meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Han";
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = (base, exp) => Array(exp).fill(base).reduce((t, a) => { t * a; }).
    console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(Math.pow(3, 10));
class RealA {
    a() { } //{} -> Corpo da funcao, é necessario colocar
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
const x = 2;
const y = 3;
const k = 4;
console.log(x, y, k);
//# sourceMappingURL=interfaces.js.map