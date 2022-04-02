

function cores() {
    let sema = document.querySelector('input#txtsem')
    let sem = String(sema.value)
    sem = sem.toLowerCase();
    
    if(sem == 'verde') {
        alert('PODE PASSAR!')
    }else if(sem == 'vermelho') {
        alert('PARE!')
    }else if(sem == 'amarelo') {
        alert('ATENÇÃO!')
    }else {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }

}