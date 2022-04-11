function contar() {
    let n1 = document.querySelector('input#txtn1')
    let n2 = document.querySelector('input#txtn2')
    let saida = document.querySelector('div#saida')
    let valor1 = Number(n1.value)
    let valor2 = Number(n2.value)
    saida.innerHTML += `<h2>Contando de ${valor1} até ${valor2} </h2>`
    if(valor1 <=valor2){
        for(let c = valor1 ; c <= valor2 ; c++) {
            saida.innerHTML += `${c} &#x1f449`
        }
    } else {
        for(let c = valor1 ; c >= valor2 ; c --) {
            saida.innerHTML += `${c} &#x1f449`
        }
    }
    saida.innerHTML += '&#x1f3c1'

}