import { variables } from "./variables";

export function taskSearch(): void {
    variables.tasks.forEach(task => {
        const ul_list = <HTMLUListElement>task.querySelector(".task-container");
        const task_function = <HTMLDivElement>task.querySelector(".task-functions");
        task_function.addEventListener("input", function (event) {
            const target_text = (<HTMLInputElement>event.target).value;
            taskFilter(target_text, ul_list);
        })

        task_function.addEventListener("click", function (event) {
            const target = (<HTMLButtonElement>event.target);
            if (!target) return;

            if (target.classList.contains("task-delete")) ul_list.innerHTML = "";
        })
    })
}

function taskFilter(target_text: string, ul_list: HTMLUListElement) {
    const task_items = ul_list.querySelectorAll<HTMLSpanElement>(".task-item > span");

    //Visa sökningen som stämmer 
    [...task_items].map(item => {
        const li_element = item.closest("li");
        (<HTMLLIElement>li_element).style.display = String(item.textContent).includes(target_text) || (<HTMLLIElement>li_element).id.includes(target_text) ? "flex" : "none";
    });
}

// Gammal kod för reflektering
// [...task_items].filter((item : HTMLSpanElement) => !(<String>item.textContent).includes(target_text)).map(span =>{
//     const li_element = span.closest("li");
//     // (<HTMLLIElement>li_element).style.display =
// })