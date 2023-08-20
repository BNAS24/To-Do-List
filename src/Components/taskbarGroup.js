import './styles/taskbarGroup.css';
import TaskBar from './taskbar';
import {NewTask} from './newtask';
import { useState } from 'react';

const TaskBarGroup = () => {

    const [tasks, setTasks] = useState([])

    const createTask = () => {
        const newTask = { 
            tasktitle: 'Task',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tristique leo, ut volutpat elit lobortis sit amet. Sed semper volutpat imperdiet. Donec lacinia sit amet est ut elementum. Morbi lorem nibh, eleifend quis imperdiet vel, mattis a neque.'
     }
        setTasks([...tasks, newTask])
    }


    return (
        <div className="taskgroup">
            {tasks.map((task, index) => (
                <TaskBar key={index} taskData={task} />
            ))}
            <NewTask createTask={createTask} className="bound"/>
        </div>
    );
};

export default TaskBarGroup;
