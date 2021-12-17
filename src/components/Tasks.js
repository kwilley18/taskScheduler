import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <div>
            <h1>
                {tasks.map( (task) => (
                    <Task task={task} onDelete={onDelete} onToggle={onToggle} />
                ))}
            </h1>
        </div>
    )
}

export default Tasks
