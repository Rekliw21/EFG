function calcularTotal() {
    var pulseira = parseInt(document.getElementById('pulseira').value);
    var brinco = parseInt(document.getElementById('brinco').value);
    var colar = parseInt(document.getElementById('colar').value);
    
    var total = pulseira + brinco + colar;
    
    switch (total) {
        case 0:
            document.getElementById('resultado').innerHTML = "Por favor, escolha pelo menos um item.";
            break;
        default:
            document.getElementById('resultado').innerHTML = "Total do pedido: R$ " + total.toFixed(2);
    }
}