function verificar() {
    let agora = new Date
    let saida = document.querySelector('section#saida')
    saida.innerHTML = `<p>O que eu recebi do meu sistema foi <mark>${agora}</mark></p>`
    
}