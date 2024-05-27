function gerarLista() {
    // Captura o elemento input onde o usuário insere o número
    let inputNumero = document.getElementById("numero");
    // Captura o valor digitado pelo usuário
    let numero = parseInt(inputNumero.value);

    // Captura o elemento UL onde os números serão exibidos
    let listaNumeros = document.getElementById("lista-numeros");
    // Limpa a lista antes de gerar uma nova
    listaNumeros.innerHTML = "";

    // Verifica se o valor inserido é um número válido
    if (!isNaN(numero)) {
        // Loop for para adicionar números de 1 até o número inserido na lista
        for (let i = 1; i <= numero; i++) {
            // Cria um novo elemento LI para cada número e adiciona à lista UL
            let novoItemLista = document.createElement("li");
            novoItemLista.textContent = i;
            listaNumeros.appendChild(novoItemLista);
        }
    } else {
        // Se o valor inserido não for um número válido, exibe uma mensagem de erro
        listaNumeros.innerHTML = "<li>Por favor, insira um número válido.</li>";
    }
}