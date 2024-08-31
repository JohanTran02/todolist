export default function TodoCard({ desc }: { desc: string }) {
    return (
        <li>
            <p className="bg-slate-100 p-2 rounded-md break-words">
                {desc}
            </p>
        </li>
    );
}
