 

function Inverter() {
    let n1 = parseFloat(document.querySelector('input#txtn1').value)//tambem posso usar (Number()) no lugar de (parsefloat())
    let n2 = parseFloat(document.querySelector('input#txtn2').value)
    let aux = n1
    n1 = n2;
    n2 = aux;
    window.alert(  `Antes: \n${n2} e ${n1}\n Ivertido: \n${n1} e ${aux}.\n`)
    
}
let a = 'vermelho';
let b = 'azul';
let c = a;
a=b;
b=c;

console.log(a)
console.log(b)
