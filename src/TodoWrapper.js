import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

import { v4 as uuidv4 } from 'uuid';
import { isEditable } from '@testing-library/user-event/dist/utils';
import EditTodoForm from './EditTodoForm';

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
    const deleteTodo = (id) => {
        SetTodos(todos.filter(todo => todo.id != id))
    }
    const editTodo = (id) => {
        SetTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todos))
    }
    const editTask = (task, id) => {
        SetTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todos))

    }
    return (
        <div className="TodoWrapper">
            <h2> 🌟Get Things Done🌟 </h2>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (<Todo task={todo} key={index} toggleComplete={toggleComplete} editTodo={editTodo} deleteTodo={deleteTodo} />
                )
            ))}

        </div>
    );
}

