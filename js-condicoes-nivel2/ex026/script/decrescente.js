function Exibir() {
    let n1 = parseFloat(document.querySelector('input#txtn1').value)
    let n2 = parseFloat(document.querySelector('input#txtn2').value)
    let n3 = parseFloat(document.querySelector('input#txtn3').value)
    let aux = n1
    if(n2 > n1) {
        aux = n2;
        n2 = n1;
        n1 = aux;
    }if(n3 > n1) {
        aux = n3;
        n3 = n1;
        n1 = aux;
    }if(n3 > n2) {
        aux = n3;
        n3 = n2;
        n2 = aux;
    }
    alert(`${n1}-${n2}-${n3}`)
}