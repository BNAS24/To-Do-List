import './styles/taskmodal.css';
import TaskBar from './taskbar';

export const TaskModal = ({toggleModal, dateCreated, closeModal}) => {

    
    return (
        <div className="dropback" >
            <div className="modal-card" onClick={closeModal}>
                <div className="TaskTitle"></div>

                <div className="dateCreated">{dateCreated}</div>
                <div className="dateDue"></div>

                <div className="TaskDescription"></div>

                <div className="priority1"></div>
                <div className="priority2"></div>
                <div className="priority3"></div>
                <div className="priority4"></div>
            </div>
        </div>
    );

}

//This is just a structure for visual purposes, adjust classnames and parameters needed be.