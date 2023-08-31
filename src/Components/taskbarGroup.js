import './styles/taskbarGroup.css';
import TaskBar from './taskbar';
import { NewTask } from './newtask';
import { useState } from 'react';
import { TaskContextProvider } from '../TaskModalContext'; 

const TaskBarGroup = () => {
    const [tasks, setTasks] = useState([]);

    const currentDate = new Date();
    const formattedDate = `Created: ${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

    const createTask = () => {
        const newTask = { 
            tasktitle: 'Task',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            timestamp: formattedDate
        };
        setTasks([...tasks, newTask]);
    };

    return (
        <TaskContextProvider>
        <div className='taskgroup-wrapper'>
            <div className="taskgroup">
                {tasks.map((task, index) => (
                    <TaskBar key={index} taskData={task} />
                ))}
                <NewTask createTask={createTask} />
            </div>
        </div>
        </TaskContextProvider>
    );
};

export default TaskBarGroup;
