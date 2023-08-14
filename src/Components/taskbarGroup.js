import './taskbarGroup.css';
import TaskBar from './taskbar';

const TaskBarGroup = () => {

    const taskClass1 = "taskgroup";
    const taskBar1 = "taskbar circle1 taskbar1";
    const taskBar2 = "taskbar circle2";
    const taskBar3 = "taskbar circle3";
    const taskBar4 = "taskbar circle4";
    const taskBar5 = "taskbar circle5";
    const taskBar6 = "taskbar circle6";


    /*only can allow 15 characters including spaces */
    const title1 = 'Task 1'; 
    const title2 = 'Task 2';
    const title3 = 'Task 3';
    const title4 = 'Task 4';
    const title5 = 'Task 5';
    const title6 = 'Task 6';

    const descrition1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tristique leo, ut volutpat elit lobortis sit amet. Sed semper volutpat imperdiet. Donec lacinia sit amet est ut elementum. Morbi lorem nibh, eleifend quis imperdiet vel, mattis a neque.'
    const descrition2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tristique leo, ut volutpat elit lobortis sit amet. Sed semper volutpat imperdiet. Donec lacinia sit amet est ut elementum. Morbi lorem nibh, eleifend quis imperdiet vel, mattis a neque.'
    const descrition3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tristique leo, ut volutpat elit lobortis sit amet. Sed semper volutpat imperdiet. Donec lacinia sit amet est ut elementum. Morbi lorem nibh, eleifend quis imperdiet vel, mattis a neque.'
    const descrition4 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tristique leo, ut volutpat elit lobortis sit amet. Sed semper volutpat imperdiet. Donec lacinia sit amet est ut elementum. Morbi lorem nibh, eleifend quis imperdiet vel, mattis a neque.'
    const descrition5 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tristique leo, ut volutpat elit lobortis sit amet. Sed semper volutpat imperdiet. Donec lacinia sit amet est ut elementum. Morbi lorem nibh, eleifend quis imperdiet vel, mattis a neque.'
    const descrition6 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tristique leo, ut volutpat elit lobortis sit amet. Sed semper volutpat imperdiet. Donec lacinia sit amet est ut elementum. Morbi lorem nibh, eleifend quis imperdiet vel, mattis a neque.'

    return (
        <div className={taskClass1}>
            <TaskBar className={taskBar1} circle="circle1" circDiv="circleAll" TaskTitle={title1} smallDescription={descrition1}/>
            <TaskBar className={taskBar2} circle="circle2" circDiv="circleAll" TaskTitle={title2} smallDescription={descrition2}/>
            <TaskBar className={taskBar3} circle="circle3" circDiv="circleAll" TaskTitle={title3} smallDescription={descrition3}/>
            <TaskBar className={taskBar4} circle="circle4" circDiv="circleAll" TaskTitle={title4} smallDescription={descrition4}/>
            <TaskBar className={taskBar5} circle="circle5" circDiv="circleAll" TaskTitle={title5} smallDescription={descrition5}/>
            <TaskBar className={taskBar6} circle="circle6" circDiv="circleAll" TaskTitle={title6} smallDescription={descrition6}/>
        </div>
    );
};

export default TaskBarGroup;
