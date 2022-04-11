function calcular() {
    let n1 =Number(document.querySelector('input#txtn1').value)
    let res = document.querySelector('div#result')
    res.innerHTML = `<h2>Tabuada de ${n1}</h2>`

    let c = 1
    while(c <= 10) {
        res.innerHTML += `${n1} x ${c} = <strong>${n1*c}</strong><br>`
        c++
    }
}