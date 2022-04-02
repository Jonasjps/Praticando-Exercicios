function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var tx = document.getElementsByName('txt')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if(tx[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <10) {
                //CRIANÇA
            }else if (idade < 21) {
                //JOVEM
            }else if (idade < 50) {
               
                //ADULTO
            }else {
                //IDOSO
            }
        }else if (tx[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <10) {
                //CRIANÇA
            }else if (idade < 21) {
                //JOVEM
            }else if (idade < 50) {
                //ADULTO
            }else {
                //IDOSO
            }
        }
    }
    res.innerHTML = `Detectamos ${gênero} com <mark>${idade}</mark> anos.`
    
}