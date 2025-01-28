function mediavetores(vetvetor) {
    var vlrmedia = 0;
    for (var i = 0; i < vetvetor.length; i++) {


        vlrmedia = vlrmedia + vetvetor[i]
    }

    vlrmedia = vlrmedia / vetvetor.length;
    return vlrmedia
}


var vetor = [10,5,5,4,7]

var valorretorno = mediavetores(vetor);
console.log(valorretorno)