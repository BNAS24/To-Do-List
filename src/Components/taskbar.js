import React from 'react';
import './styles/taskbar.css';

const TaskBar = ({ taskData, TaskTitle, DueDate, DateCreated, Standard_Class, Circle_Color, Circle_All, Description }) => (
    <div className="taskbar">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="circleAll">
            <circle cx="20" cy="20" r="18.5" fill="#979797" fillOpacity="0.16" stroke="#979797" strokeWidth="3" className={Circle_Color} />
        </svg>

        <div className='task-titleDiv'>
            <h4 className='task-title'> {/*This has to get changed to an input element*/}
                {taskData.tasktitle}
            </h4>
        </div>
        <div className='descriptionDiv'>
            <p className='description'>
                {taskData.description}
            </p>
        </div>
        <div className='dateCreatedDiv'>
            <p className='date-created'>{`Date Created ${''}`}</p> {/*The date will be dynamically  defined by a javascript function*/}
        </div>
        <div className='dueDateDiv'>
            <p className='due-date'>{`DueDate ${''}`}</p> {/*The date will be dynamically  defined by a javascript function*/}
        </div>

    </div>
);

export default TaskBar;

/*If if has an underscore to seperate its names than it's a class prop*/