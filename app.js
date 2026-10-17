const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Escuchar cuando el usuario envía el formulario
taskForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    addTaskToDOM(taskText);
    taskInput.value = ''; // Limpiar el input
});

function addTaskToDOM(text) {
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = text;
    span.addEventListener('click', () => {
        li.classList.toggle('completed'); // Tachar al hacer clic
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        li.remove(); // Borrar tarea
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}