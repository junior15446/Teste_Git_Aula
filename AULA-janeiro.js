// const prompt = require('prompt-sync')();
// var n1 = Number(prompt("DIGITE A QUANTIDADE METROS: "));

//  var cauculo = n1 / 1000


// console.log('a quantidade de km convertido e ' +cauculo+ 'KM')

const prompt = require('prompt-sync')();
var ano = Number(prompt("DIGITE A QUANTIDADE METROS: "));

if(ano%4 == 0){

    if(ano%100 == 0){
        if(ano%400 == 0){
            console.log('ano e BIXESTO')
        }else{
            console.log('ano não e bissexto')
        }

    }else{
        console.log('ano e bissexto')
    }
}else{

    console.log('ano não e bissexto')
}