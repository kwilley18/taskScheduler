import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState, useEffect} from 'react'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false); 
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      const resp = await fetch( "http://localhost:5000/tasks")
      const data = await resp.json()

      console.log(data); 

    }
    fetchTasks()

  }, [])

  const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
 //console.log(task); 
}
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks( tasks.map((task) => task.id === id  ? {...task, reminder: !task.reminder} : task ))
}
  return (
    <div className="App">
      <Header title="Time Tracker"  onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/> 
      {showAddTask && <AddTask  onAdd={addTask}/>}
      {tasks.length > 0 ?  <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks'}
    </div>
  );
}

export default App;
