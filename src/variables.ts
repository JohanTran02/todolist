type Variables = {
    task_add: HTMLButtonElement,
    task_clear: HTMLButtonElement,
    task_input: HTMLInputElement,
    task_search: HTMLInputElement,
    ul_lists: HTMLUListElement[],
    tasks: HTMLDivElement[]
}

const variables: Variables = {
    task_add: <HTMLButtonElement>document.querySelector(".task-add"),
    task_clear: <HTMLButtonElement>document.querySelector(".task-clear"),
    task_input: <HTMLInputElement>document.querySelector(".task-input"),
    task_search: <HTMLInputElement>document.querySelector(".task-search"),
    ul_lists: [...document.querySelectorAll<HTMLUListElement>(".task-container")],
    tasks: [...document.querySelectorAll<HTMLDivElement>(".tasks")]
}

export { variables };