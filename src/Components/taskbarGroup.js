import './styles/taskbarGroup.css';
import TaskBar from './taskbar';
import { NewTask } from './newtask';
import { useState } from 'react';

const TaskBarGroup = () => {

    const [tasks, setTasks] = useState([])

    const month = new Date()
    const day = new Date()
    const year = new Date()
    const date = `Created: ${month.getMonth()}/${day.getDay()}/${year.getFullYear()}`

    const createTask = () => {

        const newTask = { 
            tasktitle: 'Task',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tristique leo, ut volutpat elit lobortis sit amet. Sed semper volutpat imperdiet. Donec lacinia sit amet est ut elementum. Morbi lorem nibh, eleifend quis imperdiet vel, mattis a neque.',
            timestamp: date
     }
        setTasks([...tasks, newTask])

    }


    return (
        <div className='taskgroup-wrapper'>
        <div className="taskgroup">
            {tasks.map((task, index) => (
                <TaskBar key={index} taskData={task} />
            ))}
            <NewTask createTask={createTask} />
        </div>
        </div>
    );
};

export default TaskBarGroup;
