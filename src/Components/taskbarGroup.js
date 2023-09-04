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
            id: Date.now(), 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            timestamp: formattedDate
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
      };
      
    
    return (
        <TaskContextProvider>
        <div className='taskgroup-wrapper'>
            <div className="taskgroup">
                {tasks.map((task) => (
                    <TaskBar key={task.id} taskData={task} deleteTask={() => deleteTask(task.id)}/>
                ))}
                <NewTask createTask={createTask} />
            </div>
        </div>
        </TaskContextProvider>
    );
};

export default TaskBarGroup;
