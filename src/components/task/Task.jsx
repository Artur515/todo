import React from 'react';
import {FaTimes} from "react-icons/all";

const Task = ({task, deleteTask, handleToggleReminder}) => {

    return (
        <>
            <li onDoubleClick={() => handleToggleReminder(task.id)}
                className={`list-group-item d-flex justify-content-between align-items-center
                ${task.reminder ? ' active' : ''}`}>
              {task.text}
                <span>{task.day}</span>
                <p><FaTimes style={{color: 'tomato', cursor: 'pointer'}} onClick={() => deleteTask(task.id)}/></p>
            </li>
        </>
    );
};

export default Task;