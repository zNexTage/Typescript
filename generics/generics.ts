function echo(objeto: any) {
    return objeto;
}

console.log(echo("Bujão"));
console.log(echo(27));
console.log(echo({ nome: "Teste", idade: 20 }));


/**
 * USANDO GENERICS
 */

function echoMelhorado<T>(objeto: T): T {

    return objeto;
}

console.log(echoMelhorado<string>("Bujão"));
console.log(echoMelhorado<number>(27));

/**
 * Generics disponiveis na API
 */
const avaliacoes: Array<number> = [10, 9.1, 7.7];
avaliacoes.push(8.4);
//avaliacoes.push('5.5');
console.log(avaliacoes);

function imprimir<T>(args: T[]): void {
    args.forEach(elemento => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(['Ana', 'Bia', 'Carlos']);
imprimir<{ nome: string, idade: number }>([
    { nome: "Fulano", idade: 27 },
    { nome: "Cicrano", idade: 27 },
    { nome: "Beltrano", idade: 50 },
])

type ALunoGeneric = {
    nome: string, idade: number
}

imprimir<ALunoGeneric>([
    { nome: "Fulano", idade: 27 },
    { nome: "Cicrano", idade: 27 },
    { nome: "Beltrano", idade: 50 },
]);

//Usando generics/Tipo genéticos
const chamarEcho: <T>(data: T) => T = echoMelhorado
console.log(chamarEcho<string>("Alguma coisa"));

//Classe com generics
abstract class OperacaoBinaria<T, R>{
    public operando1: T;
    public operando2: T;

    constructor(operado1: T, operando2: T) {
        this.operando1 = operado1;
        this.operando2 = operando2;
    }

    abstract executar(): R

}

/*
console.log(new OperacaoBinaria('Bom', "dia").executar());
console.log(new OperacaoBinaria(3, 7).executar());
console.log(new OperacaoBinaria(3, "dia").executar());
console.log(new OperacaoBinaria({}, {}).executar());*/

class SomaBinaria extends OperacaoBinaria<number, number>{
    executar(): number {
        return this.operando1 + this.operando2;
    }
}

console.log(new SomaBinaria(3, 4).executar());


class DataGeneric {
    public dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

class DiferencaEntreDatas extends OperacaoBinaria<DataGeneric, string>
{
    getTime(data: DataGeneric): number {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }

    executar(): string {
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

class Fila<T>{
    private fila: Array<T>;

    constructor(...args: T[]) {
        this.fila = args;
    }

    public tamanhoFila(): number {
        return this.fila.length;
    }

    public entrar(elemento: T) {
        this.fila.push(elemento);
    }

    public proximo(): T | null {
        if (this.fila.length > 0) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);

            return primeiro;
        }
        return null;
    }

    public imprimir() {
        console.log(this.fila);
    }
}

const fila = new Fila<string>("Gui", "Pedro", "Ana", "Lu");
fila.imprimir();
fila.entrar("Manajj");
fila.imprimir();
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())
fila.imprimir();

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

class Item<C, V>{
    public chave: C;
    public valor: V;

    constructor(nome: C, valor: V) {
        this.chave = nome;
        this.valor = valor;
    }
}

class Mapa<C, V>{

    private itens: Array<Item<C, V>>;

    constructor() {
        this.itens = new Array<Item<C, V>>();
    }

    imprimir() {
        if (this.itens.length> 0){
            console.log(this.itens);          
           
            return;
        }

        console.log("Não há dados para serem demonstrados!");
    }

    colocar(map: Item<C, V>) {
        const { chave, valor } = map;

        const isUpdate = this.itens.find((item, index) => {
            if (item.chave === chave) { this.itens[index] = { chave, valor }; return true; }
        })

        if (!isUpdate) {
            this.itens.push(new Item(chave, valor));
        }
    }

    obter(chave: C):Item<C,V> | null {
        const item:Item<C, V>[] = this.itens.filter((item) => {
            return item.chave === chave;
        });

        return item?item[0]:null;
    }

    limpar() {
        this.itens = new Array<Item<C, V>>();
    }
}

const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
mapa.imprimir();
mapa.colocar({ chave: 4, valor: 'ManaJJ' });
mapa.colocar({ chave: 5, valor: 'Jovirone' })
mapa.colocar({ chave: 6, valor: 'Yoda' })
mapa.colocar({ chave: 7, valor: 'Tecnosh' })
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