import TodoList from "./TodoList"

export default function TodoContainer() {
    return (
        <div className="bg-blue-300 my-10 flex flex-row px-4 gap-4">
            <TodoList />
            <TodoList />
            <TodoList />
            <TodoList />
        </div>
    );
}
