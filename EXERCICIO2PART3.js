const prompt = require('prompt-sync')(); 
let vetor = []; 


do {
     var valor = prompt("DIGITE TODOS OS NUMEROS OU SAIR PARA SAIR: ");  
    if (!isNaN(valor)) { 
        vetor.push(valor)
    }
} while (!isNaN(valor)); 


 
for (let i = 0; i < vetor.length; i++) {
   
    console.log(vetor[i]);
    
}

let total = 0;
for (let i = 0; i < vetor.length; i++) {
    total + Number(vetor[i]); 
}

console.log("Total da soma: " + total);