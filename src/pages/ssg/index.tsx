import Todos from "@/components/Todos";

export default function SSG({ todos }: { todos: any[]; }) {
    return (
        <div>
            <h2 className="text-center font-semibold text-3xl">Server Side Rendering</h2>
            <Todos todos={todos} />
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/todos');
    const todos = await res.json();

    return {
        props: {
            todos
        }
    };
}