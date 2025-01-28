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
    if(vetor[i] === 10){
        console.log(`Número 10 está na posição ${i} encontrado no vetor`);
    }
}


