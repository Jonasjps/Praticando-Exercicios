var c = 4
var fat = 1
while(c > 1) {
    console.log (`${c} x `) 
    fat *= c
    c--
}
console.log  (`1 =  ${fat.toLocaleString('pt-BR')}`)