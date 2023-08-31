import './styles/taskmodal.css';
import { useTaskContext, TaskContextProvider } from '../TaskModalContext';


export const TaskModalContext = ({ closeModal, dateCreated }) => {
    return (
      <TaskContextProvider>
        <TaskModal closeModal={closeModal} dateCreated={dateCreated} />
      </TaskContextProvider>
    );
  };

export const TaskModal = ({ closeModal, dateCreated }) => {
    const { taskTitle, setTaskTitle, dueDate, setDueDate } = useTaskContext();

    const updateTitle = (event) => {
        setTaskTitle(event.target.value);
    };

    const updateDueDate = (event) => {
        setDueDate(event.target.value);
    };

    const stopPropagation = (event) => {
        event.stopPropagation();
      };

    return (
        <div className="modal-dropback" onClick={closeModal}>
            <div className="modal-card" onClick={stopPropagation}>
                <div className="modal-task-title-div">
                    <input id='modal-task-title' className='modal-task-title'
                        type='text'
                        value={taskTitle} 
                        onChange={updateTitle}
                        placeholder='Enter Title'
                        maxLength={100}
                    ></input>
                </div>

                <div className="modal-date-created">{dateCreated}</div>
                <div className='modal-due-date-div' onClick={stopPropagation}>
                    <label>Due:</label>
                    <input className='modal-due-date'
                        type='date'
                        value={dueDate}
                        onChange={updateDueDate}
                        placeholder='Due Date'
                        maxLength={15}
                    >
                    </input>
                    </div>
                <h3 className="description-title">Description</h3>
                <div className='modal-description'>
                    <textarea
                        type="text"
                        placeholder='Enter description here...'
                        className='modal-description-text-area'
                    >
                    </textarea>
                </div>

                <div className='priority-container'>
                    <div className="priority1 priority-comp"><p>P1</p></div>
                    <div className="priority2 priority-comp"><p>P2</p></div>
                    <div className="priority3 priority-comp"><p>P3</p></div>
                    <div className="priority4 priority-comp"><p>P4</p></div>
                </div>
                <button className='delete-button'>DELETE</button>
            </div>
        </div>
    );

}

export default TaskContextProvider
