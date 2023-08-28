import './styles/taskmodal.css';

export const TaskModal = ({closeModal, dateCreated}) => {

    
    return (
        <div className="dropback" onClick={closeModal} >
            <div className="modal-card" >
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