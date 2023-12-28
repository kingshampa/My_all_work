const todoList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task');

function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText !== '') {
    const taskElement = document.createElement('li');
    taskElement.innerHTML = `
      <span>${taskText}</span>
      <button onclick="removeTask(this)">Remove</button>
    `;
    todoList.appendChild(taskElement);
    newTaskInput.value = '';
  }
}

function removeTask(button) {
  const taskElement = button.parentElement;
  todoList.removeChild(taskElement);
}
