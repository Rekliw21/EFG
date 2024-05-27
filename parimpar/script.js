function verificarNumero() {
    // Captura o número inserido pelo usuário
    var numero = parseInt(document.getElementById("numero").value);
    
    // Verifica se o número é par ou ímpar
    if (numero % 2 === 0) {
        // Se for par, exibe os números pares de 0 até o número inserido
        for (var i = 0; i <= numero; i += 2) {
            //console.log(i); // Exibe os números pares no console (pode ser substituído por alert para exibir na página)
            paresHTML += '<tr><td>' + numero + ' x ' + i + '</td><td>=</td><td>' + (numero * i) + '</td></tr>';
        }
        
        tabuadaHTML += '</table>';
    
        // Exibe a tabuada na div
        document.getElementById('tabuada').innerHTML = tabuadaHTML;
    }
        }
    } else {
        // Se for ímpar, exibe os números ímpares de 1 até o número inserido
        for (var j = 1; j <= numero; j += 2) {
            //console.log(j); // Exibe os números ímpares no console (pode ser substituído por alert para exibir na página)
            alert(j);
        }
    }
}        
