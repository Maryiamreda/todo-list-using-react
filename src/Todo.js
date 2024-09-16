import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function todo({ task, editTodo, deleteTodo, toggleComplete }) {
    return (
        <div className="Todo">
            <div style={{ display: 'inline-flex', gap: '20px' }}>
                <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
                <div style={{ display: 'inline-flex', gap: '20px' }}>
                    <FontAwesomeIcon className="edit-icon" icon={faPenToSquare}
                        onClick={() => editTodo(task.id)}
                    />
                    <FontAwesomeIcon className="delete-icon" icon={faTrash}
                        onClick={() => deleteTodo(task.id)}
                    />
                </div></div>

        </div>
    );
}
