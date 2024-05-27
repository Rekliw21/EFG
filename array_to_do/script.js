const novaTarefaInput = document.getElementById('novaTarefa');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('listaTarefas');

let tarefas = [];

btnAdicionar.addEventListener('click', () => {
    const novaTarefa = novaTarefaInput.value.trim();
    if (novaTarefa !== '') {
        tarefas.push({ descricao: novaTarefa, concluida: false });
        atualizarListaTarefas();
        novaTarefaInput.value = '';
    }
});

function atualizarListaTarefas() {
    listaTarefas.innerHTML = '';
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.textContent = tarefa.descricao;
        li.style.color = tarefa.concluida ? 'green' : 'black';
        li.addEventListener('click', () => {
            tarefas[index].concluida = !tarefas[index].concluida;
            atualizarListaTarefas();
        });
        listaTarefas.appendChild(li);
    });
}