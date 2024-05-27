const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const lancheSelecionado = document.getElementById('lanche').value;
    const bebidaSelecionada = document.getElementById('bebida').value;
    const acompanhamentoSelecionado = document.getElementById('acompanhamento').value;

    let precoLanche, precoBebida, precoAcompanhamento;

    switch (lancheSelecionado) {
        case 'xburger':
            precoLanche = 10.00;
            break;
        case 'xsalada':
            precoLanche = 8.00;
            break;
        case 'vegetariano':
            precoLanche = 7.00;
            break;
    }

    switch (bebidaSelecionada) {
        case 'refrigerante':
            precoBebida = 2.50;
            break;
        case 'suco':
            precoBebida = 3.00;
            break;
          case 'agua':
            precoBebida = 1.50;
            break;
        }
      
        switch (acompanhamentoSelecionado) {
          case 'batatafrita':
            precoAcompanhamento = 2.00;
            break;
          case 'onionrings':
            precoAcompanhamento = 3.00;
            break;
          case 'salada':
            precoAcompanhamento = 1.00;
            break;
        }
      
        // Calcula preço total
        const precoTotal = precoLanche + precoBebida + precoAcompanhamento;
      
        // Mostra o resultado
        resultado.innerHTML = `O valor total do seu pedido é: R$ ${precoTotal.toFixed(2)}`;
      });