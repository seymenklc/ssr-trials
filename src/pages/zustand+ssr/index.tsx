import Todos from '@/components/Todos';
import { create } from 'zustand';

interface Todo {
    id: number;
    isDone: boolean;
    content: string;
}

type TodoState = {
    todos: Todo[];
    addTodo: (todos: Todo[]) => void;
};

const usePokemonStore = create<TodoState>(set => ({
    todos: [],
    addTodo: (todos: Todo[]) => set({ todos })
}));

export async function getServerSideProps() {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();

    const { getState } = usePokemonStore;

    getState().addTodo(data);

    return {
        props: {
            todos: getState().todos
        }
    };
}

export default function ZustandSSR({ todos }: { todos: Todo[]; }) {
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center">Zustand + SSR</h2>
            <Todos todos={todos} />
        </div>
    );
}
