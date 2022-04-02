 
function verificar() {
    let tur = document.querySelector('input#txttur')
    let res = document.querySelector('div#result')
    let ho = String(tur.value)
    ho = ho.toUpperCase();
    
    if(ho == 0) {
       alert('[ERRO]') 
    }else if(ho == 'MATUTINO') {
        res.innerHTML =  'BOM DIA'
    }else if (ho == 'VESPERTINO') {
        res.innerHTML =  'BOA TARDE'
    }else if(ho == 'NOTURNO') {
        res.innerHTML = 'BOA NOITE'
    } 
}
