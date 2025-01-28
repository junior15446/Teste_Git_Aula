//var n1 = 5;
//var n2 = 10;

//var RESULTADO = n1+n2;

//console.log('RESULTADO É:'+ RESULTADO);   //console.log e nosso famosso print 




//var CPF = "999.999.999.99";
//const mensagem = 'Seu cpf é :';

//console.log(mensagem+CPF);


//var n1 = 10;
//var n2 = "10";

//var teste1 = n1 == n2;
//var teste2 = n1 === n2; // com 1 = e para replicar os valor com == e para comparar os valores e com 3 === e para comparar tanto a formatação string/numero/etc e o a informação

//console.log('Resultado 1 e:'+teste1);
//console.log('Resultado 2 e:'+teste2);



//3 tipos de variaveis var e varivel global, let e uma varivel de escopo local e vai se perder quando fianlizar o escopo exemplo abaixo

//var n1 = 3;
//let n2 = 1;

//if(true){
//    let n2 = 10;
 //   var n1 = 15;
//    var resultadoescopo = n1 + n2;
//}

//var resultado = n1 + n2;


//console.log(+resultado)
//console.log(+resultadoescopo)

//finalizando exemplo de let


//terceiro tipo de variavel e o const  ela e uma variavel local mas n podemos mudar ela sem declarar ela novamente como exemplo utilizar ela dentro de um if para uma conta 



var n1 = 3;
const n2 = 1;

if(true){
    const n2 = 10;
    var n1 = 15;
    var resultadoEscopo2 = n1 + n2;
}
//n2 = 10;
var resultado2 = n1 + n2;

console.log(+resultado2)
console.log(+resultadoEscopo2)