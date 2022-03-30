// Funções

function tabuada() { // Parâmetro é oque fica dentro dos parenteses                             Você pode criar uma função COM ou SEM parâmetros
    var cont = 0;
    while (cont <= 10) {
        console.log(6 * cont);
        cont++;
    }
}

// tabuada();
// Função com parâmetro
function tabuada2(num) {
    var x = 0;
    while (x <= 10) {
        console.log(num * x); 
        x++;
    }
}

// tabuada2(2);

function desconto(valor) {
    var desc = 0.10;
    var novoValor;
    return novoValor = valor - (valor * desc);    // Assim que se pega algo que foi feito dentro da função, para usar fora dela, retornando o valor com o RETURN e chamando de volta depois
}

// var mensagem = desconto(1500);
// console.log(mensagem);

// EXERCICIO  ---  Criar um programa que calcule a area do quadrado

function area(lado) {
    var areaQuad;
    return areaQuad = lado * lado;
}

var area1 = area(4);
console.log(area1);

// EXERCICIO     -- Criar um programa que com o ano de nascimento de uma pessoa calcular a idade dela em anos, meses e dias.

var anoAtual = 2022;

function ano(anoNasc) {
    var anoP = anoAtual - anoNasc;
    console.log(anoP);
}

ano(2002);

function meses(anoNasc) {
    var anoP = anoAtual - anoNasc;
    var mesesP = anoP * 12;
    console.log(mesesP);
}

meses(2002);

function dias(anoNasc) {
    var anoP = anoAtual - anoNasc;
    var diasP = anoP * 365;
    console.log(diasP);
}

dias(2002);

// EXERCICIO - Fazer um programa que com duas notas calcular a media aritmética e exibir a mensagem correspondente

var nota1 = 10;
var nota2 = 7;

function media() {
    var mediaT = (nota1 + nota2) / 2;
    if (mediaT >= 0 && mediaT <= 4) {
        console.log("Você foi reprovado!")
    } else if (mediaT >= 5 && mediaT <= 7) {
        console.log("Você está de exame!")
    } else if (mediaT >= 8 && mediaT <= 10) {
        console.log("Você foi aprovado!")
    }
}

media();