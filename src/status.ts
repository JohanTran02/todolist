import { variables } from "./variables";

export const dragging = () => variables.ul_lists.map((ul_element: HTMLUListElement) => {
    ul_element.addEventListener("dragstart", (event: DragEvent) => {
        if (event.dataTransfer) {
            event.dataTransfer.setData("text/html", (<HTMLLIElement>event.target).id);
        }
    })

    ul_element.addEventListener("dragover", (event) => {
        event.preventDefault();
    })

    ul_element.addEventListener("drop", (event) => {
        event.preventDefault();

        const data = (<DataTransfer>event.dataTransfer).getData("text/html");
        const li_element = (<HTMLLIElement>document.getElementById(data));

        if (li_element) {
            const span = <HTMLSpanElement>li_element.querySelector(`span`)
            const checkbox = <HTMLInputElement>li_element.querySelector("input");

            checkbox.checked = span.classList.toggle("task-done", ul_element.id === "finished");
            ul_element.append(li_element);
        }
    })
})

