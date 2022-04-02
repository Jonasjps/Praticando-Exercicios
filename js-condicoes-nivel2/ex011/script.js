function calcular() {
    
    let nom = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nom}`))
    let n2 = Number( window.prompt(`Além de ${n1} qual a outra nota de ${nom}`))
    final = (n1 + n2)/2

    let msg = ''
    if (final >=6) {
       msg =  'Meus parabens! &#x1F44F'
    }else {
        msg = 'Estude um pouco mais!'
    }
    
    let med = document.querySelector('section#media')
    med.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark></p>`
    med.innerHTML += `<p>As notas obtidas foram <mark>${n1}</mark> e <mark>${n2}</mark>.</p>`
    med.innerHTML += `<p>A média final será <mark>${final}</mark></p>`
    med.innerHTML += `<p>A mensagem que temos é: <strong>${msg}</strong></p>`

}