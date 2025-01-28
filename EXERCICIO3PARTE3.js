const prompt = require('prompt-sync')(); 

let vetor = []; 


for (let i = 0; i < 20; i++) {
    let valor = prompt("Digite um número:");

    valor = Number(valor);
    if (!isNaN(valor)) {
        vetor.push(valor);  
    }
}


for (let i = 0; i < 20; i++) {
    let repetido = false;

   
    for (let j = i + 1; j < 20; j++) {
        if (vetor[i] === vetor[j]) {
            repetido = true;
            break; 
        }
    }

    
    if (repetido) {
        console.log(`Número ${vetor[i]} está repetido no vetor`);
    }
}