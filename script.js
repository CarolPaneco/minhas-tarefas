
const addTaskButton = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');


function addTask() {
    const taskText = newTaskInput.value.trim();
    
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Botão para deletar a tarefa
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = () => taskItem.remove();

        // Marcar como concluída ao clicar
        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        // Limpar o campo de input
        newTaskInput.value = '';
    }
}

// Adicionar a tarefa ao clicar no botão
addTaskButton.addEventListener('click', addTask);

// Permitir adicionar a tarefa pressionando "Enter"
newTaskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
