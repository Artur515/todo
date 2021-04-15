import Task from "../task/Task";
import './tasks.css'

const Tasks = ({tasks, deleteTask, handleToggleReminder}) => {

    return (
        <div className='tasks_container'>
            <ul className='list-group tasks'>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} deleteTask={deleteTask}
                          handleToggleReminder={handleToggleReminder}/>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;