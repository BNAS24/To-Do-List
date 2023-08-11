import './taskbarGroup.css';
import TaskBar from './taskbar';

const TaskBarGroup = () => {

    const taskClass1 = "taskgroup";
    const taskBar = "taskbar";
    const taskBar1 = "taskbar1 taskbar";

    return (
        <div className={taskClass1}>
            <TaskBar className={taskBar1} />
            <TaskBar className={taskBar}/>
            <TaskBar className={taskBar}/>
            <TaskBar className={taskBar}/>
        </div>
    );
};

export default TaskBarGroup;
