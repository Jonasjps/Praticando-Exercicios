function ações() {
    let n1 = Number( window.prompt('Primeiro valor:'))
    let n2 = Number( window.prompt('Segundo valor:'))
    let res = Number( window.prompt(`Valores informados:${n1} e ${n2}.\nO que vamos fazer?\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir\n`))
    let mult = document.querySelector('section#multiplas')
    mult.innerHTML = `<h2>Calculando...</h2>`
    switch (res) { // A estrutura switch basicamente permite você testar valores dentro de uma variável ou expressão. Ela é compatível apenas com números inteiros e strings
        case 1:
            mult.innerHTML += `${n1} + ${n2} = <strong>${n1+n2}</strong>`
            break // O break é obrigatório em cada case. Se não for colocado, acontecerá a execução de vários comandos indesejados de outros cases
        case 2:
            mult.innerHTML += `${n1} - ${n2} = <strong>${n1-n2}</strong>`
            break
        case 3:
            mult.innerHTML += `${n1} x ${n2} = <strong>${n1*n2}</strong>`
            break
        case 4:
            mult.innerHTML += `${n1} / ${n2} =<strong> ${n1/n2}</strong>`
            break
        default:// Se o usuário não digitar nenhum dos valores acima, vai cair aqui
        mult.innerHTML += `OPÇÃO INVALIDA! Você digitou ${n1} e ${n2}, mas não sei o que quer fazer com eles.`
            break
            
    }
}