function verificar() {
    let pe = document.querySelector('input#txtpe')
    let res = document.querySelector('div#result')
    let go = String(pe.value);

    let status = '';
    if(go < 20.7) {
        status = 'Abaixo do peso';
    }else if (go >= 20.7 && go < 26.4 ){
        status = 'Peso normal';
    }else if(go >= 26.4 && go < 27.8) {
        status = 'Pouco acima do peso';
    }else if(go >= 27.8 && go < 31.1) {
        status = 'Acima do peso';
    }else {
        status = 'Obeso';
    }
    res.innerHTML = `<mark><strong>${status}!</strong></mark>`
}