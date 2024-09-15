import React from 'react';
import { useState } from 'react';
export default function TodoForm({ addTodo }) {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value)
        setValue("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={value} placeholder='what is the task today' onChange={(e) => setValue(e.target.value)}></input>
            <button type='submit' className='todo-btn' >Add Task</button>
        </form>


    );
}