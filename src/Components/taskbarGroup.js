import { TaskContextProvider } from '../TaskModalContext';
import './styles/taskbarGroup.css';
import TaskBar from './taskbar';

const TaskBarGroup = ({
    tasks,
    deleteTask,
}) => {

    console.log('task:', tasks)

    return (
        <TaskContextProvider>
            <div
                className='taskgroup-wrapper'>
                <div
                    className='taskgroup'>
                    {tasks?.map((task) => (
                        < TaskBar
                            key={task.id}
                            taskData={task}
                            deleteTask={() => deleteTask(task.id)}
                        />
                    ))}
                </div>
            </div>
        </TaskContextProvider>
    );
};

export default TaskBarGroup;
