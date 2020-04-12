"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo("Bujão"));
console.log(echo(27));
console.log(echo({ nome: "Teste", idade: 20 }));
/**
 * USANDO GENERICS
 */
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado("Bujão"));
console.log(echoMelhorado(27));
/**
 * Generics disponiveis na API
 */
const avaliacoes = [10, 9.1, 7.7];
avaliacoes.push(8.4);
//avaliacoes.push('5.5');
console.log(avaliacoes);
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bia', 'Carlos']);
imprimir([
    { nome: "Fulano", idade: 27 },
    { nome: "Cicrano", idade: 27 },
    { nome: "Beltrano", idade: 50 },
]);
imprimir([
    { nome: "Fulano", idade: 27 },
    { nome: "Cicrano", idade: 27 },
    { nome: "Beltrano", idade: 50 },
]);
//Usando generics/Tipo genéticos
const chamarEcho = echoMelhorado;
console.log(chamarEcho("Alguma coisa"));
//Classe com generics
class OperacaoBinaria {
    constructor(operado1, operando2) {
        this.operando1 = operado1;
        this.operando2 = operando2;
    }
}
/*
console.log(new OperacaoBinaria('Bom', "dia").executar());
console.log(new OperacaoBinaria(3, 7).executar());
console.log(new OperacaoBinaria(3, "dia").executar());
console.log(new OperacaoBinaria({}, {}).executar());*/
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
class DataGeneric {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dias`;
    }
}
const d1 = new DataGeneric(10, 4, 2020);
const d2 = new DataGeneric(8, 4, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar());
/**
 * DEsafio classe Fila
 * Atributo: fila (array)
 * Metodos: entrar, próximo, imprimir
 */
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    tamanhoFila() {
        return this.fila.length;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length > 0) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        return null;
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila("Gui", "Pedro", "Ana", "Lu");
fila.imprimir();
fila.entrar("Manajj");
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
class Item {
    constructor(nome, valor) {
        this.chave = nome;
        this.valor = valor;
    }
}
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    imprimir() {
        if (this.itens.length > 0) {
            console.log(this.itens);
            return;
        }
        console.log("Não há dados para serem demonstrados!");
    }
    colocar(map) {
        const { chave, valor } = map;
        const isUpdate = this.itens.find((item, index) => {
            if (item.chave === chave) {
                this.itens[index] = { chave, valor };
                return true;
            }
        });
        if (!isUpdate) {
            this.itens.push(new Item(chave, valor));
        }
    }
    obter(chave) {
        const item = this.itens.filter((item) => {
            return item.chave === chave;
        });
        return item ? item[0] : null;
    }
    limpar() {
        this.itens = new Array();
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
mapa.imprimir();
mapa.colocar({ chave: 4, valor: 'ManaJJ' });
mapa.colocar({ chave: 5, valor: 'Jovirone' });
mapa.colocar({ chave: 6, valor: 'Yoda' });
mapa.colocar({ chave: 7, valor: 'Tecnosh' });
mapa.imprimir();
console.log(mapa.obter(5));
mapa.limpar();
mapa.imprimir();
/*mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })

console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()*/ 
//# sourceMappingURL=generics.js.map