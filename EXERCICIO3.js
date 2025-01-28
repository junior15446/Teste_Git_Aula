const prompt = require('prompt-sync')();
var n5 = prompt("VOÇÊ TEM QUANTAS NOTAS DE 5: ")
var n10 = prompt("VOÇÊ TEM QUANTAS NOTAS DE 10: ")
var n20 = prompt("VOÇÊ TEM QUANTAS NOTAS DE 20: ")
var n50 = prompt("VOÇÊ TEM QUANTAS NOTAS DE 50: ")
var n100 = prompt("VOÇÊ TEM QUANTAS NOTAS DE 100: ")
var n200 = prompt("VOÇÊ TEM QUANTAS NOTAS DE 200: ")

var soman5 = n5*5
var soman10 = n10*10
var soman20 = n20*20
var soman50 = n50*50
var soman100 = n100*100
var soman200 = n200*200


console.log("NOTAS: R$:"+Number(soman5)+ Number(soman10)+ Number(soman20)+Number(soman50)+Number(soman100)+Number(soman200)); 