import { variables } from "./variables";

export function taskSearch(): void {
    variables.task_search.addEventListener("input", (event) => {
        const target_text = (<HTMLInputElement>event.target).value;
        taskFilter(target_text);
    })
}

function taskFilter(target_text: string) {
    const task_items = document.querySelectorAll<HTMLSpanElement>(".task-item > span");

    //Visa sökningen som stämmer 
    [...task_items].map(item => {
        const li_element = item.closest("li");
        (<HTMLLIElement>li_element).style.display = String(item.textContent).includes(target_text) || (<HTMLLIElement>li_element).classList[1].includes(target_text) ? "flex" : "none";
    });
}

// Gammal kod för reflektering
// [...task_items].filter((item : HTMLSpanElement) => !(<String>item.textContent).includes(target_text)).map(span =>{
//     const li_element = span.closest("li");
//     // (<HTMLLIElement>li_element).style.display =
// })