import React from "react";
import "./Modal.css";

function Modal(props) {
    const handleClose = () => {
        props.onClose();
        };


    return (
        <div className="modal__container">
            <div className="modal">
                <h2>MANGE MOI CE COOKIE !!!!</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="modal__boutons">
                    <button onClick={handleClose}>Refuser</button>
                    <button onClick={handleClose}>Accepter</button>
                    
                </div>
            </div>
        </div>
    );
}
export default Modal;