const list_item = <HTMLUListElement>document.querySelector(".task-item"); 
const task_checkbox = <HTMLInputElement>document.querySelector(".task-checkbox");

task_checkbox.addEventListener("click", function() {
    const parent = <HTMLUListElement>this.parentElement;
    parent.classList.toggle("task-done");
});
