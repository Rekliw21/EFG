function converterTemperatura() {
    var celsius = parseFloat(document.getElementById('celsius').value);
    var fahrenheit = celsius * 9/5 + 32;
    var resultadoElemento = document.getElementById('resultado');
    
    resultadoElemento.innerHTML = 'A temperatura em Fahrenheit é ' + fahrenheit.toFixed(2) + ' °F';
  }