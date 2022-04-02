function Verificar() {
    let cpf = document.querySelector('input#txtnum')
    let res = document.querySelector('div#result')
    let val = cpf.value;
    if(val == 0) {
       alert('[ERRO] Preencha os dados corretamente!')
    }else if( val == '72796723100') {
        res.innerHTML = '<p><mark><strong>CPF da fofinha &#x2764!</strong></mark></p>'
    }else if(val == '05206159131') {
        res.innerHTML = '<p><mark><strong>CPF do Joan &#x1F601!</strong></mark></p>'
    }else {
        res.innerHTML = '<p><mark><strong>CPF invalido!</strong></mark></p>'
    }
}