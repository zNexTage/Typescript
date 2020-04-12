/**
 * O decorator é sempre chamado quando a classe é carregada
 * 
 */
/**
 * 
 * @param construtor O parametro será a classe que foi decorada.
 */
function logarClasse(construtor: Function) {
    console.log(construtor);
}

function decoratorVazio(_: Function) {

}

/**
 * Decorator factory
 * @param valor 
 */
function logarClasseSe(valor: boolean) { //Factory
    return valor ? logarClasse : decoratorVazio;
}

/**
 * Retorna um decorator (Factory)
 * @param a 
 * @param b 
 */
function decorator(a: string, b: number) { //Factory
    return function (_: Function): void {
        console.log(a + ' ' + b);
    }
}

//@logarClasse //<-Decora a classe
//@logarClasseSe(false) //Factory
//@decorator("Teste", 10) //Factory
//@logarObjeto //Alterando o construtor
@imprimivel
class Eletrodemestico {
    constructor() {
        console.log("Novo...")
    }
}

type Construtor = { new(...args: any[]): {} }

/**
 * Alterando o construtor
 * @param constructor 
 */
function logarObjeto(constructor: Construtor) {
    console.log("Carregado...")
    return class extends constructor {
        constructor(...args: any[]) {
            console.log("Antes...");
            super(...args);
            console.log("Depois...");
        }
    }
}

interface Eletrodemestico {
    imprimir(): void;
}

function imprimivel(constructor: Function) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    }
}

const electro = new Eletrodemestico();
electro.imprimir && electro.imprimir();

// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}

function perfilAdmin(constructor: Function) {
    if (!usuarioLogado || !usuarioLogado.admin) {
        constructor.prototype.critico = function () { throw new Error("Acesso negado!") };
    }
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}

new MudancaAdministrativa().critico();


class ContaCorrente{
    @naoNegativo
    private saldo:number;

    constructor(saldo:number){
        this.saldo = saldo;
    }

    @congelar
    sacar(@paramInfo valor:number){
        if(valor<=this.saldo){
            this.saldo -= valor;
           return true;
        }

        return false;
    }

    @congelar
    getSaldo(){
        return this.saldo;
    }
}

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
function congelar(alvo: any, nomePropriedade:string, descritor:PropertyDescriptor){
    console.log(alvo);
    console.log(nomePropriedade);
    descritor.writable = false;
}

function naoNegativo(alvo:any, nomePropriedade: string){
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function():any {
            return alvo["_"+nomePropriedade];
        },
        set: function(valor:any):void{
            if(valor<0){
                throw new Error("Saldo Inválido");
            }
            else{
                alvo["_"+nomePropriedade] = valor;
            }
        }
    })
}

/**
 * Decoretor parametro
 * @param alvo 
 * @param nomeMetodo 
 * @param indiceParam 
 */
function paramInfo(alvo:any, nomeMetodo:string, indiceParam:number){
    console.log(`Alvo: ${alvo}`);
    console.log(`Método: ${nomeMetodo}`);
    console.log(`Índice Param: ${indiceParam}`);
}