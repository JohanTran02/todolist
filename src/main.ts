import {v4 as uuidv4} from 'uuid';

type Task = {
    desc : string;
    id : string;
}

const task_input = <HTMLInputElement>document.querySelector(".task-input");
const task_add = <HTMLButtonElement>document.querySelector(".task-add");
const task_clear = <HTMLButtonElement>document.querySelector(".task-clear");
const ul_list = <HTMLUListElement>document.querySelector(".task-container"); 
// let task_array : Task[] = [];

function taskAdd(this : HTMLButtonElement) : void{
    if(!task_input.value){
        return;
    }

    const task : Task = {desc: task_input.value,id:uuidv4()};

    renderTask(task);
}

function taskClear() : void {
    ul_list.innerHTML = "";
}

function renderTask(task : Task){
    ul_list.innerHTML += `
    <li class="task-item">
    <input type="checkbox" class="task-checkbox ${task.id}">
    <p class="task-desc">${task.desc}</p>
    <button class="task-remove">X</button>
    </li>`;

    task_input.value = "";
}

task_add.addEventListener("click", taskAdd);
task_clear.addEventListener("click", taskClear);

ul_list.addEventListener("click", function(event) {
    if(event.target instanceof HTMLInputElement){
    const parent = <HTMLUListElement>event.target.parentElement;
    parent.classList.toggle("task-done");
    }

    if(event.target instanceof HTMLButtonElement){
        console.log(event.target);
        const parent = <HTMLUListElement>event.target.parentElement;
        parent.remove();
    }
});