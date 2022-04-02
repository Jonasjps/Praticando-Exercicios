function calcular() {
    let ano = Number( window.prompt('Emque ano você nasceu?'))
    let agora = new Date
    let anoatual = agora.getFullYear()
    
    let idade = anoatual - ano
    let id = document.querySelector('div#idade')
    id.innerHTML = `<p>Quem nasceu em ${ano} vai completar<strong> ${idade}</strong> anos em 2022.</p>`
    
}