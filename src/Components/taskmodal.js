import './styles/taskmodal.css';
import { useTaskContext, TaskContextProvider } from '../TaskModalContext';

export const TaskModalContext = ({ closeModal, dateCreated }) => {
    return (
        <TaskContextProvider>
            <TaskModal closeModal={closeModal} dateCreated={dateCreated} />
        </TaskContextProvider>
    );
};

export const TaskModal = ({ closeModal, dateCreated, }) => {

    const { taskTitle, setTaskTitle, dueDate, setDueDate, descrpContent, setDescrpContent,setSelectedPriority} = useTaskContext();

    const updateTitle = (event) => {
        setTaskTitle(event.target.value);
    };

    const updateDueDate = (event) => {
        setDueDate(event.target.value);
    };

    const updateDescription = (event) => {
        setDescrpContent(event.target.value);
    }

    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    const handlePriorityClick = (event) => {
        const priorityDivs = document.querySelectorAll('.priority-comp');

        //Remove the 'priority-selected' class from all priority divs and reset background color
        priorityDivs.forEach((div) => {
            div.classList.remove('priority-selected');
            div.style.backgroundColor = 'transparent'; // Reset background color
        });

        // Add the 'priority-selected' class to the clicked priority div
        const div = event.target.parentNode;
        div.classList.add('priority-selected');

        // Get the selected priority text
        const selectedPriority = event.target.innerText;

        let d1 = document.getElementById('p1')
        d1.style.color = 'var(--scheme-red)'
        let d2 = document.getElementById('p2')
        d2.style.color = 'var(--scheme-orange)'
        let d3 = document.getElementById('p3')
        d3.style.color = 'var(--scheme-blue)'
        let d4 = document.getElementById('p4')
        d4.style.color = 'var(--grey-light)'


        // Use a switch statement to set the background color based on the selected style
        switch (selectedPriority) {
            case 'P1':
              d1.style.backgroundColor = 'var(--scheme-red)';
              d1.style.color = 'white';
              setSelectedPriority('P1'); // Update selectedPriority state in the task context
              break;
            case 'P2':
              d2.style.backgroundColor = 'var(--scheme-orange)';
              d2.style.color = 'white';
              setSelectedPriority('P2'); // Update selectedPriority state in the task context
              break;
            case 'P3':
              d3.style.backgroundColor = 'var(--scheme-blue)';
              d3.style.color = 'white';
              setSelectedPriority('P3'); // Update selectedPriority state in the task context
              break;
            case 'P4':
              d4.style.backgroundColor = 'var(--grey-light)';
              d4.style.color = 'white';
              setSelectedPriority('P4'); // Update selectedPriority state in the task context
              break;
            default:
              div.style.backgroundColor = 'transparent';
              document.getElementById('p1').style.color = 'var(--scheme-red)';
              document.getElementById('p2').style.color = 'var(--scheme-orange)';
              document.getElementById('p3').style.color = 'var(--scheme-blue)';
              document.getElementById('p4').style.color = 'var(--grey-light)';
              setSelectedPriority(null); // Reset selectedPriority state in the task context
              break;
          }

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
                        value={descrpContent}
                        onChange={updateDescription}
                        className='modal-description-text-area'
                    >
                    </textarea>
                </div>

                <div className='priority-container'>
                    <div className="priority1 priority-comp" id="p1" onClick={handlePriorityClick}><p>P1</p></div>
                    <div className="priority2 priority-comp" id="p2" onClick={handlePriorityClick}><p>P2</p></div>
                    <div className="priority3 priority-comp" id="p3" onClick={handlePriorityClick}><p>P3</p></div>
                    <div className="priority4 priority-comp" id="p4" onClick={handlePriorityClick}><p>P4</p></div>


                </div>
                <button className='delete-button'>DELETE</button>
            </div>
        </div>
    );

}


