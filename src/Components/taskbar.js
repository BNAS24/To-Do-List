import React from 'react';
import './taskbar.css';

const TaskBar = ({ className, circDiv, circle, TaskTitle }) => (
    <div className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className={circDiv}>
            <circle cx="20" cy="20" r="18.5" fill="#979797" fillOpacity="0.16" stroke="#979797" strokeWidth="3" className={circle} />
        </svg>

        <div className='task-titleDiv'>
            <h4 className='task-title'>
                {TaskTitle}
            </h4>
        </div>
    </div>
);

export default TaskBar;
