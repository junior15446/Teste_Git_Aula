 const prompt = require('prompt-sync')(); 
 var n1 = prompt("DIGITE O PRIMEIRO NUMER: ")

 n1 = Number(n1)
if (n1 % 2 === 0) {
    console.log("O número " + n1 + " é par.");
} else {
    console.log("O número " + n1 + " é ímpar.");
}

