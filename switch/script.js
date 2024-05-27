function calcularPreco() {
    const itemSelecionado = document.getElementById('item').value;
    let precoItem;
  
    switch (itemSelecionado) {
      case '1':
        precoItem = 10;
        break;
      case '2':
        precoItem = 20;
        break;
      case '3':
        precoItem = 30;
        break;
      default:
        precoItem = 0;
    }
  
    const quantidade = parseInt(prompt('Digite a quantidade desejada:', '1'));
    const precoTotal = precoItem * quantidade;
  
    const mensagem = precoTotal > 0 ? `O preço total é $${precoTotal}` : 'Selecione um item válido.';
    document.getElementById('precoTotal').textContent = mensagem;
  }