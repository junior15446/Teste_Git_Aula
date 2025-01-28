const prompt = require('prompt-sync')();
var idade = prompt("VAMOS CALCULAR SEU ICM, QUAL SUA IDADE?")
var peso = prompt("QUAL SEU PESO?")
var altura = prompt("QUAL SUA ALTURA?")

var IMC = Number(peso) / Number(altura) + Number(altura)

console.log("SEU IMC É",IMC)
