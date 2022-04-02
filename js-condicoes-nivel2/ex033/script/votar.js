function Verificar() {
    var idade =Number(document.querySelector('input#txtida').value)
    var res = document.querySelector('div#result')
    
    if(idade < 16) {
        res.innerHTML = `<p>Voçê tem <mark>${idade}</mark> <strong>[NÃO VOTA]</strong></p>`
    }else if (idade < 18 || idade >= 65) {
        res.innerHTML = `<p>Voçê tem <mark>${idade}</mark> <strong>[VOTO OPCIONAL]</strong></p>`
    }else if (idade >= 18) {
        res.innerHTML = `<p>Voçê tem <mark>${idade}</mark> <strong>[VOTO OBRIGATORIO]</strong></p>`
    }else {
        alert('[Erro] verifique os dados e tente novamente!') 
    }
}