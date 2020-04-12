interface Humano{
    nome:string
    idade?:number
    [prop:string]:any //Propriedade dinamica
    saudar(sobrenome:string):void
}

function saudarComOla(pessoa:Humano){
    console.log(`Olá, ${pessoa.nome}`)
}

function mudarNome(pessoa:Humano){
    pessoa.nome = "Joana";
}

const pessoa:Humano = {
    nome:"João",
    idade:27,
    saudar(sobrenome:string){
        console.log(`Olá meu nome é ${this.nome} ${sobrenome}`)
    }
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({nome:"Jonas", idade:17, xyz:true});
pessoa.saudar("Skyvalter");

//Usando Classes...
class Cliente implements Humano{
    nome:string = ""
    ultimaCompra:Date = new Date
    saudar(sobrenome:string){
        console.log(`Olá (classe) meu nome é ${this.nome} ${sobrenome}`)
    }
}

const meuCliente = new Cliente();
meuCliente.nome = "Han";
saudarComOla(meuCliente);
meuCliente.saudar('Solo');

console.log(meuCliente.ultimaCompra);

//Interface Funcao
interface FuncaoCalculo{
    (a:number, b:number):number;
}

let potencia: FuncaoCalculo

potencia = (base:number, exp:number):number => Array(exp).fill(base).reduce((t, a)=>{t*a}).

console.log(potencia(3,10));
console.log(Math.pow(3,10));
console.log(3 ** 10);

//Heranca com interface
interface A{
    a():void
}

interface B{
    a():void
}

interface ABC extends A,B{
    c():void
}

class RealA implements A{
    a():void {} //{} -> Corpo da funcao, é necessario colocar
}

class RealAB implements A, B{
    a():void{}
    b():void{}
}

class RealABC implements ABC{
    a():void{}
    b():void{}
    c():void{}
}

abstract class AbstrataABD implements A, B{
    a():void{}
    b():void{}  
    abstract d():void 
}




const x = 2;
const y = 3;
const k = 4;

console.log(x, y, k);

