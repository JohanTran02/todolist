type Task = {
    desc : string;
    id : number;
}
const task_input = <HTMLInputElement>document.querySelector(".task-input");
const task_add = <HTMLButtonElement>document.querySelector(".task-add");
const task_clear = <HTMLButtonElement>document.querySelector(".task-clear");
const ul_list = <HTMLUListElement>document.querySelector(".task-list"); 

function taskAdd(this : HTMLButtonElement) : void{    
    let item = `
    <li class="task-item">
    <input type="checkbox" class="task-checkbox">
    <p class="task-desc">${task_input.value}</p>
    <button class="task-remove"></button>
    </li>`;

    ul_list.innerHTML += item;
}

function taskClear() : void {
    ul_list.innerHTML = "";
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