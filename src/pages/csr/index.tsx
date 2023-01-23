import Todos from "@/components/Todos";
import { useEffect, useState } from "react";

export default function CSR() {
    const [todos, setTodos] = useState<any[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/todos')
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h2 className="text-3xl font-semibold text-center">Client Side Rendering</h2>
            {todos.length === 0 && <p>Loading...</p>}
            <Todos todos={todos} />
        </div>
    );
}