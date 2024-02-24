import {v4 as uuidv4} from 'uuid';
import { Task } from './task';
import { variables } from './variables';

function addTask(this : HTMLButtonElement) : void{
    if(!variables.task_input.value){
        return;
    }

    const task : Task = {desc: variables.task_input.value,id:uuidv4()};

    renderTask(task);
}

function clearTask() : void {
    variables.ul_list.innerHTML = "";
}

function renderTask(task : Task){
    variables.ul_list.innerHTML += `
    <li class="task-item ${task.id}">
    <input type="checkbox" class="task-checkbox">
    <span class="task-desc">${task.desc}</span>
    <button class="task-remove">X</button>
    <button class="task-edit">Edit</button>
    </li>`;

    variables.task_input.value = "";
}

function initTaskFuncs(){
    variables.task_add.addEventListener("click", addTask);
    variables.task_clear.addEventListener("click", clearTask);    
}

export {initTaskFuncs}