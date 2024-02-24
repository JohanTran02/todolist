import { variables } from "./variables";

export function taskFunctions() {
    let li_element : HTMLLIElement;
    variables.ul_list.addEventListener("click", function (event) {
        const target = (<HTMLButtonElement>event.target);
        
        //om man klickar på en av knapparna ska den kolla på klassen remove eller done
        //kör den specifika funktionen enligt knappen
        li_element = <HTMLLIElement>target.closest("li");
        if(target instanceof HTMLButtonElement){
            checkButton((<HTMLButtonElement>target).classList[0],<HTMLLIElement>li_element);
        }

        //När man kryssar över att en uppgift är klar(Input-element)
        if(target instanceof HTMLInputElement){
            (<HTMLLIElement>li_element).classList.toggle("task-done");
        }
    });

    variables.ul_list.addEventListener("keydown", (event : KeyboardEvent) => {
        if(event.key === "Enter"){
            const task_desc = <HTMLSpanElement>li_element.querySelector("span");
            event.preventDefault();
            editTask(li_element);
            task_desc.blur();
        }
    });
}

//Funktion för knapparna
function checkButton(class_name : string, li_element : HTMLLIElement){
    class_name === "task-edit" ? editTask(li_element) : li_element.remove();
}

function editTask(li_element : HTMLLIElement){
    const task_desc = <HTMLSpanElement>li_element.querySelector("span");
    task_desc.contentEditable = task_desc.isContentEditable ? "false" : "true";
}

// function doneTask() {
//     ul_list.addEventListener("click", function (event) {
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





