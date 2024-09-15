import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

import { v4 as uuidv4 } from 'uuid';

export default function TodoWrapper() {
    const [todos, SetTodos] = useState([])
    const addTodo = todo => {
        SetTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
    }


    const toggleComplete = (id) => {
        SetTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }
    return (
        <div className="TodoWrapper">
            <h2> 🌟Get Things Done🌟 </h2>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todo task={todo} key={index} toggleComplete={toggleComplete} />
            ))}

        </div>
    );
}

