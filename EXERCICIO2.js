const prompt = require('prompt-sync')();
var idade = prompt("DIGITE SUA IDADE: ");

var calculo = idade * Number("365");
console.log(idade);
console.log("VOCE VIVEU ",calculo," DIAS");
