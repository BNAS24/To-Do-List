import React, { useState, useEffect } from 'react';
import './styles/taskbar.css';
import { TaskModal } from './taskmodal.js';
import { useTaskContext, TaskContextProvider } from '../TaskModalContext';

const TaskBarContext = ({ taskData, priorityChecker, deleteTask }) => {
    return (
        <>
            <TaskContextProvider>
                <TaskBar
                    taskData={taskData}
                    circleColor={priorityChecker}
                    deleteTask={deleteTask}
                />
            </TaskContextProvider>
        </>
    );
};

const TaskBar = ({ taskData, priorityChecker, deleteTask }) => {

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

    return (
        <>
            <div
                className="taskbar"
                onClick={openModal}
            >
                <div
                    className="taskbar-header"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        className="circleAll"
                    >
                        <circle
                            cx="20"
                            cy="20"
                            r="18.5"
                            fill="#979797"
                            fillOpacity="0.16"
                            stroke={getPriorityColor(selectedPriority)}
                            strokeWidth="3"
                            className={priorityChecker}
                            onClick={() => deleteTask(taskData)} />
                    </svg>

                    <div
                        className='task-titleDiv'
                        onClick={stopPropagation}>
                        <input
                            className='task-title'
                            type='text'
                            value={taskTitle}
                            onChange={updateTitle}
                            placeholder='Enter Title'
                            maxLength={100}
                            onClick={stopPropagation}
                        >
                        </input>
                    </div>

                    <div
                        className='date-group'
                    >
                        <div
                            className='dateCreatedDiv'
                            onClick={stopPropagation}
                        >
                            <p
                                className='date-created'
                                onClick={stopPropagation}
                            >
                                {taskData.timestamp}
                            </p>
                        </div>
                        <div
                            className='dueDateDiv'
                            onClick={stopPropagation}>
                            <label
                                className='due-date-text'
                            >Due:
                            </label>
                            <input
                                className='due-date due-date-text'
                                type='date'
                                value={dueDate}
                                onChange={updateDueDate}
                                placeholder='Due Date'
                                maxLength={15}
                            >
                            </input>
                        </div>


                    </div>

                </div>
                <div
                    className='sm-screen-group'
                    onClick={stopPropagation}
                >
                    <label
                        className='due-date-text-sm-screen'
                        htmlFor={`sm-screen-input-${taskData.id}`}
                    >
                        Due Date
                    </label>
                    <input
                        className='sm-screen-input'
                        type='date'
                        id={`sm-screen-input-${taskData.id}`}
                        name="date"
                        placeholder='mm/dd/yyyy'
                        datadateformat="mm-dd-yyyy"
                        value={dueDate}
                        onChange={updateDueDate}
                    />
                </div>
                <div
                    className='descriptionDiv'
                >
                    <p
                        className='description'
                        onClick={stopPropagation}
                    >
                        {descrpContent}
                    </p>
                </div>
                <button
                    className='delete-button-taskbar'
                    onClick={() => deleteTask(taskData) && stopPropagation}
                    type='button'
                >
                    DELETE
                </button>
            </div>

            {isModalOpen &&
                <TaskModal
                    dateCreated={taskData.timestamp}
                    closeModal={closeModal}
                    deleteTask={deleteTask}
                />
            }
        </>
    );
}

export default TaskBarContext;