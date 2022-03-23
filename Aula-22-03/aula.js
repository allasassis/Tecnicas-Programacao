console.log("Técnicas de programação");
// pode usar var ou let para criar variáveis
var idade;
idade = 15;

var num = 6 * 2;

console.log(num);

// Aspas duplas ou aspas simples faz diferença, porque quando se trabalha com banco de dados ele reconhece o aspas simples como sendo APENAS um caracter

if (num < 10) {
   /* Bloco de comando se a condição for verdadeira */ console.log("O número é menor que 10");
} else {
    /* bloco de comando se a condição for falsa */ console.log("O número NÃO é menor que 10");
}

// var idade = prompt("Digite sua idade: ");

if (idade > 18) {
    console.log("Parabéns, você é maior de idade")
} else {
    console.log("Você não é maior de idade!")
} 

/* && = E
   || = Ou
   !=  Diferente de */

// Estrutura de repetição (For, while, ForIt)
var idade2 = 13;

while (idade2 < 20) {
    console.log("Idade é menor que 20");
    idade2 = idade2 + 1;
} 
console.log("Idade NÃO é menor que 20 mais")

// Estrutura for

for (var x = 0; x < 10; x++) {
    console.log("O valor de x é: " + x);
}

console.log("Saimos do for")