const prompt = require('prompt-sync')(); 

var a = Number(prompt('Escreva um número: '));
var b = Number(prompt('Escreva um número: '));
var c = Number(prompt('Escreva um número: '));

if (a <= b && a <= c && b <= c) {
    console.log(`A ordem crescente é ${a}, ${b} e ${c}`);
} else if (a <= b && a <= c && c <= b) {
    console.log(`A ordem crescente é ${a}, ${c} e ${b}`);
} else if (b <= a && b <= c && a <= c) {
    console.log(`A ordem crescente é ${b}, ${a} e ${c}`);
} else if (b <= a && b <= c && c <= a) {
    console.log(`A ordem crescente é ${b}, ${c} e ${a}`);
} else if (c <= a && c <= b && a <= b) {
    console.log(`A ordem crescente é ${c}, ${a} e ${b}`);
} else if (c <= a && c <= b && b <= a) {
    console.log(`A ordem crescente é ${c}, ${b} e ${a}`);
}

