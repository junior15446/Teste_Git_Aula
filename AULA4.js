const prompt = require('prompt-sync')(); 

let vetor = []; 


do {
     let valor = prompt("DIGITE TODOS OS NUMEROS OU SAIR PARA SAIR: ");   
    if (!isNaN(valor) ) { 
        vetor.push(Number(valor)); 
    }
} while (!isNaN(valor)); 


for (let i = 0; i < vetor.length; i++) {
    console.log(vetor[i]);
}