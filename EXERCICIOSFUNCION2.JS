

// function leia(){
//     const prompt = require('prompt-sync')();
//     var msg = prompt("INSIRA SUA MENSAGEM");
    

//     if(isNaN(msg)){
//         console.log('incorreto digite um numero');
//         return leia()
//     }

//  return Number(msg)
// } 

//  var a = leia();

function leia(){
    const prompt = require('prompt-sync')();
    var msg = prompt("INSIRA SUA MENSAGEM");
    console.log(msg)
} 

 var a = leia();


