// Captura o elemento UL onde os números serão exibidos
let listaNumeros = document.getElementById("lista-numeros");

// Loop for para adicionar números de 1 a 10 na lista
for (let i = 1; i <= 10; i++) {
    // Cria um novo elemento LI para cada número e adiciona à lista UL
    let novoItemLista = document.createElement("li");
    novoItemLista.textContent = i;
    listaNumeros.appendChild(novoItemLista);
}