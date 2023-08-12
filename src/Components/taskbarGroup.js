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

    const descrition1 = 'what the fuck is up'
    const descrition2 = 'nothing much chicken butt'
    const descrition3 = 'i cant complain im just out here maintaining, living my lifeNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
    const descrition4 = 'This is also just some random text I picked up'

    return (
        <div className={taskClass1}>
            <TaskBar className={taskBar1} circle="circle1" circDiv="circleAll" TaskTitle={title1} smallDescription={descrition1}/>
            <TaskBar className={taskBar2} circle="circle2" circDiv="circleAll" TaskTitle={title2} smallDescription={descrition2}/>
            <TaskBar className={taskBar3} circle="circle3" circDiv="circleAll" TaskTitle={title3} smallDescription={descrition3}/>
            <TaskBar className={taskBar4} circle="circle4" circDiv="circleAll" TaskTitle={title4} smallDescription={descrition4}/>
        </div>
    );
};

export default TaskBarGroup;
