import React from 'react';
import { useState } from 'react';
export default function EditTodoForm({ editTodo, task }) {
    const [value, setValue] = useState(task.task)
    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id)
        setValue("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={value} placeholder='update task' onChange={(e) => setValue(e.target.value)}></input>
            <button type='submit' className='todo-btn' >update Task</button>
        </form>


    );
}