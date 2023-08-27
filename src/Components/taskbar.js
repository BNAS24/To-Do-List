import React from 'react';
import './styles/taskbar.css';
import { TaskModal } from './taskmodal.js';

const TaskBar = ({ taskData, TaskTitle, DueDate, DateCreated, Standard_Class, Circle_Color, Circle_All, Description }) => {


    return (
        <div className="taskbar">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="circleAll">
                <circle cx="20" cy="20" r="18.5" fill="#979797" fillOpacity="0.16" stroke="#979797" strokeWidth="3" className={Circle_Color} />
            </svg>

            <div className='task-titleDiv'>
                <input className='task-title'
                    type='text'
                    placeholder='Task Title'
                    maxLength={100}
                >

                </input>
            </div>
            <div className='descriptionDiv'>
                <p className='description'>
                    {taskData.description}
                </p>
            </div>
            <div className='dateCreatedDiv'>
                <p className='date-created'>{taskData.timestamp}</p> {/*The date will be dynamically  defined by a javascript function*/}
            </div>
            <div className='dueDateDiv'>
                <label>Due:</label>
                <input className='due-date'
                    type='date'
                    placeholder='Due Date'
                    maxLength={15}
                >
                </input> {/*The date will be dynamically  defined by a javascript function*/}
            </div>

            {/*Task Modal*/}

            <TaskModal dateCreated={taskData.timestamp}/>

        </div>
    );

}

export default TaskBar;

/*If if has an underscore to seperate its names than it's a class prop*/