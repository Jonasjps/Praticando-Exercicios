    function Analizar() {
        let meses = new Array('Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez')
        let semana = new Array('Dom','Seg','Ter','Qua','Qui','Sex','Sab')
        let agora = new Date
        let dia = agora.getDate()
        let mes = agora.getMonth()
        let ano = agora.getFullYear() 
        let sem = agora.getDay()
        let hora = agora.getHours()
        let min = agora.getMinutes()
        let seg = agora.getSeconds()
        

        let res = document.querySelector('section#result')
        res.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
        res.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`
        res.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
        res.innerHTML += `<p>Dia da semana:<mark> ${semana[sem]}</mark></p>`
        res.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
        res.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`
        res.innerHTML += `<p>Segundos: <mark>${seg}</mark></p>`
        


    }