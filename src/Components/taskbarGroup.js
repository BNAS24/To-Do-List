import './taskbarGroup.css';
import TaskBar from './taskbar';

const TaskBarGroup = () => {

    const taskClass1 = "taskgroup";
    const taskBar1 = "taskbar circle1 taskbar1";
    const taskBar2 = "taskbar circle2";
    const taskBar3 = "taskbar circle3";
    const taskBar4 = "taskbar circle4";


    const title1 = 'Task 4 kkk l eq'; /*only can allow 15 characters including spaces */
    const title2 = 'Task 2';
    const title3 = 'Task 3';
    const title4 = 'Task 4';

    return (
        <div className={taskClass1}>
            <TaskBar className={taskBar1} circle="circle1" circDiv="circleAll" TaskTitle={title1}/>
            <TaskBar className={taskBar2} circle="circle2" circDiv="circleAll" TaskTitle={title2}/>
            <TaskBar className={taskBar3} circle="circle3" circDiv="circleAll" TaskTitle={title3}/>
            <TaskBar className={taskBar4} circle="circle4" circDiv="circleAll" TaskTitle={title4}/>
        </div>
    );
};

export default TaskBarGroup;
