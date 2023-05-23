const taskInput = document.querySelector("#task-input");
const taskSection = document.querySelector(".tasks");

taskInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        createTask();
    }
});

document.querySelector('#push').onclick = function () {
    createTask();
};

function createTask() {
    if (taskInput.value.length === 0) {
        alert("Please enter a task");
    } else {
        const task = `
            <div class='task'>
                <label id='taskname'>
                    <input onclick='updateTask(this)' type='checkbox' id='check-task'>
                    <p>${taskInput.value}</p>
                </label>
                <div class='delete' onclick='deleteTask(this)'>
                    <i class='uil uil-trash'></i>
                </div>
            </div>
        `;
        taskSection.insertAdjacentHTML('beforeend', task);

        taskSection.offsetHeight >= 300
            ? taskSection.classList.add("overflow")
            : taskSection.classList.remove('overflow');

        taskInput.value = '';
    }
}

function deleteTask(task) {
    task.parentNode.remove();
}

function updateTask(task) {
    let taskItem = task.parentElement.querySelector('p');
    if (task.checked) {
        taskItem.classList.add("checked");
    } else {
        taskItem.classList.remove("checked");
    }
}
