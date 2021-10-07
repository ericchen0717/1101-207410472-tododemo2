import React,{useState} from 'react'
import Modal_72 from './Modal_72'
import Backdrop_72 from './Backdrop_72'

const Todo = props => {
    const [showModal, setShowModal] = useState(false)
    const setShowModalHandler = () => {
        setShowModal(!showModal)
    }

    function closeModalHandler(){
        setShowModal(false);
    }

    return (
        <div>
            <div className="card">
                <h2>{props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick={setShowModalHandler}>Delete</button>
                </div>
            </div>
            {showModal && <Backdrop_72/>}
            {showModal && <Modal_72 text='Are you sure?' onClose={closeModalHandler} />}
        </div>
    )
}

export default Todo
