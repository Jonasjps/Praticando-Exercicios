function Verificar() {
    let agora = new Date()
    let anoatual = agora.getFullYear()
    let  ano = document.querySelector('input#txtano')
    let res = document.querySelector('div#result')
    if(ano.value.length == 0 || Number(ano.value) > anoatual) {
        alert('[ERRRO] Verifique os dados e tente novamente!')
    }else {
        let fsex = document.getElementsByName('radsex')
        let idade = anoatual - Number(ano.value)
        let gênero = ''
        if(fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                res.innerHTML = `Detectamos <mark>${gênero}</mark> com <strong>${idade}</strong> anos!`
            }else if (fsex < 21) {
                res.innerHTML = `Detectamos <mark>${gênero}</mark> com <strong>${idade}</strong> anos!`
            }else if (idade < 53) {
                res.innerHTML = `Detectamos <mark>${gênero}</mark> com <strong>${idade}</strong> anos!`
            }else {
                res.innerHTML = `Detectamos <mark>${gênero}</mark> com <strong>${idade}</strong> anos!`
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                res.innerHTML = `Detectamos <mark>${gênero}</mark> com <strong>${idade}</strong> anos!`
            }else if (fsex < 21) {
                res.innerHTML = `Detectamos <mark>${gênero}</mark> com <strong>${idade}</strong> anos!`
            }else if (idade < 53) {
                res.innerHTML = `Detectamos <mark>${gênero}</mark> com <strong><strong>${idade}</strong></strong> anos!`
            }else {
                res.innerHTML = `Detectamos <mark>${gênero}</mark> com <strong><strong>${idade}</strong></strong> anos!`
            }
        }
    }
}