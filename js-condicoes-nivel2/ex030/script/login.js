function Entrar() {
  let usu = document.querySelector('input#txtusu')
  let sen = document.querySelector('input#txtsen')
  let res = document.querySelector('div#result')
  let entrar = usu.value;
  let senha = sen.value;

  if(entrar == 'jonasjps' && senha == '4j2p3s6') {
    res.innerHTML = '<p><mark>Usuario autenticado!&#x1F44D</mark></p>';
  }else {
    res.innerHTML =   '<p><strong>Login e/ou senha incorretos!</strong></p>';
  }
}