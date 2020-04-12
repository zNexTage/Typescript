"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * O decorator é sempre chamado quando a classe é carregada
 *
 */
/**
 *
 * @param construtor O parametro será a classe que foi decorada.
 */
function logarClasse(construtor) {
    console.log(construtor);
}
function decoratorVazio(_) {
}
/**
 * Decorator factory
 * @param valor
 */
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
/**
 * Retorna um decorator (Factory)
 * @param a
 * @param b
 */
function decorator(a, b) {
    return function (_) {
        console.log(a + ' ' + b);
    };
}
//@logarClasse //<-Decora a classe
//@logarClasseSe(false) //Factory
//@decorator("Teste", 10) //Factory
//@logarObjeto //Alterando o construtor
let Eletrodemestico = class Eletrodemestico {
    constructor() {
        console.log("Novo...");
    }
};
Eletrodemestico = __decorate([
    imprimivel
], Eletrodemestico);
/**
 * Alterando o construtor
 * @param constructor
 */
function logarObjeto(constructor) {
    console.log("Carregado...");
    return class extends constructor {
        constructor(...args) {
            console.log("Antes...");
            super(...args);
            console.log("Depois...");
        }
    };
}
function imprimivel(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
const electro = new Eletrodemestico();
electro.imprimir && electro.imprimir();
// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
};
function perfilAdmin(constructor) {
    if (!usuarioLogado || !usuarioLogado.admin) {
        constructor.prototype.critico = function () { throw new Error("Acesso negado!"); };
    }
}
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar,
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
cc.sacar(5248.57);
cc.sacar(1000000);
console.log(cc.getSaldo());
/**
 * Decorator de função
 * @param alvo
 * @param nomePropriedade
 * @param descritor
 */
function congelar(alvo, nomePropriedade, descritor) {
    console.log(alvo);
    console.log(nomePropriedade);
    descritor.writable = false;
}
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo["_" + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error("Saldo Inválido");
            }
            else {
                alvo["_" + nomePropriedade] = valor;
            }
        }
    });
}
/**
 * Decoretor parametro
 * @param alvo
 * @param nomeMetodo
 * @param indiceParam
 */
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log(`Alvo: ${alvo}`);
    console.log(`Método: ${nomeMetodo}`);
    console.log(`Índice Param: ${indiceParam}`);
}
//# sourceMappingURL=decoratos.js.map