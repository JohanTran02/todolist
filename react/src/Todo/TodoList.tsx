import { useState } from "react";
import TodoCard from "./TodoCard";

export default function TodoList() {
    const [input, setInput] = useState<string>("");
    const [addCard, setAddCard] = useState(true);

    return (
        <div className="w-[200px] h-min bg-slate-300 my-5 p-2 rounded-md flex flex-col gap-1">
            <input type="text" className="text-xl font-semibold capitalize" value={input}
                onChange={e => setInput(e.target.value)} />
            <ul className="rounded-sm flex flex-col gap-2">
                <TodoCard desc="desc" />
            </ul>

            {/* TODO när man klickar på knappen add a card ska den lägga till ett kort i en form*/}
            <button className="hover:bg-white rounded-md text-left px-2">Add a card</button>
        </div>
    );
}

