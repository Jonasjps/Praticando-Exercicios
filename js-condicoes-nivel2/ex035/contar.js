 function contar() {
     let res = document.querySelector('div#result')
     res.innerHTML += '<h2>Números pares de 1 até 10</h2>'
    for(let c = 1 ; c <= 10 ; c++) {
        if(c % 2 == 0) {
            res.innerHTML += `<strong>${c}</strong> &#x1F449; `
        }   
    }
    res.innerHTML += '&#x1f3c1'
 }