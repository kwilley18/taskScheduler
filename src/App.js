import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: '1',
        name: 'Appointment', 
        day: 'Feb 2, 2021',
        reminder: true, 
    },
    {
        id: '2',
        name: 'Appointment2', 
        day: 'Feb 11, 2021',
        reminder: true, 
    },
    {
        id: '3',
        name: 'Appointment3', 
        day: 'March 11, 2021',
        reminder: true, 
  }
])

const deleteTask = (id) => {
  setTasks(tasks.filter( (task) => task.id !== id))
}

const taskReminder = (id) => {
  
}
  return (
    <div className="App">
      <Header title="Time Tracker" /> 
      <Tasks tasks = {tasks} onDelete={deleteTask}/> 
    </div>
  );
}

export default App;
