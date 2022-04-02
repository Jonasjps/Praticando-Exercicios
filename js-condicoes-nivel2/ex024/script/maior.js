function Maior() {
    let n1 = parseFloat(document.querySelector('input#txtn1').value)
    let n2 = parseFloat(document.querySelector('input#txtn2').value)
    let n3 = parseFloat(document.querySelector('input#txtn3').value)
    let maior = n1;
    if(n2 > maior) {
       maior = n2;
    }if(n3 > maior) {
        maior = n3;
    }
    window.alert(`${maior} é MAIOR!`)
}