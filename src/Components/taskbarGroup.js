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
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            timestamp: formattedDate
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (taskToDelete) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
      };
    
    return (
        <TaskContextProvider>
        <div className='taskgroup-wrapper'>
            <div className="taskgroup">
                {tasks.map((task, index) => (
                    <TaskBar key={index} taskData={task} deleteTask={() => deleteTask(task)}/>
                ))}
                <NewTask createTask={createTask} />
            </div>
        </div>
        </TaskContextProvider>
    );
};

export default TaskBarGroup;
