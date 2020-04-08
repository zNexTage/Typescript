//let & const

let seraQuePode = '?'
console.log(seraQuePode);
//var seraQuePode = '?'; //hoisting

let estaFrio = true;

if(estaFrio){
    var acao = 'Colocar o Casaco';
}
//console.log(acao); //Funciona, por causa do escopo de bloco

/*
const cpf:string = '123.451.125-20';
cpf = '444.555.222-50';*/


/**
 * Arrow Function
 * Sintaxe é menor
 * O this tem um compartamento diferente
 */

 const somar = function(n1:number, n2:number){
     return n1 + n2;
 }

 console.log(somar(4, 4));

 const subtrair = (n1:number, n2:number)=>n1-n2;
 console.log(subtrair(2,3));

 const saudacao = () => console.log("ola");
 saudacao();

 const falarCom = (pessoa:string) => console.log("Ola "+pessoa);
 falarCom("Rukia");

 //Funcao com this

 function normalComThis(){
     //console.log(this); //undefined
 }

 //const normalComThisEspecial = normalComThis.bind("AA"); //altera o this da funcao

 //const arrowComThis = () => console.log(this); //Aponta para o escopo global


 /**
  * Parâmetro padrão
 */
function contagemRegressiva(inicio:number = 3, fim:number = inicio - 5):void{
    console.log(inicio);
    while(inicio>fim){
        inicio--;
        console.log(inicio);
    }

    console.log("Fim");
    console.log(fim);
}

contagemRegressiva();
contagemRegressiva(5)

/**
 * Rest & Spread
 */
const numbers = [1,10,99,-5];
console.log(Math.max(...numbers)); //Passa cada elemento como parametro

const turmaA:string[] = ['João', 'Maria', 'Fernanda'];
const turmaB:string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA]; //pega os elementos de a e adiciona no b

function retornarArray(...args:number[]):number[]{
    return args;
}

const numeros = retornarArray(1,2,3,4,5);
console.log(numeros);

//Rest & Spread (Tupla)
const tupla: [number, string, boolean] = [1, 'a', true];

function tuplaParam1(a:number, b:string, c:boolean): void{
    console.log(`1) ${a} ${b} ${c}`);
}

tuplaParam1(...tupla);

function tuplaParam2(...params:[number, string, boolean]): void{
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}

tuplaParam2(...tupla);

//Destructuring (array)
const caracteristicas = ["Moto Zetec 1.8", 2020];
/*const motor = caracteristicas[0];
const ano = caracteristicas[1];
SEM Destructuring
*/

const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);

const [w, z] = [2, 3];

//Destructuring (objeto)
const item = {
    nome: "SSD 480GB",
    preco:200,
    caracteristicas:{
        w:'Importado'
    }
}

const nomeItem = item.nome;
const precoItem = item.preco;

const {nome:n, preco:p, caracteristicas: {w:caracteristica}} = item;
console.log(n);
console.log(p);
console.log(caracteristica);

//TEmplate String
const usuarioId:string = 'SuporteCod3r';
const notificacoes:string = "9";
//const boasVindas = 'Boas vindas '+usuarioId +'Notificações: '+notificacoes;
const boasVindas = `
    Boas Vindas ${usuarioId},
    Notificações: ${parseInt(notificacoes)>9?'+9':notificacoes}
`;

console.log(boasVindas);


/**
 * Desafio
 */
console.log("----------EXERCICIOS-------------")
 // Exercicio 1
const dobro = (valor:number):number => valor * 2;
console.log(dobro(10))

// Exercicio 2
const dizerOla = (nome:string):void=> {
    nome ? nome:nome = "Pessoa";
    console.log(`Ola, ${nome}`);
}
dizerOla("");
dizerOla("Rukia");

// Exercicio 3
const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))

// Exercicio 4
const array = [55, 20]

array.push(...nums);

console.log(array);

// Exercicio 5
const notas = [8.5, 6.3, 9.4]
console.log(...notas)

// Exercicio 6
const cientista = {primeiroNome: "Will", experiencia: 12}
const {primeiroNome, experiencia} = cientista;
console.log(primeiroNome, experiencia);


//Callback

function esperar3s(callback:(dado:string)=>void){
    setTimeout(() => {
        callback('3s depois');
    }, 3000);
}

esperar3s((res=>{
    console.log(res);
}))

function esperar3sPromise(){
   return new Promise((res:any)=>{
    setTimeout(() => {
        res('3s depois promisse');
    }, 3000);
   });
}

esperar3sPromise().then(dado=>console.log(dado));

fetch('https://swapi.co/api/people/1')
.then(res=>res.json())
.then(personagem=>personagem.films)
.then(films=>fetch(films))
.then(resFilm => resFilm.json())
.then(filme => console.log(filme))
.catch(res=> console.log(res));