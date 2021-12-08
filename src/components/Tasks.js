import Task from './Task'

const Tasks = ({tasks, onDelete}) => {

    return (
        <div>
            <h1>
                {tasks.map( (task) => (
                    <Task task={task} onDelete={onDelete}/>
                ))}
            </h1>
        </div>
    )
}

export default Tasks
