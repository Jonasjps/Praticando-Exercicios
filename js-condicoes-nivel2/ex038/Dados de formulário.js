
function contar() {
    let Numero = document.querySelector('input#txtnu')
    let saida = document.querySelector('div#saida')
    let nu = Number(Numero.value)
    saida.innerHTML += `<h2> Contando de 0 até ${nu} </h2>`
    for(let c = 0 ; c <= nu ; c++) {
        saida.innerHTML += `${c} &#x1f449;`
    }
    
   
    saida.innerHTML += '&#x1f3c1;'
    
}