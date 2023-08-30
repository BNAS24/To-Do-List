import './styles/taskmodal.css';
import React from 'react';

export const TaskModal = ({ closeModal, dateCreated }) => {

    const stopPropagation = (event) => {
        event.stopPropagation();
      };

    return (
        <div className="modal-dropback" onClick={closeModal}>
            <div className="modal-card" onClick={stopPropagation}>
                <div className="modal-task-title-div">
                    <input id='modal-task-title' className='modal-task-title'
                        type='text'
                        placeholder='Task Title'
                        maxLength={100}
                    ></input>
                </div>

                <div className="modal-date-created">{dateCreated}</div>
                <div className="modal-due-date"></div>
                <h3 className="description-title">Description</h3>
                <div className='modal-description'>
                    <textarea
                        type="text"
                        placeholder='Aliquam lacinia, sem vitae vehicula tristique, tortor diam interdum ligula, vitae tincidunt felis magna in leo. In dapibus mauris non neque laoreet, a lacinia metus faucibus. Praesent eget arcu vel urna vulputate molestie. Sed sed tincidunt odio. Nullam in dolor id nibh mattis vulputate luctus quis magna. Nullam quis lorem ut eros auctor tincidunt. Etiam eu elit non odio tincidunt viverra. Proin tempus dui nunc, eget venenatis augue congue sit amet. Aliquam velit lectus, rutrum quis eros tincidunt, tempor rhoncus nisi. Nulla dapibus erat efficitur, pulvinar justo at, laoreet erat. Mauris finibus at sapien nec tincidunt. Duis nunc massa, hendrerit at lorem eget, ornare cursus purus. Donec vitae arcu et quam maximus cursus. Proin sit amet lorem accumsan, tincidunt quam ac, maximus mi.Proin tempus dui nunc, eget venenatis augue congue sit amet. Aliquam velit lectus, rutrum quis eros tincidunt, tempor rhoncus nisi. Nulla dapibus erat efficitur, pulvinar justo at, laoreet erat. Mauris finibus at sapien nec tincidunt. Duis nunc massa, hendrerit at lorem eget, ornare cursus purus. Donec vitae arcu et quam maximus cursus. Proin sit amet lorem accumsan, tincidunt quam ac, maximus mi. '
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

//This is just a structure for visual purposes, adjust classnames and parameters if needed be.