import { variables } from "./variables";

export function taskFunctions(): void {
    let li_element: HTMLLIElement;
    document.addEventListener("click", function (event) {
        const target = (<HTMLElement>event.target);
        li_element = <HTMLLIElement>(<HTMLLIElement>target.parentElement).closest("li");

        if (!li_element) return;

        //Om du kryssar i checkboxen ska den ge klassen task-done och flytta den till finished ul-listan
        if (target instanceof HTMLInputElement) {
            const finished = variables.ul_lists[2];
            const wip = variables.ul_lists[1];
            const span = <HTMLSpanElement>li_element.querySelector("span");
            (span.classList.toggle("task-done") ? finished : wip).append(li_element);
        }

        if (target instanceof HTMLLIElement) {
            checkFunction((<HTMLLIElement>event.target).className, <HTMLLIElement>li_element);
        }
    });

    document.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            const task_desc = <HTMLSpanElement>li_element.querySelector("span");
            event.preventDefault();
            editTask(li_element);
            task_desc.blur();
        }
    });
}

// Funktion för knapparna
function checkFunction(class_name: string, li_element: HTMLLIElement) {
    const dropdown_content = <HTMLUListElement>li_element.querySelector(".dropdown-content");
    class_name === "task-edit" ? editTask(li_element) : li_element.remove();
    dropdown_content.classList.remove("show");
}

function editTask(li_element: HTMLLIElement) {
    const task_desc = <HTMLSpanElement>li_element.querySelector("span");
    task_desc.contentEditable = task_desc.isContentEditable ? "false" : "true";
    task_desc.focus();
}

//Gammal kod för reflektering
// function doneTask() {
//     ul_lists.addEventListener("click", function (event) {
//         if (event.target instanceof HTMLInputElement) {
//             const parent = <HTMLUListElement>event.target.parentElement;
//             parent.classList.toggle("task-done");
//         }

//         if (event.target instanceof HTMLButtonElement) {
//             const parent = <HTMLUListElement>event.target.parentElement;
//             parent.remove();
//         }
//     });
// }