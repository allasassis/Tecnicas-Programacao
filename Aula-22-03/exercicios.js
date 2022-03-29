/* var x = 12;
var y = 5;
var z = 8;

var media = (x + y + z) / 3;

console.log(media);

// ---------------------------------------------------------------

var a = 5;
var b = 7;

if (a > b) {
    console.log("O número " + a + " é maior que o número " + b);
} else {
    console.log("O número " + b + " é maior que o número " + a);
}

// ---------------------------------------------------------------

var tabuada;
var numero = 7;

for (tabuada = 1; tabuada < 11; tabuada++) {
    console.log(numero + " x " + tabuada + " = " + numero * tabuada);
} */

// ---------------------------------------------------------------

var x;

for (x = 1; x < 11; x++) {
    for (var y = 0; y < 11; y++) {
        console.log(x + " x " + y + " = " + x*y);   
    }
    
}

// ----------------------------------------------------------------

var preco = 1500;
var desconto = preco - (preco * (10 / 100));

console.log("O preço atual do produto é: " + desconto);

