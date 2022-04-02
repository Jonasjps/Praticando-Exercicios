function checar() {
    let letra = document.querySelector('input#txtca')
    let res = document.querySelector('div#result')
    letra = letra.value.toLowerCase();
    if(letra == 0) {
        res.innerHTML = '<P><mark><strong>[ERRO]</strong> Verifique os nados e tente novamente!</mark></P>'
    }else if(letra == 'a'|| letra == 'e'|| letra == 'i' || letra == 'o' || letra == 'u') {
        res.innerHTML = '<p><mark><strong>VOGAL</strong></mark></p>'
    }else   {
        res.innerHTML = '<p><mark><strong>CONSOANTE</strong></mark></p>'
    }
   
   
   
   
     /*tambem posso fazer essa função unando o 'ALERT'
    if(letra == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    if(letra == 'a'|| letra == 'e'|| letra == 'i' || letra == 'o' || letra == 'u') {
        window.alert('VOGAL')
    }else  {
        window.alert('CONSOANTE')
    }*/
    
}