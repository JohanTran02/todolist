"use strict";

export const dropdown = (): void => {
    document.addEventListener("click", function (event) {
        const target = (<HTMLElement>event.target);

        if (!target.classList.contains("fa-bars")) {
            const dropdown_content = <HTMLUListElement>target.querySelector(".dropdown-content");
            if (!dropdown_content) return;
            dropdown_content.classList.remove("show");
            return;
        }

        const dropdown_content = <HTMLUListElement>(<HTMLElement>target.parentElement).querySelector(".dropdown-content");
        dropdown_content.classList.toggle("show", !dropdown_content.classList.contains("show"));

        // const ul_list = (<HTMLUListElement>(<HTMLElement>target).closest(".tasks")).querySelector(".task-container");
    })
}