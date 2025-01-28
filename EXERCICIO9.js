const prompt = require('prompt-sync')();
var cotacao = prompt("INFORME O VALOR QUE ESTA O DOLAR: ")
var quantidadedolar = prompt("INFORME QUANTOS DOLARES POSSUI: ")

var conversaodolar = Number(quantidadedolar) * Number(cotacao)

console.log("VOCE POSSUI R$:"+conversaodolar)