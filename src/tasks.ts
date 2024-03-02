import { v4 as uuidv4 } from 'uuid';
import { Task } from './task';
import { variables } from './variables';

function addTask(this: HTMLButtonElement): void {
    if (!variables.task_input.value) {
        return;
    }

    const task: Task = { desc: variables.task_input.value, id: uuidv4() };

    renderTask(task);
}

function renderTask(task: Task) {
    const not_started = variables.ul_lists[0];
    not_started.innerHTML += `
    <li id="${task.id}" class="task-item" draggable="true">
        <input type="checkbox" class="task-checkbox">
        <span class="task-desc">${task.desc.replace(/(<[^>]+>)/gi, "")}</span>
        <div class="dropdown">
            <i class="fa-solid fa-bars"></i>
            <ul class="dropdown-content">
                <li class="task-edit">Edit</li>
                <li class="task-delete">Delete</li>
            </ul>
        </div>
    </li>`;

    variables.task_input.value = "";
}

function initTaskFuncs() {
    variables.task_add.addEventListener("click", addTask);
}

export { initTaskFuncs }