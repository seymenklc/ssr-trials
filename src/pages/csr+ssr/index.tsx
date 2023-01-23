import Todos from "@/components/Todos";
import { useEffect, useState } from "react";

export default function CSRSSR({ todos }: { posts: any[], todos: any[]; }) {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/todos')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div className="flex gap-5 w-max h-max">
            <div>
                <h2 className="text-3xl font-semibold text-center">Client Side Rendering</h2>
                <div className="flex flex-col items-center justify-center gap-2 mt-2">
                    {users.length === 0 && <p>Loading...</p>}
                    <Todos todos={users} />
                </div>
            </div>
            <hr className="my-5" />
            <div>
                <h2 className="text-3xl font-semibold text-center">Server Side Rendering</h2>
                <Todos todos={todos} />
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/todos');
    const todos = await res.json();

    return { props: { todos } };
}