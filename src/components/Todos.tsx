export default function Todos({ todos }: { todos: any[]; }) {
    return (
        <div className="flex flex-wrap items-center justify-center max-w-sm gap-5 mx-auto mt-5">
            {todos.map((todo: any) => (
                <p
                    key={todo._id}
                    className="py-2 text-center text-gray-700 bg-gray-200 rounded w-36"
                >
                    {todo.content}
                </p>
            ))}
        </div>
    );
}