import { variables } from "./variables";

export function taskFunctions(): void {
    let li_element: HTMLLIElement;
    variables.ul_lists.forEach((ul_element: HTMLUListElement) => {
        ul_element.addEventListener("click", function (event) {
            const target = (<HTMLButtonElement>event.target);

            //om man klickar på en av knapparna ska den kolla på klassen remove eller done
            //kör den specifika funktionen enligt knappen
            li_element = <HTMLLIElement>target.closest("li");

            if (target instanceof HTMLButtonElement) {
                checkButton((<HTMLButtonElement>target).classList[0], <HTMLLIElement>li_element);
            }

            //Om du kryssar i checkboxen ska den ge klassen task-done och flytta den till finished ul-listan
            if (target instanceof HTMLInputElement) {
                const finished = variables.ul_lists[2];
                const wip = variables.ul_lists[1];
                const span = <HTMLSpanElement>li_element.querySelector("span");
                (span.classList.toggle("task-done") ? finished : wip).append(li_element);
            }
        });

        ul_element.addEventListener("keydown", (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                const task_desc = <HTMLSpanElement>li_element.querySelector("span");
                event.preventDefault();
                editTask(li_element);
                task_desc.blur();
            }
        });
    })

}

//Funktion för knapparna
function checkButton(class_name: string, li_element: HTMLLIElement) {
    class_name === "task-edit" ? editTask(li_element) : li_element.remove();
}

function editTask(li_element: HTMLLIElement) {
    const task_desc = <HTMLSpanElement>li_element.querySelector("span");
    task_desc.contentEditable = task_desc.isContentEditable ? "false" : "true";
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