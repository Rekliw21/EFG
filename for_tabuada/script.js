function gerarTabuada() {
    // Limpa o conteúdo anterior da div da tabuada
    document.getElementById('tabuada').innerHTML = '';

    // Obtém o número inserido pelo usuário
    var numero = parseInt(document.getElementById('numero').value);

    // Verifica se o número é válido
    if (isNaN(numero)) {
        alert('Por favor, insira um número válido.');
        return;
    }

    // Cria uma tabela para exibir a tabuada
    var tabuadaHTML = '<h2>Tabuada do ' + numero + '</h2><table>';
    
    // Loop for para calcular e exibir a tabuada
    for (var i = 1; i <= 10; i++) {
        tabuadaHTML += '<tr><td>' + numero + ' x ' + i + '</td><td>=</td><td>' + (numero * i) + '</td></tr>';
    }
    
    tabuadaHTML += '</table>';

    // Exibe a tabuada na div
    document.getElementById('tabuada').innerHTML = tabuadaHTML;
}
