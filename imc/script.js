function calculateIMC() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    
    var imc = weight / (height * height);
    var resultElement = document.getElementById('result');
  
    var message;
  
    if (imc < 18.5) {
      message = 'Abaixo do peso';
    } else if (imc < 25) {
      message = 'Peso adequado';
    } else if (imc < 30) {
      message = 'Sobrepeso';
    } else if (imc < 35) {
      message = 'Obeso';
    } else {
      message = 'Muito obeso';
    }
  
    resultElement.innerHTML = 'Seu IMC é ' + imc.toFixed(2) + '. ' + message;
  }