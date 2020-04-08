"use strict";
let canal = "Gaveta";
let inscritos = 610234;
//let nome = "Teste" //nome foi declarado em tipo.js entao ocorre um erro, pois ambos estão no mesmo namespace/contexto
nome = "Pedro";
console.log(`Nome: ${nome}`);
/*
function somar(a:any, b:any){
    return a+b;
}*/
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
function saudar(isManha /*horas:number*/) {
    let saudacao;
    //let a = 1; declarado mais n usado, o msm vale para horas
    if (isManha) {
        saudacao = "Bom dia";
    }
    else {
        saudacao = "É isso";
    }
    return saudacao;
}
//# sourceMappingURL=compilador.js.map