const inputNota = document.getElementById('nota');
const btnAdicionar = document.getElementById('btnAdicionar');
const btnCalcular = document.getElementById('btnCalcular');
const resultado = document.getElementById('resultado');

let notas = [];

btnAdicionar.addEventListener('click', () => {
    const nota = parseFloat(inputNota.value);
    if (!isNaN(nota)) {
        notas.push(nota);
        inputNota.value = '';
    }
});

btnCalcular.addEventListener('click', () => {
    if (notas.length > 0) {
        const media = calcularMedia(notas);
        resultado.textContent = `A média das notas é: ${media.toFixed(2)}`;
    } else {
        resultado.textContent = 'Não há notas para calcular a média.';
    }
});

function calcularMedia(array) {
    const soma = array.reduce((total, nota) => total + nota, 0);
    return soma / array.length;
}
