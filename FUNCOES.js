function saudar(nome){
    console.log('OLA '+nome)
}

function somar(n1,n2){
    return(n1 + n2)
}

// var n1 = Number(4)
// var n2 = Number(5)

// var resultado = somar(n1,n2)
// console.log(resultado)

function ehpar(n1){
    return n1%2 ==0

//     if(n1%2 == 0){
//     return true
// }else{
//     return false
// }
}
// var n1 = Number(4)
// var n2 = Number(5)

// var resultado1 = ehpar(n1)
// var resultado2 = ehpar(n2)
// console.log(resultado1)
// console.log(resultado2)

function quadrado(n1){
    return n1 * n1
}
// var n1 = Number(4)
// var resultado1 = quadrado(n1)

// console.log(resultado1)


function media(n1,n2,n3){
    return (n1+n2+n3)/3
}



// var n1 = Number(5)
// var n2 = Number(10)
// var n3 = Number(15)

// var resultado = media(n1,n2,n3)
// console.log(resultado)

function conversortemp(n){
    return (n * 9/5)+32
}

var n1 = Number(35)

var resultado = conversortemp(n1)
console.log(resultado)