import React, {useState} from 'react';
import './newTask.css'

const NewTask = ({handleAddTask}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please add a task')
            return
        }
        handleAddTask({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)

    }
    return (<>
            <form style={{width: '50%', marginBottom: '50px'}} onSubmit={onSubmit}  >
                <div className="form-group row">
                    <label className="col-form-label" htmlFor="inputDefault">Task</label>
                    <input type="text" className="form-control" placeholder="Add task" id="inputDefault"
                           value={text}
                           onChange={(event) => setText(event.target.value)}
                    />
                </div>
                <div className="form-group row">
                    <label className="col-form-label" htmlFor="inputDefault">Day & Time</label>
                    <input type="text" className="form-control" placeholder="Add Day & Time" id="inputDefault"
                           value={day}
                           onChange={(event) => {
                               setDay(event.target.value)
                           }}
                    />
                </div>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck2" value={reminder}
                           onChange={(event => setReminder(event.currentTarget.checked))}
                           checked={reminder}
                    />
                    <label className="custom-control-label" htmlFor="customCheck2">Set Reminder</label>
                </div>
                <button  type="submit" className="btn btn-outline-primary form-button" style={{margin: '10px'}}>Save
                    Task
                </button>
            </form>

        </>

    );
};

export default NewTask;