const prompt = require('prompt-sync')(); 
var numeropessoas = '15'
let vetor = []; 
let vetor2 = []; 

for (let i = 0; i < 15; i++) {
    let altura = prompt("altura:");
    

    altura = Number(altura);
    if (!isNaN(Number(altura))) {
        vetor.push(altura);  
    } else{
        console.log("DIGITE UM NUMERO CORRETo")
    }
}

for(let i = 0; i <15; i++){
    let peso = prompt("peso:");
    peso = Number(peso);
    if(!isNaN(peso)){
        vetor2.push(peso)
    }
}

let total_peso_soma = 0;
let total_altura_soma = 0;

for (let i = 0; i < vetor.length; i++) {
    total_peso_soma += Number(vetor2[i]);  
    total_altura_soma += Number(vetor[i]); 
}

let media_peso = total_peso_soma / numeropessoas;
let media_altura = total_altura_soma / numeropessoas;
console.log(media_altura);
console.log(media_peso);

let aluno_mais_alto = 0;
let indice_aluno_mais_alto = 0; 

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > aluno_mais_alto) {
        indice_aluno_mais_alto = vetor[i]; 
    
}
}


console.log(`o ALUNO MAIS ALTO ${indice_aluno_mais_alto}`)