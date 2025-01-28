const prompt = require('prompt-sync')();
var idade = prompt("VAMOS CALCULAR SEU ICM, QUAL SUA IDADE? ")
var peso = prompt("QUAL SEU PESO? ")
var altura = prompt("QUAL SUA ALTURA? ")

var IMC = Number(peso) / Number(altura * altura) 

function classificarIMC(imc) {
    if (imc < 16) {
        return "Magreza Grave";
    } else if (imc >= 16 && imc <= 16.9) {
        return "Magreza Moderada";
    } else if (imc >= 17 && imc <= 18.5) {
        return "Magreza Leve";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso Ideal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        return "Obesidade Grau I";
    } else if (imc >= 35 && imc <= 39.9) {
        return "Obesidade Grau II ou Severa";
    } else if (imc >= 40) {
        return "Obesidade Grau III ou Mórbida";
    }
}

var categoria = classificarIMC(IMC);


console.log("SEU IMC É: ", IMC.toFixed(2)); 
console.log("CLASSIFICAÇÃO: ", categoria);
