import React, { useState, useEffect } from 'react';
import './styles/taskbar.css';
import { TaskModal } from './taskmodal.js';
import { useTaskContext, TaskContextProvider } from '../TaskModalContext';


const TaskBarContext = ({ taskData, priorityChecker }) => {
    return (
        <>
            <TaskContextProvider>
                <TaskBar taskData={taskData} circleColor={priorityChecker} />
            </TaskContextProvider>
        </>
    );
};

const TaskBar = ({ taskData, priorityChecker }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const { taskTitle, setTaskTitle, dueDate, setDueDate, descrpContent, selectedPriority } = useTaskContext();

    const updateTitle = (event) => {
        setTaskTitle(event.target.value);
    };

    const updateDueDate = (event) => {
        setDueDate(event.target.value);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    useEffect(() => {
        const escapeModal = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", escapeModal);

        return () => {
            document.removeEventListener("keydown", escapeModal);
        };
    }, []);

    const getPriorityColor = (selectedPriority) => {
        switch (selectedPriority) {
          case 'P1':
            return 'var(--scheme-red)';
          case 'P2':
            return 'var(--scheme-orange)';
          case 'P3':
            return 'var(--scheme-blue)';
          default:
            return 'var(--grey-light)';
        }
      };

    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    const completeButton = (event) => {
        stopPropagation(event);
        // Additional functionality will be added here for the special characteristics of the completebutton
    }

    return (
        <>
            <div className="taskbar" onClick={openModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="circleAll">
                    <circle cx="20" cy="20" r="18.5" fill="#979797" fillOpacity="0.16" stroke={getPriorityColor(selectedPriority)} strokeWidth="3" className={priorityChecker} onClick={completeButton} />
                </svg>

                <div className='task-titleDiv' onClick={stopPropagation}>
                    <input className='task-title'
                        type='text'
                        value={taskTitle}
                        onChange={updateTitle}
                        placeholder='Enter Title'
                        maxLength={100}
                        onClick={stopPropagation}
                    >
                    </input>
                </div>

                <div className='descriptionDiv' >
                    <p className='description' onClick={stopPropagation}>{descrpContent}</p>
                </div>
                <div className='dateCreatedDiv' onClick={stopPropagation}>
                    <p className='date-created' onClick={stopPropagation}>{taskData.timestamp}</p>
                </div>
                <div className='dueDateDiv' onClick={stopPropagation}>
                    <label>Due:</label>
                    <input className='due-date'
                        type='date'
                        value={dueDate}
                        onChange={updateDueDate}
                        placeholder='Due Date'
                        maxLength={15}
                    >
                    </input>
                </div>
            </div>
            {isModalOpen && <TaskModal dateCreated={taskData.timestamp} closeModal={closeModal} />}
        </>
    );
}

export default TaskBarContext;