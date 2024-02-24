type Variables = {
    task_input : HTMLInputElement,
    task_add : HTMLButtonElement,
    task_clear : HTMLButtonElement,
    ul_list : HTMLUListElement
}

const variables : Variables = {
    task_input : <HTMLInputElement>document.querySelector(".task-input"),
    task_add : <HTMLButtonElement>document.querySelector(".task-add"),
    task_clear : <HTMLButtonElement>document.querySelector(".task-clear"),
    ul_list : <HTMLUListElement>document.querySelector(".task-container")
}

export { variables };