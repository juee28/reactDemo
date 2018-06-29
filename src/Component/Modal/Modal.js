import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return (
        <div className={props.showModal ? 'showModal' : 'hideModal'}>
            <div className="overlay" onClick={props.onModalClose}></div>
            <div className="Modal">
                {props.children}
            </div>
        </div>
    );
}


export default Modal;
