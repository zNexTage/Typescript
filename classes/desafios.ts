// Exercício 1 - Classe

class Moto{
    public nome:string;
    private velocidade:number;
    public velocidadeMaxima:number;

    constructor(nome:string, velocidadeMaxima:number){
        this.nome = nome;
        this.velocidade = 0;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    buzinar(){
        console.log("Toooooooooot");
    }

    acelerar(delta:number){
        const alterarVelo = this.alterarVelocidade(delta);
        this.velocidade = alterarVelo > this.velocidadeMaxima?this.velocidadeMaxima:alterarVelo;
    }

    frear(delta:number){
        const alterarVelo = this.alterarVelocidade(delta);
        this.velocidade = alterarVelo < 0?this.velocidadeMaxima:alterarVelo;
    }

    private alterarVelocidade(delta:number):number{
        return this.velocidade + delta;
    }

    velocidadeAtual():number{
        return this.velocidade;
    }
}

 
const moto:Moto = new Moto('Ducati', 200)
moto.buzinar()
console.log(`Velocidade da moto ${moto.velocidadeAtual()}`);
moto.acelerar(80)
console.log(`Velocidade da moto ${moto.velocidadeAtual()}`)

// Exercício 2 - Herança
class Objeto2D{
    protected base: number = 0;
    protected altura:number = 0;
    constructor (base:number, altura:number){
        this.base = base;
        this.altura = altura;
    }
}

class Retangulo extends Objeto2D{
    constructor (base:number, altura:number){
        super(base, altura);
    }

    area():number{
        return this.base * this.altura;
    }
}
 
const retangulo:Retangulo = new Retangulo(5, 7);
console.log(`Area do retangulo: ${retangulo.area()}`);
const retangulo2:Retangulo = new Retangulo(10, 10);
console.log(`Area do retangulo: ${retangulo2.area()}`);

// Exercício 3 - Getters & Setters

class Estagiario{
    private _primeiroNome:string = "";

    get primeiroNome():string{
        return this._primeiroNome;
    }
    set primeiroNome(primeiroNome: string)
    {        
        this._primeiroNome = (primeiroNome.length >=3)?primeiroNome:"";
    }
}

const estagiario:Estagiario = new Estagiario();
 
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)