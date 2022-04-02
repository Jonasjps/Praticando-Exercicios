function maior() {
    let n1 = Number( window.prompt('Digite um número:'))
    let n2 = Number( window.prompt('Digite outro número:'))
    
    let val = document.querySelector('section#val')
    if( n1 > n2 ) {
        val.innerHTML = `<p>Analizando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n1}</strong></p>`
    }else if (n1 < n2 ) {
        val.innerHTML = `<p>Analizando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n2}</strong></p> `
    }else {
        val.innerHTML = `<p>Analizando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, ambos são <strong>IGUAIS</strong>!</p>`
    }
}