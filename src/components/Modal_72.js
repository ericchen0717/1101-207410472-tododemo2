import React from 'react'

const Modal_72 = props => {
    return (
        <div class="modal">
            <p>{props.text}</p>
            <button class="btn btn--alt" onClick={props.onClose}>Cancel</button>
            <button class="btn" onClick={props.onClose} >Confirm</button>
        </div>
    )
}

export default Modal_72
