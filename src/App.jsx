import './App.css';
import Header from "./components/header/Header";
import Tasks from "./components/tasks/Tasks";
// import {tasksList} from "./service/tasks";
import {useEffect, useState} from "react";
import NewTask from "./components/addTask/NewTask";


const App = () => {
    const tasksList = JSON.parse(localStorage.getItem('tasks'))
    const [tasks, setTasks] = useState(tasksList ? tasksList : [])
    const [showAdd, setShowAdd] = useState(false)
    //add new task
    const handleAddTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])
//delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((item) => {
                return item.id !== id
            })
        )
    }
//Toggle
    const handleToggleReminder = (id) => {
        setTasks(tasks.map((task) =>
                task.id === id ? {...task, reminder: !task.reminder} : task
            )
        )
    }

    return (
        <div className='container jumbotron'>
            <Header handleShowAdd={() => setShowAdd(!showAdd)} title={'Todo App'} show={showAdd}/>
            {showAdd && <NewTask handleAddTask={handleAddTask}/>}
            {tasks.length > 0 ?
                <Tasks tasks={tasks} deleteTask={deleteTask} handleToggleReminder={handleToggleReminder}/> :
                <div><h2>No Tasks today</h2></div>}
        </div>
    );
}

export default App



