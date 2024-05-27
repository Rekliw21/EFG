function calcularMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
  
    var media = (nota1 + nota2 + nota3) / 3;
    var resultadoElemento = document.getElementById('resultado');
    var mensagem;
  
    if (media >= 7) {
      mensagem = 'Parabéns! Você foi aprovado com média ' + media.toFixed(2);
    } else {
      mensagem = 'Infelizmente você foi reprovado com média ' + media.toFixed(2);
    }
  
    resultadoElemento.innerHTML = mensagem;
  }
  