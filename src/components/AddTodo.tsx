import { useState } from 'react';

export default function AddTodo() {
    const [value, setValue] = useState<string>('');

    const handleAddTodo = async () => {
        const res = await fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: value }),
        });

        if (!res.ok) throw new Error('Error adding todo');

        setValue('');
    };

    return (
        <div>
            <h2 className="mb-3 text-3xl font-semibold text-center">Add Todo</h2>
            <input

                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                onChange={e => setValue(e.target.value)}
                value={value}
                type="text"
            />
            <button
                className="w-full p-2 mt-2 text-white bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                onClick={handleAddTodo}
            >
                Add Todo
            </button>
        </div >
    );
}