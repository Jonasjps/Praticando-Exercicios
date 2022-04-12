function Fatorial() {
    var n = Number(document.querySelector('input#fn1').value)
    var res = document.querySelector('div#result')

    res.innerHTML += `<h2> Calculando ${n}!</h2>`
    var c = n
    var fat = 1
    while(c > 1) {
        res.innerHTML += `${c} x `
        fat *= c
        c--
    }
    res.innerHTML += `1 = <strong> ${fat.toLocaleString('pt-BR')}</strong>`
}