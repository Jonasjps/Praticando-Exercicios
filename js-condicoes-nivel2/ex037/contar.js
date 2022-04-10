 function contar() {
     let res = document.querySelector('div#result')
     res.innerHTML += '<h2>Contagem regressiva de 10 a 1</h2>'
    for(let c = 10 ; c >= 1 ; c--) {
        res.innerHTML += ` <strong>${c}</strong> &#x1f449; `
        
    }
    res.innerHTML += '&#x1f3c1;'
 }