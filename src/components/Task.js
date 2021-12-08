import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete}) => {
    return (
        <div>
            <h3>{task.name} 
                <FaTimes style={{color: "red"}} onClick={() => onDelete(task.id)} />
            </h3>
        </div>
    )
}

export default Task
